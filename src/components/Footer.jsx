import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-90 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-orange-400 mb-2">WanderWave</h2>
          <p className="text-gray-400 text-sm">
            Explore the world in style with personalized travel experiences and handpicked destinations.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-orange-400 text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li><a href="/" className="hover:text-orange-400 transition">Home</a></li>
            <li><a href="/destination" className="hover:text-orange-400 transition">Destinations</a></li>
            <li><a href="/about" className="hover:text-orange-400 transition">About</a></li>
            <li><a href="/contact" className="hover:text-orange-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-orange-400 text-lg font-semibold mb-2">Newsletter</h3>
          <p className="text-gray-400 text-sm mb-3">Stay updated with our latest travel guides and offers.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 rounded-l-md bg-white bg-opacity-10 text-sm text-white placeholder-gray-400 border border-gray-600 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-orange-400 text-black px-4 py-2 rounded-r-md text-sm font-semibold hover:bg-orange-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-orange-400 text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-orange-400 transition"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} WanderWave by RabiaKhan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
