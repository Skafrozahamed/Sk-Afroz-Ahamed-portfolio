import React, { useState, useEffect } from 'react'
import ParticlesBackground from "../three/ParticleBackground";

const ParticlesLoader = ({ children }) => {
  const [isParticlesLoaded, setIsParticlesLoaded] = useState(false)

  useEffect(() => {
    // Simulate particles loading delay for better performance
    const timer = setTimeout(() => {
      setIsParticlesLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isParticlesLoaded && <ParticlesBackground />}
      {children}
    </>
  )
}

export default ParticlesLoader