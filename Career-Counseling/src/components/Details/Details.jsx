import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaDollarSign, FaUser, FaCalendarAlt, FaStar, FaComment, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const Details = () => {
    const service = useLoaderData();
    const [comment, setComment] = useState("");
    const [commentsList, setCommentsList] = useState([]);
    const [showModal, setShowModal] = useState(false);

    
    const { name, category, price, counselor, duration, description, rating, reviews, image } = service;

    const handleCommentSubmit = () => {
        if (comment.trim()) {
            setCommentsList([...commentsList, comment]);
            setComment("");
        }
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleModalOpen = () => {
        setShowModal(true);
    };

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
                <button 
                    onClick={handleModalOpen}
                    className="btn btn-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white hover:bg-gradient-to-l hover:from-blue-500 hover:to-green-500 shadow-lg rounded-full flex items-center justify-center"
                >
                    <span className="mr-2">Select Your Dream Path</span>
                    <FaArrowRight className="ml-2 text-white text-lg" /> 
                </button>
            </div>

            <div className="mt-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Leave a Comment or Feedback</h3>
                <div className="flex flex-col">
                    <input 
                        type="text" 
                        placeholder="Write your comment or feedback" 
                        className="input input-bordered w-full mb-2"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)} 
                    />
                    <button 
                        onClick={handleCommentSubmit} 
                        className="btn btn-outline text-black w-full"
                    >
                        Submit Comment/Feedback
                    </button>
                </div>
            </div>

            <div className="mt-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Submitted Comments/Feedback</h3>
                <ul className="list-disc pl-5 mt-2">
                    {commentsList.map((comment, index) => (
                        <li key={index} className="text-gray-700">{comment}</li>
                    ))}
                </ul>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg w-96">
                        <h2 className="text-2xl font-semibold text-green-500 mb-4 flex items-center">
                            <FaCheckCircle className="mr-2 text-green-500" /> Congratulations!
                        </h2>
                        <p className="text-lg text-gray-800 mb-4">
                            You've successfully selected your dream path: <span className="font-bold">{name}</span>!
                        </p>
                        <p className="text-gray-600 mb-6">We're excited to help you on your journey. Please wait while we prepare your next steps.</p>
                        <div className="flex justify-end">
                            <button 
                                onClick={handleModalClose} 
                                className="btn btn-outline text-black"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Details;
