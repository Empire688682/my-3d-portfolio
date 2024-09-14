import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { MeshStandardMaterial, BoxGeometry } from 'three';
import { useFrame } from '@react-three/fiber';
import './App.css'
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';

const SpinningBox = () => {
  const meshRef = useRef();

  // Rotate the box every frame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'#ffff'} />
    </mesh>
  );
};



const Scene = () => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      <SpinningBox />
    </Canvas>
  );
};

const App = () => {
  return (
    <div className='app'>
     <Navbar/>
      <Scene />
      <Footer/>
    </div>
  )
}

export default App
