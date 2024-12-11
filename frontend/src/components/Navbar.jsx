// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import '../assests/css/style.css';
// import { HiMenu, HiX } from 'react-icons/hi';
// import { PawPrint } from 'lucide-react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navdata = [
//     { title: "Home", path: "/home" },
//     { title: "Adopt", path: "/adopt" },
//     { title: "About", path: "/about" },
//     { title: "Contact", path: "/contact" }
//   ];

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className='w-full h-[4rem] flex items-center justify-between bg-slate-200 shadow-md px-4'>
//       <div className='flex items-center'>
//         <PawPrint color="#f1603b" className='mr-2' />
//         <div className='font-bold text-3xl text-orange-500'>PawNest</div>
//       </div>

//       <div className='hidden md:flex justify-end items-center'>
       
//         <ul className='flex list-none flex-row justify-end gap-6'>
//           {navdata.map((data, index) => (
//             <NavLink key={index} to={data.path} className='hover:opacity-60'>
//               <li className='font-semibold text-2xl text-black p-2'>{data.title}</li>
//             </NavLink>
//           ))}
//         </ul>
//       </div>

//       <div className='md:hidden flex items-center'>
//         <button onClick={toggleMenu} className='p-2'>
//           {isMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
//         </button>
//       </div>

//       {isMenuOpen && (
//         <div className='absolute top-16 right-0 w-1/2 bg-white shadow-md rounded-lg z-10'>
//           <ul className='flex flex-col list-none'>
//             {navdata.map((data, index) => (
//               <NavLink key={index} to={data.path} className='hover:opacity-60'>
//                 <li className='font-semibold text-xl text-black p-2'>{data.title}</li>
//               </NavLink>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
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
    { title: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-[4rem] flex items-center justify-between bg-slate-200 shadow-md px-4">
      <div className="flex items-center">
        <PawPrint color="#f1603b" className="mr-2" />
        <div className="font-bold text-3xl text-orange-500">PawNest</div>
      </div>

      <div className="hidden md:flex justify-end items-center">
        <ul className="flex list-none flex-row justify-end gap-6">
          {navdata.map((data, index) => (
            <NavLink key={index} to={data.path} className="hover:opacity-60">
              <li className="font-semibold text-2xl text-black p-2">{data.title}</li>
            </NavLink>
          ))}
        </ul>
        <div className="ml-6 flex gap-4">
          <NavLink to="/signup">
            <button className="px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600">
              Create Account
            </button>
          </NavLink>
          <NavLink to="/login">
            <button className="px-4 py-2 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600">
              Login
            </button>
          </NavLink>
        </div>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="p-2">
          {isMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 right-0 w-1/2 bg-white shadow-md rounded-lg z-10">
          <ul className="flex flex-col list-none">
            {navdata.map((data, index) => (
              <NavLink key={index} to={data.path} className="hover:opacity-60">
                <li className="font-semibold text-xl text-black p-2">{data.title}</li>
              </NavLink>
            ))}
          </ul>
          <div className="p-4">
            <NavLink to="/signup">
              <button className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 mb-2">
                Create Account
              </button>
            </NavLink>
            <NavLink to="/login">
              <button className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600">
                Login
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

