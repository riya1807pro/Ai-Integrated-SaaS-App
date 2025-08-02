import { clerkClient } from "@clerk/express";
import e from "express";

//middle ware to check user dat and premium status

export const auth = async(req, res, next)=>{
    try {
        const {userId , auth} = await req.auth();
        const hasPremium = await has({plan: "premium"});

        const {user} = await clerkClient.users.getUser(userId);

        if(!hasPremium && user.privateMetadata.free_usage) {
            req.free_usage = user.privateMetadata.free_usage;
        }else{
            await clerkClient.users.updateUserMetadata(userId, {
                privateMetadata:{
                    free_usage : 0
                }
            })
            req.free_usage = 0;
        }
        req.plan = hasPremium ? "premium" : "free";
        next();
    } catch (error) {
        req.json({
            success: false,
            message: error.message || "An error occurred during authentication"
        })
    }
}