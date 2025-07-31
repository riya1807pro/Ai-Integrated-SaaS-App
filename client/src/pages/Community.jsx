import React, { useEffect, useState } from 'react'
import {useUser} from "@clerk/clerk-react"
import {dummyPublishedCreationData} from '../assets/asset'
import { Heart } from 'lucide-react'

const Community = () => {

  const [creation, setCreation] = useState([])
  const {user} = useUser();

  const fetchCreation = async () => {
    setCreation(dummyPublishedCreationData)
  }

  useEffect(()=> {
    fetchCreation();
  }, [user])

  return (
    <div className='flex h-full flex-1 flex-col gap-4 p-6'>
      Creation
      <div className='bg-white rounded-xl h-full w-full overflow-y-scroll'>
        {
          creation.map((creationItem, index) => (
            <div className='relative group inline-block pl-3 pt-4 w-full sm:max-w-1/2 lg:max-w-1/3' 
            key={index}>
              <img src={creationItem.content} alt="" className='w-full h-full object-cover rounded-lg' />

              <div className='absolute bottom-0 left-3 top-0 right-0 flex gap-2 
              items-end justify-end group-hover:justify-between p-3 text-white rounded-lg
              group-hover:bg-gradient-to-b from-transparent to-black/80 '>
                <p className='text-sm hidden group-hover:block'>
                  {creationItem.prompt}
                </p>

                <div className='flex gap-1 items-center'>
                  <p>{creationItem.likes.length} </p>
                    <Heart className={`min-w- 5 h-5 hover:scale-110 cursor-pointer
                      ${creationItem.likes.includes(user.id) ? 'text-red-500 fill-red-500' : 'text-white' }`}
                    />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Community
