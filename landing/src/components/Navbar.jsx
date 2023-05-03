import React, { useState } from 'react'
import { logo, hamburgerMenu, close } from '../assets'
const Navbar = () => {
const [toggle, setToggle] = useState(false);
const handleClick = () => setToggle(!toggle);

  return (
    <div className='w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg'>
      <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>
<div className='flex items-center'>
    <img src={logo} alt="logo" className='sm:ml-10 ss:ml-10 md:ml-3 opacity-[55%] w-full h-[25px]' /> 
</div>

<div className='flex items-center'>
<ul className='hidden md:flex font-poppins'>
  <li>
Home
  </li>
  <li>
About
  </li>
  <li>
Support
  </li>
  <li>
Platform
  </li>
  <li>
Pricing
  </li>
</ul>

</div>


<div className='hidden md:flex sm:mr-10 md:mr-10'>
<button className='border-none bg-transparent text-black mr-4 font-poppins'>Login</button>
<button className='px-8 py-3 font-poppins'>Sign Up</button>

</div>
<div className='md:hidden' onClick={handleClick}>
<img src={!toggle?hamburgerMenu:close} alt='hamburgerMenu' className='w-[28px] h-[28px] object-contain mr-10' />
</div>

      </div>
      <div>
      <ul className={toggle?'absolute bg-white w-full px-8 md:hidden font-poppins':'hidden'}>
<li>
Home
  </li>
  <li>
About
  </li>
  <li>
Support
  </li>
  <li>
Platform
  </li>
  <li>
Pricing
  </li>
  <div className='flex flex-col my-4'>
  <button className='bg-transparent text-black mb-4 py-3 px-8 font-poppins'>Login</button>
<button className='px-8 py-3 font-poppins'>Sign Up</button>
  </div>
</ul>
      </div>
    </div>
  )
}

export default Navbar
