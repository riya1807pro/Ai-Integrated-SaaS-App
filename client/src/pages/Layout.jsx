import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/asset'
import { Menu, X } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import { SignIn, useUser } from '@clerk/clerk-react'

const Layout = () => {
  const {user} = useUser();
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false)


  return user? (
    <div className='flex flex-col items-start justify-start h-screen'>

      <nav className='w-full px-8 min-h-14 flex items-center justify-between border border-gray-200 '>
        <img src={assets.logo} alt="logo" className='cursor-pointer w-32 sm:w-44' onClick={()=>navigate("/")} />
        {
          sidebar? <X onClick={()=>setSidebar(false)} 
             className='h-6 w-5 sm:hidden text-gray-600 '/> 
          : <Menu onClick={()=> setSidebar(true)} 
              className='h-6 w-5 sm:hidden text-gray-600 '/>
        }
      </nav>
      <div className='flex-1 w-full flex h-[calc(100vh-64px)]'>
           <Sidebar Sidebar={sidebar} setSidebar={setSidebar}/>
           <div className='flex-1 bg-[#F4F7FB]'>
              <Outlet/>
           </div>
      </div>     
    </div>
  ):
  <div className='flex items-center justify-center h-screen'>
    <SignIn/>
  </div>
}

export default Layout
