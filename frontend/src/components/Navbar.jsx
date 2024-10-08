import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../assests/css/style.css';
import { HiMenu, HiX } from 'react-icons/hi';
import { PawPrint } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navdata = [
    { title: "Home", path: "/home" },
    { title: "Adopt", path: "/adopt" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-full h-[4rem] flex items-center justify-between bg-slate-200 shadow-md px-4'>
      <div className='flex items-center'>
        <PawPrint color="#f1603b" className='mr-2' />
        <div className='font-bold text-3xl text-orange-500'>PawNest</div>
      </div>

      <div className='hidden md:flex justify-end items-center'>
       
        <ul className='flex list-none flex-row justify-end gap-6'>
          {navdata.map((data, index) => (
            <NavLink key={index} to={data.path} className='hover:opacity-60'>
              <li className='font-semibold text-2xl text-black p-2'>{data.title}</li>
            </NavLink>
          ))}
        </ul>
      </div>

      <div className='md:hidden flex items-center'>
        <button onClick={toggleMenu} className='p-2'>
          {isMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className='absolute top-16 right-0 w-1/2 bg-white shadow-md rounded-lg z-10'>
          <input
            type="text"
            placeholder="Search..."
            className="border-2 border-gray-300 rounded-md p-2 m-2 w-4/5"
          />
          <ul className='flex flex-col list-none'>
            {navdata.map((data, index) => (
              <NavLink key={index} to={data.path} className='hover:opacity-60'>
                <li className='font-semibold text-xl text-black p-2'>{data.title}</li>
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

