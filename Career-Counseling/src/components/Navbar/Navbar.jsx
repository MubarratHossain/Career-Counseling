import { useState } from 'react';
import { FaHome, FaInfoCircle, FaBriefcase, FaPhoneAlt, FaUser, FaUserPlus } from 'react-icons/fa'; 
import { NavLink } from 'react-router-dom'; 

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="navbar bg-base-100 shadow-lg">
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
                        <li><NavLink to="#home">Home</NavLink></li>
                        <li><NavLink to="#about">About</NavLink></li>
                        <li><NavLink to="#services">Services</NavLink></li>
                        <li><NavLink to="#contact">Contact</NavLink></li>
                    </ul>
                </div>
                
                <a className="btn btn-ghost text-xl flex items-center space-x-2 lg:flex md:flex hidden">
                    <FaBriefcase className="text-3xl text-primary" />
                    <span>Career Counseling</span>
                </a>

            </div>

            
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="#home" className="text-base"><FaHome className="inline mr-2" /> Home</NavLink></li>
                    <li><NavLink to="#about" className="text-base"><FaInfoCircle className="inline mr-2" /> About</NavLink></li>
                    <li><NavLink to="#services" className="text-base"><FaBriefcase className="inline mr-2" /> Services</NavLink></li>
                    <li><NavLink to="#contact" className="text-base"><FaPhoneAlt className="inline mr-2" /> Contact</NavLink></li>
                </ul>
            </div>

            
            <div className="navbar-end flex items-center space-x-4">
                
                <NavLink to="#login" className="btn btn-outline btn-primary flex items-center space-x-2 text-sm lg:text-base hidden lg:flex">
                    <FaUser className="mr-2" />
                    Login
                </NavLink>
                <NavLink to="#signup" className="btn btn-primary flex items-center space-x-2 text-sm lg:text-base hidden lg:flex">
                    <FaUserPlus className="mr-2" />
                    Sign Up
                </NavLink>

                
                <div className="lg:hidden relative">
                    <button
                        className="btn btn-primary flex items-center space-x-2 text-xs lg:text-sm"
                        onClick={toggleDropdown}
                    >
                        <FaUser className="mr-2" />
                        <span>Account</span>
                    </button>
                   
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                            <NavLink to="#login" className="block px-4 py-2 text-sm text-gray-700">Login</NavLink>
                            <NavLink to="#signup" className="block px-4 py-2 text-sm text-gray-700">Sign Up</NavLink>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;


