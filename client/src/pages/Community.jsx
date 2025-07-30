import React, { useEffect, useState } from 'react'
import {useUser} from "@clerk/clerk-react"
import {dummyPublishedCreationData} from '../assets/asset'

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

              <div>
                <p className='text-sm hidden group-hover:block'>
                  {creationItem.prompt}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Community
