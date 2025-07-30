import { FileText, Sparkles } from 'lucide-react';
import React, { useState } from 'react'

const ReviewResume = () => {
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
          <Sparkles className='w-6 text-[#00DA83]' />
          <h1 className='text-xl font-semibold'>Resume Review</h1>
        </div>

        <p className='mt-6 text-sm font-medium'>Upload Resume</p>

        <input type='file'
          onChange={(e) => setInput(e.target.files[0])}
         accept='application/pdf' 
          className='w-full p-2 px-3 mt-2 outline-none text-sm 
          rounded-md border border-gray-300 text-gray-600'
          required/>

          <p className='text-xs text-gray-500 font-serif mt-1 '>
            Supports Pdf files only.
          </p>

            <button className='w-full flex justify-center items-center gap-2 
            bg-gradient-to-r from-[#00DA83] to-[#009BB3] text-white px-4 py-2 mt-6 text-sm 
            rounded-lg cursor-pointer'>
              <FileText className='w-5' />
             Review Resume
            </button>
      </form>

      {/* right side */}
      <div className='w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg
      min-h-96 flex flex-col max-h-[600px]'>
        <div className='flex items-center gap-3'>
          <FileText className='w-5 h-5 text-[#00DA83]'/>
          <h1 className='text-xl font-semibold'>Analysis Results</h1>
        </div>

        <div className='flex flex-1 justify-center items-center'>
          <div className='flex flex-col text-sm items-center gap-5 text-gray-400'>
            <FileText className='h-9 w-9'/>
            <p>Upload the Resume</p>
          </div>
        </div> 
      </div> 
    </div>
  )
}

export default ReviewResume
