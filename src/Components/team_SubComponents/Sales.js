import React from 'react'
import SaleBg from '../../assets/Images/backgrounds/Sales.png'

const Sales = () => {
  return (
    <div className='flex justify-center items-center'>
      
     <div className='w-[700px] mx-auto md:mx-0 text-center'>
              <img src={SaleBg} alt="Logo" className="w-full h-full" />
              <div className='font-bold te'>
              <p>
              2 Channel Sales Partner in INDIA
              </p>
            </div>
            </div>
           
    
  </div>

  )
}

export default Sales

