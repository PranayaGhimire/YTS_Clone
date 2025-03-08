import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col bg-zinc-800 lg:h-30 h-35 text-white justify-evenly'>
<div className='flex  items-center space-x-3 lg:justify-center flex-wrap p-3'>
      <h1>YTS © 2011 - 2025</h1>
      <span>-</span>
      <a href="#" className='text-zinc-400 hover:text-white'>Blog</a>
      <span>-</span>
      <a href="#" className='text-zinc-400 hover:text-white'>DMCA</a>
      <span>-</span>
      <a href="#" className='text-zinc-400 hover:text-white'>API</a>
      <span>-</span>
      <a href="#" className='text-zinc-400 hover:text-white'>RSS</a>
      <span>-</span>
      <a href="#" className='text-zinc-400 hover:text-white'>Contact</a>
      <span>-</span>
      <a href="#" className='text-zinc-400 hover:text-white'>Browse Movies</a>
      <span>-</span>
      <a href="#" className='text-zinc-400 hover:text-white'>Requests</a>
      <span>-</span>
      <a href="#" className='text-zinc-400 hover:text-white'>Login</a>
      <span>-</span>
      <a href="#" className='text-zinc-400 hover:text-white'>Language</a>
      
    </div>
    <p className='text-center text-sm'>By using this site you agree to and accept our <a className='text-zinc-400 hover:text-white' href='#'>User Agreement</a>, which can be read <a className='text-zinc-400 hover:text-white' href='#'>here</a>.</p>
    </div>
    
  )
}

export default Footer 
