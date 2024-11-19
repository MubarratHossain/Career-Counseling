import { useState } from 'react';
import { FaHome, FaInfoCircle, FaBriefcase, FaPhoneAlt, FaUser, FaUserPlus } from 'react-icons/fa'; 
import { NavLink, useLocation } from 'react-router-dom'; 
import Banner from '../Banner/Banner';

const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/'; 
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div>
            <div className="navbar parallax bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg">
                
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/services">Services</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl flex items-center space-x-2 lg:flex md:flex hidden">
                        <FaBriefcase className="text-3xl text-white" />
                        <span>Career Counseling</span>
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
                        <li className="mr-4">
                            <NavLink
                                to="/services"
                                className="text-base text-white hover:text-white hover:bg-[#002400] p-2 rounded-lg"
                            >
                                <FaBriefcase className="inline mr-2 text-white" />
                                Services
                            </NavLink>
                        </li>
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
                    <NavLink to="/login" className="flex items-center space-x-2 text-sm lg:text-base hidden lg:flex py-2 px-4 rounded-lg bg-[#002400] text-white hover:bg-gradient-to-r hover:from-[#002400] hover:to-[#4d6e1f] transition">
                        <FaUser className="mr-2 text-white" />
                        Login
                    </NavLink>
                    <NavLink to="/register" className="flex items-center space-x-2 text-sm lg:text-base hidden lg:flex py-2 px-4 rounded-lg bg-[#002400] text-white hover:bg-gradient-to-r hover:from-[#002400] hover:to-[#4d6e1f] transition">
                        <FaUserPlus className="mr-2 text-white" />
                        Sign Up
                    </NavLink>

                    <div className="lg:hidden relative">
                        <button
                            className="flex items-center space-x-2 text-xs lg:text-sm bg-[#002400] text-white py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-[#002400] hover:to-[#4d6e1f] transition"
                            onClick={toggleDropdown}
                        >
                            <FaUser className="mr-2 text-white" />
                            <span>Account</span>
                        </button>
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                                <NavLink to="/login" className="block px-4 py-2 text-sm text-gray-700">Login</NavLink>
                                <NavLink to="/signup" className="block px-4 py-2 text-sm text-gray-700">Sign Up</NavLink>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
            {isHomePage && <Banner />}
        </div>
    );
};

export default Navbar;
