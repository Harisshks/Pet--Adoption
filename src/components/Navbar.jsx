import React from 'react'
import { NavLink } from 'react-router-dom';
// import {CircleUser} from 'lucide-react';
import '../assests/css/style.css';
const Navbar = () => {

  const navdata = [{
    title: "Home",
    path: "/home"
  },
  {
    title: "Adopt",
    path: "/adopt"
  },
  {
    title: "About",
    path: "/about"
  },
  {
    title: "Contact",
    path: "/contact"
  }]
  return (
    <>

      <div className='w-full h-[4rem] flex justify-center items-center bg-slate-200 shadow-md shadow-black rounded-sb' >
        <div className='w-[95%] h-full flex justify-center items-center flex-row'>
          <div className='w-1/2  h-full flex justify-start items-center font-bold text-3xl text-orange-500'>PawNest</div>
          <div className='w-1/2  h-full flex justify-end items-center'>
            <ul className='flex list-none flex-row justify-center gap-6 ml-auto '>
              {navdata.map((data, index) => (
                <NavLink key={index} to={data.path} className='w-full  h-full flex items-center justify-center hover:opacity-60'><li className='w-[100%] h-full font-semibold text-2xl p-2 text-black  '>{data.title}</li></NavLink>))}

            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar;


{/* <Link to='/'>
  <li className='w-full  h-full font-semibold text-2xl text-white active:bg-orange-500 hover:opacity-50 '>Profile</li>
</Link>
<Link to='/project'>
  <li className='w-1/2  h-full font-semibold text-2xl text-white hover:opacity-50'>Project</li>
</Link>
<Link to='/contact'>
  <li className='w-1/2  h-full font-semibold text-2xl text-white hover:opacity-50'>Contact</li>
</Link>
<CircleUser size={30} color="#f4f0f0" className='w-1/2  h-full hover:opacity-50'/>*/}


