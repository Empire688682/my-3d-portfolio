import React, { Suspense } from 'react';
import './Hero.css';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from 'three/src/Three.js';
import HackerRoom from '../HackerRoom/HackerRoom';
import CanvasLoader from '../CanvasLoader/CanvasLoader';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="header">
        <div className="wave_Con">
        <h1 className="hero-heading">Hello, I am Juwon</h1> 
        <p className='wave'>👋</p>
        </div>
        <h3 className="hero-subheading">I am a Fullstack Developer.</h3>
      </div>
      <div className="hero3d">
      
      </div>
    </div>
  )
}

export default Hero
