import { Link } from 'react-router-dom';
import logo from '../assets/Brand logo.png'
import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
   const navLinks = <>
      <li><Link to={'/'} >News</Link></li>
      <li><Link to={'/destination'} >Destination</Link></li>
      <li><Link to={'/'} >Blog</Link></li>
      <li><Link to={'/'} >Contact</Link></li>
      <li><Link to={'/login'} className="me-2 bg-yellow-400 px-2 py-1 text-black rounded">Login</Link></li>

   </>
   return (
      <div className='bg-gray-600 text-gray-300 sticky top-0 z-50 font-poppins'>
         <div className=" flex justify-between items-center py-2">
            <div>
               <Link to={'/'}><img src={logo} alt="logo" className="w-20 px-2 py-1" /></Link>
            </div>
            <div className='flex justify-center items-center'>
               <div className='border bg-white text-black flex items-center rounded px-2 py-1'>
                  <CiSearch className='size-5 me-1' />
                  <input className='focus:outline-none md:w-full bg-white ps-1 w-3/4 md:pe-7 font-light' placeholder='Search your Destination..' type="text" name="" id="" />
               </div>
               <div className="dropdown dropdown-left md:hidden block">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                     <CiMenuBurger className='size-6' />
                  </div>
                  <ul
                     tabIndex={0}
                     className="menu menu-sm  dropdown-content bg-gray-300 text-black rounded-lg z-[1] mt-14 w-52 p-2 shadow">
                     {navLinks}
                  </ul>
               </div>
            </div>

            <div className='hidden md:block'>
               <ul className="flex md:space-x-7 lg:space-x-16 text-sm md:text-md lg:text-lg">
                  {navLinks}
               </ul>
            </div>
         </div>
      </div >
   );
};

export default Navbar;