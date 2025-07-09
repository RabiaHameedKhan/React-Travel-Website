import React from 'react'
import AOS from 'aos'; //animatons
import 'aos/dist/aos.css'; //aniamtions
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Destinations from './Destinations';
import Home from './Home';

const App=()=>{

  useEffect(() => {
  AOS.init({
    duration: 1000, // animation duration (in ms)
    once: true, // animate only once per scroll
  });
}, []);

  return(
    <>
    <div className='mt-20'>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/destination" element={<Destinations/>}/>
        <Route path="/contact" element={<Contact/>}/>

      </Routes>
      </div>
   

    </>
  )
}

export default App;