import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const BookNow = () => {
  const consultant = useLoaderData();
  const navigate = useNavigate();
  const [bookingDate, setBookingDate] = useState("");

  
  const handleBooking = () => {
    if (!bookingDate) {
      alert("Please select a booking date.");
      return;
    }
    navigate('/booking-success');
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Book a Consultation</h1>

      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        
        {consultant.img && (
          <img
            src={consultant.img}
            alt={consultant.name}
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
        )}

        <h2 className="text-2xl font-semibold mb-4">{consultant.name}</h2>
        <p className="mb-2"><strong>Expertise:</strong> {consultant.expertise}</p>
        <p className="mb-2"><strong>Experience:</strong> {consultant.experience}</p>
        <p className="mb-4"><strong>Bio:</strong> {consultant.bio}</p>
        
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Contact Information</h3>
          <p><strong>Email:</strong> {consultant.contact.email}</p>
          <p><strong>Phone:</strong> {consultant.contact.phone}</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Location & Availability</h3>
          <p><strong>Location:</strong> {consultant.location}</p>
          <p><strong>Availability:</strong> {consultant.availability}</p>
        </div>

        <div className="mb-4">
          <p><strong>Rating:</strong> {consultant.rating} / 5</p>
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
            className="bg-orange-300 text-black px-6 py-3 rounded-lg shadow-lg hover:bg-orange-400 transition"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
