import React from 'react'
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Destinations from './Destinations';
import Home from './Home';

const App=()=>{
  return(
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/destinations" element={<Destinations/>}/>
        <Route path="/contact" element={<Contact/>}/>

      </Routes>
   

    </>
  )
}

export default App;