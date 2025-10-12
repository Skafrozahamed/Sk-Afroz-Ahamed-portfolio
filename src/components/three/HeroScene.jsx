import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Text, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

const HeroScene = () => {
  const meshRef = useRef()
  const groupRef = useRef()

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2
    }
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1
    }
  })

  return (
    <>
      <OrbitControls enableZoom={false} enablePan={false} />
      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      <group ref={groupRef}>
        {/* Main floating cube */}
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <mesh ref={meshRef} position={[0, 0, 0]}>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshStandardMaterial 
              color="#6c5ce7" 
              transparent 
              opacity={0.8}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>
        </Float>

        {/* Floating text */}
        <Text
          position={[0, -2.5, 0]}
          color="#6c5ce7"
          fontSize={0.4}
          maxWidth={8}
          textAlign="center"
          font="/fonts/Inter-Bold.woff"
          anchorX="center"
          anchorY="middle"
        >
          SK Afroz Ahamed
        </Text>

        {/* Surrounding small cubes */}
        {[...Array(8)].map((_, i) => (
          <Float key={i} speed={1.5} rotationIntensity={1} floatIntensity={1}>
            <mesh position={[
              Math.cos((i / 8) * Math.PI * 2) * 3,
              Math.sin((i / 8) * Math.PI * 2) * 0.5,
              Math.sin((i / 8) * Math.PI * 2) * 3
            ]}>
              <boxGeometry args={[0.3, 0.3, 0.3]} />
              <meshStandardMaterial color="#a29bfe" />
            </mesh>
          </Float>
        ))}
      </group>
    </>
  )
}

export default HeroScene