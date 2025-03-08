import React from 'react'

const SearchMovie = () => {
  return (
    <div className='bg-zinc-800 text-white h-85 lg:flex flex-col justify-evenly p-25 hidden'>
        
  <div className='lg:block items-center hidden'>
  <h1 className='mb-3 ml-62 text-zinc-500 text-2xl font-bold '>Search Term:</h1>
      <div className='flex space-x-6 justify-center'>
      <div className='bg-zinc-600 w-205 p-1 ml-30'>
        <input type="text" className='w-full h-full outline-none' />
      </div>
      <button className='bg-green-500 w-25 rounded p-2 cursor-pointer hover:bg-green-700'>Search</button>
      </div>
  
    </div>

    
    <div className='md:flex space-x-5 justify-center mt-5 hidden'>
        <div className='flex flex-col'>
        <p className='text-zinc-500'>
            Quality:
        </p>
        <select name="" id="" className='bg-zinc-600  outline-none w-30 rounded p-2 mt-3'>
            <option value="All" className=''>All</option>
            <option value="480p" className=''>480p</option>
            <option value="720p">720p</option>
            <option value="1080p">1080p</option>
            <option value="1080p.x265">1080p.x265</option>
        </select>
        </div>
        <div className='flex flex-col'>
        <p className='text-zinc-500'>
            Genre:
        </p>
        <select name="" id="" className='bg-zinc-600 outline-none w-30 rounded p-2 mt-3'>
            <option value="All">All</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Animation">Animation</option>
            <option value="Biography">Biography</option>
        </select>
        </div>
        <div className='flex flex-col'>
        <p className='text-zinc-500'>
            Rating:
        </p>
        <select name="" id="" className='bg-zinc-600 outline-none w-30 rounded p-2 mt-3'>
            <option value="All">All</option>
            <option value="9+">9+</option>
            <option value="8+">8+</option>
            <option value="7+">7+</option>
            <option value="6+">6+</option>
        </select>
        </div>
        <div className='flex flex-col'>
        <p className='text-zinc-500'>
            Year:
        </p>
        <select name="" id="" className='bg-zinc-600 outline-none w-30 rounded p-2 mt-3'>
            <option value="All">All</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2020-now">2020-now</option>
            <option value="2010-now">2010-now</option>
        </select>
        </div>
        <div className='flex flex-col'>
        <p className='text-zinc-500'>
            Language:
        </p>
        <select name="" id="" className='bg-zinc-600 outline-none w-30 rounded p-2 mt-3'>
            <option value="English">English</option>
            <option value="Foreign">Foreign</option>
            <option value="All" selected="All">All</option>
            <option value="French (3163)">French (3163)</option>
            <option value="Japanese (2739)">Japanese (2739)</option>
            <option value="Spanish (1768)">Spanish (1768)</option>
            <option value="Italian (1493)">Italian (1493)</option>
        </select>
        </div>
        <div className='flex flex-col'>
        <p className='text-zinc-500'>
            Order By:
        </p>
        <select name="" id="" className='bg-zinc-600 outline-none w-30 rounded p-2 mt-3'>
            <option value="Latest">Latest</option>
            <option value="Action">Oldest</option>
            <option value="Adventure">Featured</option>
            <option value="Animation">Animation</option>
            <option value="Biography">Seeds</option>
        </select>
        </div>
    </div>
    </div>
  
  )
}

export default SearchMovie
