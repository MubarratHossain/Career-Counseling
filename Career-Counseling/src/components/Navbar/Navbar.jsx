import { useContext, useState } from 'react';
import { FaHome, FaInfoCircle, FaBriefcase, FaPhoneAlt, FaUser, FaUserPlus, FaUserAlt } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import { authContext } from '../Authprovider/Authprovider';

const Navbar = () => {
    const { user, signOutUser } = useContext(authContext);
    const location = useLocation();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleSignOut = () => {
        signOutUser();
    };

    return (
        <div>
            <div className="navbar bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 shadow-lg mt-2 rounded-lg px-2 sm:px-4 md:px-8">
                <div className="navbar-start">

                    <div className="dropdown lg:hidden">
                        <button onClick={toggleDropdown} className="btn btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </button>
                        {dropdownOpen && (
                            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                {user && <li><NavLink to="/my-profile">My Profile</NavLink></li>}
                                <li><NavLink to="/contact">Contact</NavLink></li>
                            </ul>
                        )}
                    </div>


                    <a className="btn btn-ghost  text-[16px] flex items-center  lg:flex md:flex ">
                        <FaBriefcase className="text-xl text-white animate-bounce" />
                        <span className="animate-flicker">JobZen</span>
                    </a>


                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="mr-4">
                            <NavLink
                                to="/"
                                className="text-base text-white hover:text-white hover:bg-[#002400] p-2 rounded-lg"
                            >
                                <FaHome className="inline mr-2 text-white" />
                                Home
                            </NavLink>
                        </li>
                        <li className="mr-4">
                            <NavLink
                                to="/about"
                                className="text-base text-white hover:text-white hover:bg-[#002400] p-2 rounded-lg"
                            >
                                <FaInfoCircle className="inline mr-2 text-white" />
                                About
                            </NavLink>
                        </li>
                        {user && (
                            <li className="mr-4">
                                <NavLink
                                    to="/my-profile"
                                    className="text-base text-white hover:text-white hover:bg-[#002400] p-2 rounded-lg"
                                >
                                    <FaUserAlt className="inline mr-2 text-white" />
                                    My Profile
                                </NavLink>
                            </li>
                        )}
                        <li className="mr-4">
                            <NavLink
                                to="/contact"
                                className="text-base text-white hover:text-white hover:bg-[#002400] p-2 rounded-lg"
                            >
                                <FaPhoneAlt className="inline mr-2 text-white" />
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>


                <div className="navbar-end flex items-center space-x-4">

                    {!user ? (
                        <>
                            <NavLink
                                to="/login"
                                className="flex items-center space-x-2 text-xs sm:text-sm lg:text-base py-1 sm:py-2 px-2 sm:px-4 bg-gradient-to-r from-orange-300 to-orange-500 hover:from-orange-400 hover:to-orange-600 shadow-md rounded-lg text-white"
                            >
                                <FaUser className="mr-2 text-white" />
                                Login
                            </NavLink>
                            <NavLink
                                to="/register"
                                className="flex items-center space-x-2 text-xs sm:text-sm lg:text-base py-1 sm:py-2 px-2 sm:px-4 rounded-lg bg-gradient-to-r from-orange-300 to-orange-500 text-white hover:from-orange-400 hover:to-orange-600 shadow-md"
                            >
                                <FaUserPlus className="mr-2 text-white" />
                                Sign Up
                            </NavLink>
                        </>
                    ) : (
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <img
                                    src={user.photoURL || '/default-avatar.png'}
                                    alt="User Avatar"
                                    className="w-10 h-10 rounded-full cursor-pointer"
                                    title={user.displayName || 'User'}
                                />
                            </div>
                            <button
                                className="bg-gradient-to-r from-orange-300 to-orange-500 hover:from-orange-400 hover:to-orange-600 shadow-md text-white py-2 px-4 rounded-lg transition"
                                onClick={handleSignOut}
                            >
                                Logout
                            </button>
                        </div>
                    )}


                </div>
            </div>
        </div>
    );
};

export default Navbar;
