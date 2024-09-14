import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <h1>Welcome to Jayempire.</h1>
      <p>3D Portfolio</p>
      <a href='#contact' className='btn'>Contact Me</a>
      <a href='#projects' className='btn-light'>View Projects</a>
    </div>
  )
}

export default Home
