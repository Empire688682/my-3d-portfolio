import React from 'react';
import './Hero.css';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from 'three/src/Three.js';
import HackerRoom from '../HackerRoom/HackerRoom';

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
      <Canvas>
       <PerspectiveCamera makeDefault position={[0, 0, 3]} />
       <HackerRoom />
      </Canvas>
      </div>
    </div>
  )
}

export default Hero
