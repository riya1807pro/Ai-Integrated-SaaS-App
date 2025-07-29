import { Eraser, Sparkles } from 'lucide-react';
import React, { useState } from 'react'

const RemoveBackground = () => {

        const [input, setInput] = useState('');
      
        const formSubmit = (e) => {
          e.preventDefault();
        }

  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
      {/* left side */}
      <form onSubmit={formSubmit} className='w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg'>
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-[#FF4938]' />
          <h1 className='text-xl font-semibold'>Background Removal</h1>
        </div>

        <p className='mt-6 text-sm font-medium'>Upload Image</p>

        <input type='file'
          onChange={(e) => setInput(e.target.files[0])}
         accept='image/*' 
          className='w-full p-2 px-3 mt-2 outline-none text-sm 
          rounded-md border border-gray-300 text-gray-600'
          required/>

          <p className='text-sm text-gray-500 font-light mt-1 '>
            Supports JPG, PNG, and other files.
          </p>

            <button className='w-full flex justify-center items-center gap-2 
            bg-gradient-to-r from-[#F6AB41] to-[#FF4938] text-white px-4 py-2 mt-6 text-sm 
            rounded-lg cursor-pointer'>
              <Eraser className='w-5' />
             Remove Background
            </button>
      </form>

      {/* right side */}
      <div className='w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg
      min-h-96 flex flex-col'>
        <div className='flex items-center gap-3'>
          <Eraser className='w-5 h-5 text-[#FF4938]'/>
          <h1 className='text-xl font-semibold'>Processed Image</h1>
        </div>

        <div className='flex flex-1 justify-center items-center'>
          <div className='flex flex-col text-sm items-center gap-5 text-gray-400'>
            <Eraser className='h-9 w-9'/>
            <p>Upload the image and click "Remove Background" to get Started</p>
          </div>
        </div> 
      </div> 
    </div>
  )
}

export default RemoveBackground
