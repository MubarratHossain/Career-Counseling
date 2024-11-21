import React from "react";

const About = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About</h1>
        <p className="text-lg text-gray-600 mb-4">
          At our Career Counseling Center, we guide you through every step of your professional journey. Whether you're just starting your career or looking to make a transition, we offer personalized advice and expert guidance to help you reach your goals. Our team of professionals has years of experience in various industries and is dedicated to empowering individuals with the tools and knowledge they need for success.
        </p>
        <div className="text-left sm:text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-700 mb-3">Our Mission</h3>
          <p className="text-lg text-gray-600 mb-6">
            We are committed to providing individuals with the resources and support needed to make informed decisions about their careers. Our mission is to help you unlock your potential and thrive in your professional life.
          </p>
        </div>

        {/* Marquee News Section */}
        <div className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 py-4 text-white">
          <div className="overflow-hidden">
            <div className="whitespace-nowrap animate-marquee">
              <p className="inline-block mr-10 text-lg font-semibold">
                🚀 New Career Workshops Available! | 📅 Free Consultation Slots This Week! | 🌍 Global Job Market Insights | 🏆 Career Development Programs Launched.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="max-w-3xl mx-auto mt-12 px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Our Career Counseling Center is designed to support individuals at every stage of their professional life. Whether you're a student looking to kickstart your career, a mid-level professional seeking a career change, or an executive aiming to refine your leadership skills, we provide expert guidance tailored to your needs. We offer one-on-one consultations, group workshops, and online resources to help you navigate your career path with confidence.
          </p>

          <h3 className="text-2xl font-semibold text-gray-700 mb-3">Our Services Include:</h3>
          <ul className="list-disc list-inside text-lg text-gray-600 mb-6">
            <li>Personalized career counseling</li>
            <li>Resume and cover letter writing assistance</li>
            <li>Interview preparation and mock interviews</li>
            <li>Job market research and industry insights</li>
            <li>Career development workshops and seminars</li>
          </ul>

          <p className="text-lg text-gray-600">
            With our expert counselors and proven strategies, you will gain the confidence and tools necessary to take the next step in your professional journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
