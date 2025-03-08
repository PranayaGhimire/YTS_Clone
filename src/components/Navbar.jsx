import React from 'react'
import logo from '../assets/logo-YTS.svg'
const Navbar = () => {
  return (
    <div className='fixed min-w-screen flex justify-around  bg-zinc-900 text-white h-15  items-center'>
      <div className='flex space-x-4'>
        <div>
            <img src={logo} alt="" />
        </div>
        <div className='lg:flex items-center hidden '>
            <h1 className='text-zinc-400 text-xl'>HD movies at the smallest file size.</h1>
        </div>
     

        
      </div>
      <div className='lg:flex items-center space-x-2 ml-10 lg:bg-zinc-800 rounded-full lg:p-1 lg:w-70 hidden'>
      <i className="fa-solid fa-magnifying-glass text-sm ml-2 text-zinc-500"></i>
        <input type="text" placeholder='Quick Search' className='outline-none w-full p-1 hidden lg:block' />
      </div>
      <div className='lg:flex space-x-5 hidden'>
        
            <a href="#" className='text-zinc-400'>Home</a>
            <a href="#" className='text-green-400'>4k</a>
            <a href="#" className='text-zinc-400'>Trending</a>
            <a href="#" className='text-zinc-400'>Browse Movies</a>
          
      </div>
      <div className='lg:flex space-x-2 hidden'>
      <a href="#" className='hover:text-zinc-300'>Login</a>
            <p className='mt-1 text-zinc-400'>|</p>
            <a href="#" className='hover:text-zinc-300'>Register</a>
      </div>
         {/* Mobile view */}
         <div className='lg:hidden flex space-x-3 items-center '>
         <a href="#">
         <i className="fa-solid fa-magnifying-glass text-2xl"></i>
          </a>
         <a href="#" className='text-green-600 text-2xl'>
          4K
         </a>
         <a href="#">
         <i className="fa-solid fa-chart-simple text-2xl"></i>
         </a>
         <a href="#">
         <i className="fa-solid fa-user text-2xl"></i>
         </a>
         </div>
    </div>
  )
}

export default Navbar
