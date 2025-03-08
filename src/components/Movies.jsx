import React from 'react'

const Movies = () => {
 
  return (
    <div className='bg-zinc-700 lg:h-35 text-white p-5 hidden lg:block  '>
      <div className='space-x-1 flex justify-center'>
        <button className='bg-green-600 w-8 p-2 rounded cursor-pointer'>1</button>
        <button className='bg-zinc-800 w-8 p-2 rounded cursor-pointer'>2</button>
        <button className='bg-zinc-800 w-8 p-2 rounded cursor-pointer'>3</button>
        <button className='bg-zinc-800 w-8 p-2 rounded cursor-pointer'>4</button>
        <button className='bg-zinc-800 w-8 p-2 rounded cursor-pointer'>5</button>
        <button className='bg-zinc-800 w-8 p-2 rounded cursor-pointer'>6</button>
        <button className='bg-zinc-800 w-8 p-2 rounded cursor-pointer'>7</button>
        <button className='bg-zinc-800 w-8 p-2 rounded cursor-pointer'>8</button>
        <button className='bg-zinc-800 w-8 p-2 rounded cursor-pointer'>...</button>
        <button className='bg-zinc-800 w-20 p-2 rounded cursor-pointer'>Next &gt;&gt;</button>
      </div>
    </div>
  )
}

export default Movies
