import { Link } from 'react-router-dom';
import logo from '../assets/Brand logo.png';
import { CiSearch, CiMenuBurger } from "react-icons/ci";
import { useContext } from 'react';
import { DataProvider } from '../Context/ContextProvider';
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
   const { user } = useContext(DataProvider);

   // Navigation Links
   const navLinks = (
      <>
         <li><Link to={'/news'}>News</Link></li>
         <li><Link to={'/destination'}>Destination</Link></li>
         <li><Link to={'/blog'}>Blog</Link></li>
         <li><Link to={'/'}>Contact</Link></li>
         {!user && (
            <li>
               <Link to={'/login'} className="me-2 bg-yellow-400 px-2 py-1 text-black rounded"> Login</Link>
            </li>
         )}
      </>
   );

   return (
      <div className="bg-gray-600 text-gray-300 sticky top-0 z-50 font-poppins">
         <div className="flex justify-between items-center py-2 px-4">
            <div>
               <Link to={'/'}><img src={logo} alt="logo" className="w-20 px-2 py-1" /></Link>
            </div>
            <div className="flex items-center space-x-4">
               <div className="border bg-white text-black flex items-center rounded px-2 py-1">
                  <CiSearch className="text-xl mr-1" />
                  <input className="focus:outline-none bg-white w-full text-sm font-light" placeholder="Search your Destination..." type="text"
                  />
               </div>

               {/* Mobile Dropdown */}
               <div className="dropdown dropdown-left md:hidden block">
                  <div
                     tabIndex={0}
                     role="button"
                     className="btn btn-ghost btn-circle"
                     aria-label="Open menu"
                  >
                     <CiMenuBurger className="text-2xl" />
                  </div>
                  <ul
                     tabIndex={0}
                     className="menu menu-sm dropdown-content bg-gray-300 text-black rounded-lg mt-14 w-52 p-2 shadow z-10"
                  >
                     {navLinks}
                  </ul>
               </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
               <ul className="flex space-x-7 text-sm md:text-md lg:text-lg">
                  {navLinks}
               </ul>

               {/* User Profile */}
               {user ? (
                  <div className="flex items-center space-x-2">
                     {user.photoURL ? (
                        <img
                           src={user.photoURL}
                           alt="User Profile"
                           className="w-8 h-8 rounded-full"
                        />
                     ) : (
                        <FaUserCircle className="text-2xl" />
                     )}
                     {user.displayName && (
                        <p className="text-sm">{user.displayName}</p>
                     )}
                  </div>
               ) : (
                  <FaUserCircle className="text-2xl" />
               )}
            </div>
         </div>
      </div>
   );
};

export default Navbar;
