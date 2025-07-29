import { Hash, Sparkles } from 'lucide-react'
import React, { useState } from 'react'

const BlogTitles = () => {

   const BlogCategory =["General" , "Technology", "Health", 
    "Lifestyle", "Business", "Education", "Travel", "Food"]
  
    const [selectedBlogCategory, setSelectedBlogCategory] = useState("General");
    const [input, setInput] = useState('');
  
    const formSubmit = (e) => {
      e.preventDefault();
      console.log('Blog Category:', input);
      console.log('Selected Category:', selectedBlogCategory);
    }

  return (
      <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
      {/* left side */}
      <form onSubmit={formSubmit} className='w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg'>
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6v text-[#8E37EB]' />
          <h1 className='text-xl font-semibold'>Ai Title Generator</h1>
        </div>

        <p className='mt-6 text-sm font-medium'>Keyword</p>

        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}  
          type='text' 
          className='w-full p-2 px-3 mt-2 outline-none text-sm 
          rounded-md border border-gray-300'
          placeholder='The future of Artificial Intelligence is.......' 
          required/>

          <p className='mt-6 text-sm font-medium'>Category</p>

          <div className='mt-3 flex gap-3 flex-wrap  sm:max-w-9/11'>
            {BlogCategory.map((item)=>(
              <span
              onClick={() => setSelectedBlogCategory(item)}
               className={`text-sm px-4 py-1 border rounded-full cursor-pointer 
                ${selectedBlogCategory === item ? 'bg-purple-100 text-purple-700' 
                  : 'bg-gray-50 text-gray-500'}`}
               key={item}>{item}
              </span>
            ))}
          </div> 
          <br/>
            <button className='w-full flex justify-center items-center gap-2 
            bg-gradient-to-r from-[#C341F6] to-[#8E47EB] text-white px-4 py-2 mt-6 text-sm 
            rounded-lg cursor-pointer'>
              <Hash className='w-5' />
              Generate Title
            </button>
      </form>

      {/* right side */}
      <div className='w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg
      min-h-96 flex flex-col'>
        <div className='flex items-center gap-3'>
          <Hash className='w-5 h-5 text-[#8E37EB]'/>
          <h1 className='text-xl font-semibold'>Generated Title</h1>
        </div>

        <div className='flex flex-1 justify-center items-center'>
          <div className='flex flex-col text-sm items-center gap-5 text-gray-400'>
            <Hash className='h-9 w-9'/>
            <p>Enter the topic and click "Generate Title" to get Started</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogTitles
