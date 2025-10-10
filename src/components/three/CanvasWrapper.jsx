import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'

const CanvasWrapper = ({ children, ...props }) => {
  return (
    <Canvas
      {...props}
      camera={{ position: [0, 0, 5], fov: 75 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 2]}
    >
      <Preload all />
      {children}
    </Canvas>
  )
}

export default CanvasWrapper