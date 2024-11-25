import React, { useState } from 'react'
import './header.css';
import { CgProfile } from 'react-icons/cg'
import { CiSearch } from 'react-icons/ci'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoIosClose } from 'react-icons/io';
const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const handleNavbar = () =>{
    navbar == false ? setNavbar(true) : setNavbar(false); 
  }
  return (
    <header className='max-md:relative flex justify-between items-center sm:px-8 max-sm:px-4 md:px-12 lg:px-20 h-14 mb-6'>
      {/* Logo */}
      <div id="navbar-left" className='lg:w-1/3 md:w-1/3 max-sm:w-1/2'>
        <a className="max-md:text-2xl lg:text-2xl max-sm:text-[20px] font-bold">Recipe Calories</a>
      </div>
      {/* Nav Menu */}
      <div id="navbar-right" className={`${navbar == false ? 'navbar-mobile' : 'margin-right-x'} h-85 top-[56px] right-0 max-md:absolute max-md:bg-slate-200 lg:flex flex justify-between w-2/3 max-md:flex-col max-md:p-10`}>
        <ul className="flex justify-center items-center gap-6 max-md:flex-col max-md:justify-start max-md:items-start max-md:mb-4">
          <li>
            <a href="#">Home</a>
          </li>            
          <li>
            <a href="#">Recipes</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Search</a>
          </li>
        </ul>
        <div className="mr-4 flex justify-center items-center px-3 py-1 bg-[#150B2B0D] rounded-full max-md:justify-start max-md:items-center">
          <CiSearch className='text-[20px]'></CiSearch>
          <input className='mr-2 p-1 text-[14px] outline-none bg-transparent' type="text" placeholder='Search'/>
        </div>
      </div>
      <div className='flex max-lg:justify-center items-center max-sm:w-1/2 max-sm:justify-between'>
        <div className="mr-4 flex justify-center items-center px-3 py-1 bg-[#150B2B0D] rounded-full max-md:justify-start max-md:items-center max-sm:w-2/3">
          <CiSearch className='text-[20px] max-sm:w-2/4'></CiSearch>
          <input className='mr-2 p-1 text-[14px] outline-none bg-transparent' type="text" placeholder='Search'/>
        </div>
        <a className="mr-2">
          <CgProfile className='text-[25px]'></CgProfile>
        </a>
        <button onClick={handleNavbar} className='w-[20px] lg:hidden'>
          {
            navbar == false ? <RxHamburgerMenu className='max-md:text-[20px] max-lg:text-[25px]'></RxHamburgerMenu> 
            : <IoIosClose className='text-[25px]'></IoIosClose>
          }
        </button>
      </div>
    </header>
  )
}

export default Header