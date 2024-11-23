import React, { useState, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const BookNow = () => {
  const consultant = useLoaderData();
  const navigate = useNavigate();
  const [bookingDate, setBookingDate] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBooking = () => {
    if (!bookingDate) {
      alert("Please select a booking date.");
      return;
    }
    setShowModal(true); 
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate('/'); 
  };

  return (
    <div className="container mx-auto px-4 py-6 animate-spin-sideways">
      <Helmet>
        <title>Book a Consultation - {consultant.name}</title>
        <meta
          name="description"
          content={`Book a consultation with ${consultant.name}, an expert in ${consultant.expertise}. Availability: ${consultant.availability}.`}
        />
        <meta
          name="keywords"
          content={`${consultant.name}, consultation, expert, ${consultant.expertise}, book a consultation`}
        />
        <meta property="og:title" content={`Book a Consultation - ${consultant.name}`} />
        <meta
          property="og:description"
          content={`Book a consultation with ${consultant.name}, an expert in ${consultant.expertise}.`}
        />
        <meta property="og:image" content={consultant.img} />
        <meta property="og:url" content={window.location.href} />
      </Helmet>
      <h1 className="text-3xl font-bold text-center mb-6">Book a Consultation</h1>

      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          {consultant.img && (
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full overflow-hidden shadow-md border-4 border-orange-300">
              <img
                src={consultant.img}
                alt={consultant.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
              />
            </div>
          )}
        </div>

        <h2 className="text-2xl font-semibold mb-4">{consultant.name}</h2>
        <p className="mb-2">
          <strong>Expertise:</strong> {consultant.expertise}
        </p>
        <p className="mb-2">
          <strong>Experience:</strong> {consultant.experience}
        </p>
        <p className="mb-4">
          <strong>Bio:</strong> {consultant.bio}
        </p>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Contact Information</h3>
          <p>
            <strong>Email:</strong> {consultant.contact.email}
          </p>
          <p>
            <strong>Phone:</strong> {consultant.contact.phone}
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Location & Availability</h3>
          <p>
            <strong>Location:</strong> {consultant.location}
          </p>
          <p>
            <strong>Availability:</strong> {consultant.availability}
          </p>
        </div>

        <div className="mb-4">
          <p>
            <strong>Rating:</strong> {consultant.rating} / 5
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Select Booking Date</h3>
          <input
            type="date"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleBooking}
            className="bg-gradient-to-r from-orange-300 to-orange-500 hover:from-orange-400 hover:to-orange-600 animate-pulse text-black px-6 py-3 rounded-lg shadow-lg hover:bg-orange-400 transition duration-300"
          >
            Book Now
          </button>
        </div>
      </div>

      
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-2xl font-semibold text-green-500 mb-4">Booking Successful!</h2>
            <p className="text-lg text-gray-800 mb-4">
              You've successfully booked a consultation with {consultant.name}!
            </p>
            <p className="text-gray-600 mb-6">We're excited to help you with your journey. Please check your email for further instructions.</p>
            <div className="flex justify-end">
              <button
                onClick={handleModalClose}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
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

export default BookNow;
