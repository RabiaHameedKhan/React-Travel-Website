import React from 'react';
import bgImg from './assets/contact-bg.jpg';

const Contact = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative pt-16" 
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-10">
        <div className="w-full max-w-2xl bg-black bg-opacity-70 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-orange-400 mb-6">Contact Us</h1>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 bg-transparent border border-gray-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-1">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-transparent border border-gray-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-1">Your Message</label>
              <textarea
                rows="5"
                placeholder="Write your message"
                className="w-full px-4 py-2 bg-transparent border border-gray-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full border border-orange-400 text-orange-400 py-2 rounded-md font-semibold transition duration-300 hover:bg-orange-400 hover:text-black"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
