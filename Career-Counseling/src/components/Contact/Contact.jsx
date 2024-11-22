

import React from "react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-16">
      <Helmet>
      <title>JobZen-Contacts</title>
      </Helmet>
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-12">
          We're here to help! Fill out the form below or reach out to us with any questions or concerns.
        </p>
        
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-left text-gray-700 font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-left text-gray-700 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-left text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here"
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
