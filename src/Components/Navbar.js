import React from 'react'
import Logo from '../Images/Logo.png'

const Navbar = () => {
  return (
    <header className=''>
      <nav className='flex bg-white text-black  justify-around sticky top-0 z-[-20] mx-auto  w-full items-center p-4'>



        <div className='h-10 w-10 border'>
          <img src={Logo} alt="" />
        </div>

        <div>
          <ul className='flex space-x-4'>
            <li>
              <a href='#home'>Home</a>
            </li>

            <li className='flex  items-center gap-2 cursor-pointer'>
              <a href='#about'>Products</a>
              <i class="fa-solid fa-caret-down"></i>
            </li>

            <li className='flex items-center gap-2 cursor-pointer'>
              <a href='#contact'>Services</a>
              <i class="fa-solid fa-caret-down"></i>
            </li>

            <li className='flex items-center gap-2 cursor-pointer'>
              <a href='#contact'>Team</a>
              <i class="fa-solid fa-caret-down"></i>
            </li>

            <li className='flex items-center gap-2 cursor-pointer' >
              <a href='#contact'>Blog</a>
              <i class="fa-solid fa-caret-down"></i>
            </li>

          </ul>
        </div>
        <div className='cursor-pointer'>

          <ul className='flex space-x-4'>
            <li className='flex items-center gap-2 cursor-pointer'>
              <i class="fa-solid fa-magnifying-glass ml-4"></i>
              <a href='#home'></a>
            </li>

           
            <li className='flex items-center gap-2 cursor-pointer' >
              <i class="fa-regular fa-heart"></i>
              <a href='#contact'></a>
             
            </li>

            

            <li className='flex rounded-full items-center gap-2 cursor-pointer hover:bg-transparent-100'>
              <i class="fa-solid  fa-cart-shopping"></i>
              <a href='#contact'></a>
             
              <li className='flex items-center gap-2 cursor-pointer'>
            <i class="fa-solid fa-sliders"></i>
              <a href='#about'></a>
            </li>


            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
