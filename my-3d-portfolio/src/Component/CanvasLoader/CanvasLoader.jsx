import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
    const { progress } = useProgress();
  return (
    <Html className='canvas-loader'>
      <span className="loader" style={{fontSize: 14}}>
        {progress.toFixed(2)}%
        </span>
    </Html>
  )
}

export default CanvasLoader
