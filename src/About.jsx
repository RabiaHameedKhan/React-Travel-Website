import React from 'react';
import aboutBg from '../src/assets/home-bg.jpg'; 
import aboutpic from '../src/assets/aboutpic.jpg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="h-screen w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
       
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Discover <span className="text-orange-400">Our Story</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            At WanderWave, we believe in more than just travel. We believe in exploring new cultures,
            creating unforgettable memories, and connecting with the world in meaningful ways.
          </motion.p>

          <motion.p
            className="text-sm text-gray-300 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Founded by passionate travelers, our mission is to help you experience the beauty of every destination with comfort, care, and a sense of adventure.
          </motion.p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-black bg-opacity-100 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <h2 className="text-4xl font-bold text-orange-400 mb-4">Who We Are</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              WanderWave is not just a travel platform — it’s a movement to connect souls with destinations.
              We craft journeys that are personal, immersive, and unforgettable.
            </p>
            <p className="text-gray-400 text-sm">
              With a team of passionate travelers and storytellers, we bring the hidden gems of the world into the spotlight.
            </p>
          </motion.div>

          {/* Image */}
          <motion.img
            src={aboutpic}
            alt="About WanderWave"
            className="rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
          />
        </div>
      </section>
    </>
  );
};

export default About;
