import React from 'react'

const MoviePic = ({imgLink,name,year}) => {
  return (
    <div className='bg-zinc-700 h-80 text-white'>
      <div className='lg:w-44 lg:h-60 w-40 h-40 bg-zinc-700 overflow-hidden ml-2 border-4 border-white  hover:border-green-500 cursor-pointer  transition'>
        <img src={imgLink} className='object-cover w-full h-full hover:opacity-40 transition ' alt="" />
      </div>
      <p className='ml-3'>{name}</p>
      <p className='ml-3 text-zinc-400'>{year}</p>
    </div>
  )
}

export default MoviePic
