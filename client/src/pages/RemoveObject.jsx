import { Scissors, Sparkles } from 'lucide-react';
import React, { useState } from 'react'

const RemoveObject = () => {
  
   const [input, setInput] = useState('');
   const [object, setObject] = useState('');
      const formSubmit = (e) => {
        e.preventDefault();
      }

  return (
     <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
      {/* left side */}
      <form onSubmit={formSubmit} className='w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg'>
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-[#4A7AFF]' />
          <h1 className='text-xl font-semibold'>Object Removal</h1>
        </div>

        <p className='mt-6 text-sm font-medium'>Upload Image</p>

        <input type='file'
          onChange={(e) => setInput(e.target.files[0])}
         accept='image/*' 
          className='w-full p-2 px-3 mt-2 outline-none text-sm 
          rounded-md border border-gray-300 text-gray-600'
          required/>

          <p className='text-xs text-gray-500 font-serif mt-1 '>
            Supports JPG, PNG, and other files.
          </p>

          <p className='mt-6 text-sm font-medium'>Describe object to remove</p>

        <textarea
          onChange={(e) => setObject(e.target.value)}
          value={object} rows={4} 
          className='w-full p-2 px-3 mt-2 outline-none text-sm 
          rounded-md border border-gray-300'
          placeholder='eg: watch or spoon, only single object name is allowed' 
          required/>

            <button className='w-full flex justify-center items-center gap-2 
            bg-gradient-to-r from-[#417DF6] to-[#8E37EB] text-white px-4 py-2 mt-6 text-sm 
            rounded-lg cursor-pointer'>
              <Scissors className='w-5' />
             Remove Object
            </button>
      </form>

      {/* right side */}
      <div className='w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg
      min-h-96 flex flex-col'>
        <div className='flex items-center gap-3'>
          <Scissors className='w-5 h-5 text-[#4A71FF]'/>
          <h1 className='text-xl font-semibold'>Processed Image</h1>
        </div>

        <div className='flex flex-1 justify-center items-center'>
          <div className='flex flex-col text-sm items-center gap-5 text-gray-400'>
            <Scissors className='h-9 w-9'/>
            <p>Upload the image and click "Remove Object" to get Started</p>
          </div>
        </div> 
      </div> 
    </div>
  )
}

export default RemoveObject
