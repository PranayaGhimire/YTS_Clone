import React, { useState } from 'react'

const Movies = () => {
const [selectedButton,setSelectedButton]=useState(1);
const handleButtonClick= (buttonNumber) =>{
  if(buttonNumber<=8 && buttonNumber>=1)
  setSelectedButton(buttonNumber);
};
  return (
    <div className='bg-zinc-700 lg:h-35 text-white p-5 hidden lg:block  '>
      <div className='space-x-1 flex justify-center'>

        {/* prev button */}
        <button
          className='bg-zinc-800 w-20 p-2 rounded cursor-pointer hover:bg-green-600'
          onClick={() => handleButtonClick(selectedButton - 1)}
        >
          Prev &gt;&gt;
        </button>
        {/* Button 1-8 */}
        {[1,2,3,4,5,6,7,8].map((buttonNumber)=>(
          <button key={buttonNumber} className={`w-8 p-2 rounded cursor-pointer hover:bg-green-600 ${selectedButton === buttonNumber ? 
          'bg-green-600' : 'bg-zinc-800'}`} onClick={()=>handleButtonClick(buttonNumber)}>
          {buttonNumber}  
          </button>
        ))}
              {/* Ellipsis Button */}
              <button
          className='bg-zinc-800 w-8 p-2 rounded cursor-pointer'
          disabled
        >
          ...
        </button>

           {/* Next Button */}
           <button
          className='bg-zinc-800 w-20 p-2 rounded cursor-pointer hover:bg-green-600'
          onClick={() => handleButtonClick(selectedButton + 1)}
        >
          Next &gt;&gt;
        </button>
       
      </div>
    </div>
  )
}

export default Movies
