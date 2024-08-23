import React from 'react'
import Logo from '../Images/Logo.png'

const Navbar = () => {
  return (
    <header className=''>
      <nav className='flex bg-green-100 justify-around sticky top-0 z-[-20] mx-auto  w-full items-center p-4'>
        <div>
          <ul className='flex space-x-4 text-sm'>
            <li>
              <a href='#home'>Home</a>
            </li>

            <li className='flex items-center gap-2 cursor-pointer'>
              <a href='#about'>Product</a>
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


        <div className='h-10 w-10 border'>
          <img src={Logo} alt="" />
        </div>


        <div className='cursor-pointer'>

          <ul className='flex space-x-4'>
            <li className='flex items-center gap-2 cursor-pointer'>
              <i class="fa-solid fa-magnifying-glass ml-4"></i>
              <a href='#home'>Search</a>
            </li>

            <li className='flex items-center gap-2 cursor-pointer'>
              <i class="fa-regular fa-user"></i>
              <a href='#about'>Account</a>
            </li>

            <li className='flex items-center gap-2 cursor-pointer' >
              <i class="fa-regular fa-heart"></i>
              <a href='#contact'>Wishlist</a>
              <div className='flex justify-center bg-white items-center rounded-full w-6 h-6'>0</div>
            </li>

            <li className='flex items-center gap-2 cursor-pointer'>
              <i class="fa-solid  fa-cart-shopping"></i>
              <a href='#contact'>Cart</a>
              <div className='flex justify-center bg-white items-center rounded-full w-6 h-6'>
                0
              </div>


            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
