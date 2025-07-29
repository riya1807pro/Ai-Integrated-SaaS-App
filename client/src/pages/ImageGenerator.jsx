import { Image, Sparkles } from 'lucide-react';
import React, { useState } from 'react'

const ImageGenerator = () => {

     const ImageCategory =["Realistic", "Ghibli style", "Anime style", "Cartoon style",
      "Fantasy style", "Realistic style","3D style","Portrait style"]
    
      const [selectedImageCategory, setSelectedImageCategory] = useState("Realistic");
      const [input, setInput] = useState('');
      const [publish, setPublish] = useState(false);
    
      const formSubmit = (e) => {
        e.preventDefault();
        console.log('Image Category:', input);
        console.log('Selected image Category:', selectedImageCategory);
      }

  return (
      <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
      {/* left side */}
      <form onSubmit={formSubmit} className='w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg'>
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-[#00AD25]' />
          <h1 className='text-xl font-semibold'>Ai Image Generator</h1>
        </div>

        <p className='mt-6 text-sm font-medium'>Describe your Image</p>

        <textarea
          onChange={(e) => setInput(e.target.value)}
          value={input} rows={4} 
          className='w-full p-2 px-3 mt-2 outline-none text-sm 
          rounded-md border border-gray-300'
          placeholder='Describe what you want to see in the image' 
          required/>

          <p className='mt-4 text-sm font-medium'>Style</p>

          <div className='mt-3 flex gap-3 flex-wrap  sm:max-w-9/11'>
            {ImageCategory.map((item)=>(
              <span
              onClick={() => setSelectedImageCategory(item)}
               className={`text-sm px-4 py-1 border rounded-full cursor-pointer 
                ${selectedImageCategory === item ? 'bg-green-100 text-green-700' 
                  : 'bg-gray-50 text-gray-500'}`}
               key={item}>{item}
              </span>
            ))}
          </div> 
          <div className='my-6 flex items-center gap-2'>
            <label className='relative cursor-pointer'>
              <input type="checkbox" onChange={(e) => setPublish(e.target.checked)}
              checked={publish} className='sr-only peer' />

              <div className='w-9 h-5 bg-slate-300 rounded-full
               peer-checked:bg-green-500 transition'></div>

               <span className='absolute left-1 top-1 w-3 h-3 bg-white rounded-full
                transition peer-checked:translate-x-4'></span>
            </label>
                <p className='text-sm'>Make this Image public</p>
          </div>

            <button className='w-full flex justify-center items-center gap-2 
            bg-gradient-to-r from-[#00AD25] to-[#04FF50] text-white px-4 py-2 mt-6 text-sm 
            rounded-lg cursor-pointer'>
              <Image className='w-5' />
              Generate Image
            </button>
      </form>

      {/* right side */}
      <div className='w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg
      min-h-96 flex flex-col'>
        <div className='flex items-center gap-3'>
          <Image className='w-5 h-5 text-[#00AD25]'/>
          <h1 className='text-xl font-semibold'>Generated Image</h1>
        </div>

        <div className='flex flex-1 justify-center items-center'>
          <div className='flex flex-col text-sm items-center gap-5 text-gray-400'>
            <Image className='h-9 w-9'/>
            <p>Enter the description and click "Generate Image" to get Started</p>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default ImageGenerator
