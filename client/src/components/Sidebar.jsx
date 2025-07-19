import React from 'react'
import { assets } from '../assets/asset'
import {Protect, SignedOut, useClerk, useUser} from "@clerk/clerk-react"
import { Eraser, FileText, Hash, House, Icon, Image, LogOut, Scissors, SquarePen, Users } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Sidebar = ({Sidebar,setSidebar}) => {

    const navItems = [
        {to:"/ai", label:"Dashboard", Icon:House},
        {to:"/ai/WriteArticles", label:"WriteArticles", Icon:SquarePen},
        {to:"/ai/BlogTitle", label:"BlogTitles", Icon:Hash},
        {to:"/ai/GenerateImage", label:"GenerateImage", Icon:Image},
        {to:"/ai/RemoveBackground", label:"RemoveBackground", Icon:Eraser},
        {to:"/ai/RemoveObjects", label:"RemoveObjects", Icon:Scissors},
        {to:"/ai/ReviewResume", label:"ReviewResume", Icon:FileText},
        {to:"/ai/Community", label:"Community", Icon:Users },
    ]

    const {user} = useUser();
    const {signOut, openUserProfile} = useClerk()
  return (
    <div className={`w-60 bg-white border-r border border-gray-200 
    flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0
    ${Sidebar? "translate-x-0": "max-sm:translate-x-full"} transition-all
    duration-300 ease-in-out`}>
      
      <div className='my-7 w-full'>
        <img src={user.imageUrl } alt="user avatar"
           className='w-13 rounded-full mx-auto'/>
        <h1 className='mt-1 text-center'>{user.fullName}</h1>
        <div className='px-6 mt-5 text-sm text-gray-600 font-medium'>
            {navItems.map(({to , label, Icon})=>(
                <NavLink 
                  key={to} to={to} end={to==='/ai'} onClick={()=>{
                    setSidebar(false)
                  }} className={({isActive})=>`px-3.5 py-2.5 flex items-center
                     gap-3 rounded ${isActive ?
                    'bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white' 
                    : ""}`}
                >
                    {({isActive})=>(
                        <>
                         <Icon 
                            className={`w-4 h-4 ${isActive?'text-white':''}`}
                         />
                         {label}
                        </>
                    )}

                </NavLink>
            ))}
        </div>
      </div>

      <div className='w-full border-t border-gray-200 p-4 px-7 flex
      items-center justify-between'>
        <div onClick={openUserProfile} 
        className='flex gap-2 items-center cursor-pointer'>
            <img src={user.imageUrl} alt="user avatar" 
               className='w-8 rounded-full'/>
            <div>
                <h1 className='text-sm font-medium'>{user.fullName}</h1>
                <p className='text-sm text-gray-500'>
                    <Protect plan="premium" fallback="free">
                        Premium
                    </Protect>
                    Plan
                </p>
            </div>
        </div>
        <LogOut className='w-4.5 text-gray-400 hover:text-gray-700
        transition cursor-pointer ' onClick={signOut}/>
      </div>

    </div>
  )
}

export default Sidebar
