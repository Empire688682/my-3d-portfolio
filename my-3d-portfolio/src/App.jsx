import React, { useRef } from 'react';
import './App.css'
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Hero from './Component/Hero/Hero';

const App = () => {
  return (
    <div className='app'>
     <Navbar/>
      
      <Footer/>
    </div>
  )
}

export default App
