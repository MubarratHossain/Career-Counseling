import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from './background.png';  // Import the background image

const Banner = () => {
    return (
        <div
            className="relative bg-cover bg-center h-64"
            style={{ backgroundImage: `url(${BannerImage})` }}  // Set the background image using the imported variable
        >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="text-center text-white p-6">
                    <h1 className="text-4xl font-bold mb-4">Career Counseling</h1>
                    <p className="text-lg mb-6">Your path to a successful career starts here!</p>
                    <Link 
                        to="#contact" 
                        className="bg-gradient-to-r from-[#002400] to-[#4d6e1f] text-white py-2 px-6 rounded-lg shadow-lg hover:opacity-80 transition"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;


