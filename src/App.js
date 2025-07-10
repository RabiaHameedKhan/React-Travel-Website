import React from 'react'
import AOS from 'aos'; //animatons
import 'aos/dist/aos.css'; //aniamtions
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Destinations from './Destinations';
import Home from './Home';
import Footer from './components/Footer';

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <div >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destination" element={<Destinations />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
        <Footer />

      </div>


    </>
  )
}

export default App;