import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobeAmericas, FaDollarSign, FaUserTie } from 'react-icons/fa';
import asia from '../src/assets/asia-beach.jpg';
import europe from '../src/assets/europe.jpg';
import japanb from '../src/assets/japan-blossom.jpg';

import bgvideo2 from '../src/assets/bgvideo.mp4';
import bgvideo1 from '../src/assets/bgvideo1.mp4';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
                {/* Background video */}
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src={bgvideo1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{once:false, amount:0.3}}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        Welcome to <span className="text-orange-400">WanderWave</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg sm:text-xl text-gray-200 max-w-xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        viewport={{once:false, amount:0.3}}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        Explore the world with style, stories, and unforgettable experiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        viewport={{once:false, amount:0.3}}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <a href="/destination">
                            <button className="mt-6 px-6 py-3 rounded-md font-medium text-orange-400 border border-orange-400 hover:bg-orange-400 hover:text-black transition duration-300">
                                Explore Destinations
                            </button>
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        className="mt-10 flex flex-col items-center animate-bounce"
                    >
                        <p className="text-sm text-gray-300 mb-1 tracking-wide">Scroll to explore</p>
                        <span className="text-3xl text-orange-400">&#x21E3;</span>
                    </motion.div>
                </div>
            </section>


            {/* Why Choose Us Section */}
            <section className="relative z-10 bg-black bg-opacity-100 text-white py-16 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.h2
                        className="text-3xl font-bold text-orange-400 mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{once:false, amount:0.3}}
                        
                    >
                        Why Choose WanderWave?
                    </motion.h2>

                    <motion.p
                        className="text-gray-300 mb-12 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{once:false, amount:0.3}}
                    >
                        We bring you the most inspiring travel destinations from around the world — carefully curated and wrapped in unforgettable experiences.
                    </motion.p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 hover:cursor-pointer ">
                        {[FaGlobeAmericas, FaDollarSign, FaUserTie].map((Icon, index) => (
                            <motion.div
                                key={index}
                                className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Icon className="text-4xl text-orange-400 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-orange-400 mb-2">
                                    {[
                                        'Curated Destinations',
                                        'Affordable Packages',
                                        'Expert Guidance',
                                    ][index]}
                                </h3>
                                <p className="text-sm text-gray-300">
                                    {[
                                        'Each location is handpicked to give you the best sights, culture, and comfort.',
                                        'Luxury meets budget — designed for every type of traveler.',
                                        'Our travel experts help you with hidden gems, safety, and local tips.',
                                    ][index]}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="relative z-10 text-white py-20 px-6 overflow-hidden">
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                    src={bgvideo2}
                >

                    Your browser does not support the video tag.
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                {/* Content */}
                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-orange-400 mb-4">
                        Join Our Travel Newsletter
                    </h2>
                    <p className="text-gray-200 mb-8">
                        Get the latest travel guides, destination updates, and exclusive deals directly to your inbox.
                    </p>

                    <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full sm:w-2/3 px-4 py-3 rounded-md bg-white bg-opacity-20 text-white border border-gray-400 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-orange-400 text-black rounded-md hover:bg-orange-500 transition duration-300"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>

            {/* Blog Section */}
            <section
                className="relative z-10 py-16 px-6 bg-cover bg-center bg-black"

            >
                <div className="absolute inset-0 bg-black bg-opacity-80"></div>

                <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
                    <h2 className="text-3xl font-bold text-orange-400 mb-6">Latest Travel Blogs</h2>
                    <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
                        Stories, tips, and guides to help you make the most of your journeys.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                       {[
  {
    id: 1,
    title: "Top 5 Beaches in Southeast Asia",
    image: asia,
    summary: "Uncover paradise beaches that you must visit on your next trip.",
  },
  {
    id: 2,
    title: "A Solo Traveler’s Guide to Japan",
    image: japanb,
    summary: "Essential tips and safe routes for exploring Japan solo.",
  },
  {
    id: 3,
    title: "Budget-Friendly Europe Itinerary",
    image: europe,
    summary: "Plan your Europe adventure without breaking the bank.",
  },
].map((blog, index) => (
  <motion.div
    key={blog.id}
    className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: false }}
  >
    <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
    <div className="p-4 text-left">
      <h3 className="text-xl font-semibold text-orange-400">{blog.title}</h3>
      <p className="text-sm text-gray-300 mt-2">{blog.summary}</p>
      <button className="mt-4 text-orange-400 border border-orange-400 px-4 py-1 rounded hover:bg-orange-400 hover:text-black transition">
        Read More
      </button>
    </div>
  </motion.div>
))}

                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
