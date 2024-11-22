import React, { useState, useContext } from 'react';
import { authContext } from '../Authprovider/Authprovider';
import { toast } from 'react-toastify';
import { FaUserEdit, FaEnvelope, FaCamera } from 'react-icons/fa';

const MyProfile = () => {
    const { user, updateUserProfile } = useContext(authContext);
    const [displayName, setDisplayName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!displayName.trim()) {
            toast.error("Please enter a name.");
            return;
        }

        if (displayName === user?.displayName && photoURL === user?.photoURL) {
            toast.info("No changes detected.");
            return;
        }

        try {
            await updateUserProfile(displayName, photoURL);
            toast.success("Profile updated successfully!");
        } catch (error) {
            toast.error("Failed to update profile.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-4xl font-bold text-center text-gray-800">My Profile</h1>
                <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md">
                    <div className="flex flex-col items-center">
                        {user?.photoURL ? (
                            <img
                                src={user.photoURL}
                                alt="Profile"
                                className="w-32 h-32 rounded-full border-4"
                            />
                        ) : (
                            <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center border-4 border-orange-400">
                                <FaUserEdit className="text-3xl text-gray-500" />
                            </div>
                        )}
                        <h2 className="text-xl font-semibold mt-4 flex items-center gap-2 text-gray-800">
                            <FaUserEdit className="text-orange-500" />
                            {user?.displayName || "Your Name"}
                        </h2>
                        <p className="text-lg text-gray-600 mt-2 flex items-center gap-2">
                            <FaEnvelope className="text-orange-500" />
                            {user?.email || "Your Email"}
                        </p>
                    </div>
                </div>
                <h2 className="text-2xl font-bold mt-8 text-gray-800">Edit Profile</h2>
                <form onSubmit={handleSubmit} className="mt-4 space-y-6">
                    <div>
                        <label
                            htmlFor="displayName"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Display Name
                        </label>
                        <div className="relative mt-1">
                            <input
                                type="text"
                                id="displayName"
                                value={displayName}
                                onChange={(e) => setDisplayName(e.target.value)}
                                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Enter your name"
                            />
                            <FaUserEdit className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="photoURL"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Profile Photo URL
                        </label>
                        <div className="relative mt-1">
                            <input
                                type="text"
                                id="photoURL"
                                value={photoURL}
                                onChange={(e) => setPhotoURL(e.target.value)}
                                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Enter photo URL"
                            />
                            <FaCamera className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-purple-600 transition"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;
