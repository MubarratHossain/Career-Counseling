import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaDollarSign, FaUser, FaCalendarAlt, FaStar, FaComment, FaArrowRight } from 'react-icons/fa';



const Details = () => {

    const { image, name, category, price, counselor, description, duration, rating, reviews } = useLoaderData();

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-white via-orange-100 to-orange-300 shadow-lg rounded-lg">
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/3">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-96 object-cover rounded-lg shadow-md"
                    />
                </div>
                <div className="w-full lg:w-2/3 lg:pl-8 mt-4 lg:mt-0">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{name}</h2>
                    <p className="text-xl text-gray-600 mb-2">{category}</p>
                    <div className="flex items-center mb-4">
                        <FaDollarSign className="text-green-500 mr-2" />
                        <span className="text-lg text-gray-800">{price}</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <FaUser className="mr-2 text-gray-600" />
                        <span className="text-lg font-semibold">{counselor}</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <FaCalendarAlt className="mr-2 text-gray-600" />
                        <span className="text-lg">{duration}</span>
                    </div>
                    <p className="text-lg text-gray-700 mb-6">{description}</p>


                    <div className="flex items-center mb-4">
                        <FaStar className="inline-block mr-1 text-yellow-400" />
                        <span className="ml-2 text-lg text-gray-600">{rating} / 5</span>
                    </div>


                    <div className="flex items-center text-lg text-gray-600">
                        <FaComment className="mr-2 text-gray-500" />
                        <span>{reviews} reviews</span>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">About This Service</h3>
                <p className="text-lg text-gray-700">{description}</p>
            </div>
            <div className="flex justify-center mt-8">
                <button className="btn btn-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white hover:bg-gradient-to-l hover:from-blue-500 hover:to-green-500 shadow-lg rounded-full flex items-center justify-center">
                    <span className="mr-2">Select Your Dream Path</span>
                    <FaArrowRight className="ml-2 text-white text-lg" /> 
                </button>
            </div>
        </div>

    );
};

export default Details;
