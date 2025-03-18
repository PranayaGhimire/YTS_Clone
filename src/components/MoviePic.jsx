import React, { useState } from 'react'

const MoviePic = ({imgLink,name,year}) => {
  const [isOpen,setIsopen]=useState(false);
  return (
    <div className='bg-zinc-700 h-80 text-white' >
   
      <div
      onMouseOver={()=>setIsopen(true)} onMouseOut={()=>setIsopen(false)}
      className='lg:w-44 lg:h-60 w-40 h-40 bg-zinc-700 overflow-hidden ml-2 border-4 border-white  hover:border-green-500 cursor-pointer  transition relative'>
      {/* Background Opacity Overlay */}

      {isOpen && (
        <div className='absolute inset-0 bg-black/50'></div> // Reduces background opacity only
      )}

      {/* Image */}
      <img src={imgLink} className='object-cover w-full h-full' alt="" />

      {/* Foreground Content */}

      {isOpen &&(
        <div className={` absolute inset-0 flex flex-col items-center justify-evenly z-10`}
        
        >
          
          <div className='flex flex-col space-y-1 items-center'>
          <i className="fa-solid fa-star text-green-400 text-2xl"></i>
          <h1 className='text-2xl font-bold'>6/10</h1>
            </div>
            <div className='flex flex-col space-y-1 items-center'>
            <h1 className='text-2xl font-bold'>Action </h1>
            <h1 className='text-2xl font-bold'>Adventure</h1>
            </div>
          
          <button className='bg-green-500 p-2 rounded hover:bg-green-700 cursor-pointer'>View Details</button>
        </div>
      )}
        
      </div>
      <p className='ml-3'>{name}</p>
      <p className='ml-3 text-zinc-400'>{year}</p>
    </div>
  )
}

export default MoviePic
