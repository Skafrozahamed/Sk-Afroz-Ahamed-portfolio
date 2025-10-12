import React, { useEffect, useRef } from 'react'

const ParticlesBackground = () => {
  const particlesRef = useRef(null)
  const particlesInitialized = useRef(false)

  useEffect(() => {
    // Prevent multiple initializations
    if (particlesInitialized.current) return

    const initParticles = async () => {
      try {
        // Check if particlesJS is already available
        if (window.particlesJS) {
          initializeParticlesJS()
        } else {
          // Dynamically load particles.js from CDN
          await loadParticlesJS()
          initializeParticlesJS()
        }
      } catch (error) {
        console.error('Failed to initialize particles:', error)
      }
    }

    const loadParticlesJS = () => {
      return new Promise((resolve, reject) => {
        // Check if already loaded
        if (window.particlesJS) {
          resolve()
          return
        }

        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'
        script.async = true
        
        script.onload = () => {
          console.log('Particles.js loaded successfully')
          resolve()
        }
        
        script.onerror = () => {
          console.error('Failed to load particles.js')
          reject(new Error('Failed to load particles.js'))
        }
        
        document.head.appendChild(script)
      })
    }

    const initializeParticlesJS = () => {
      if (!window.particlesJS || !particlesRef.current) {
        console.error('ParticlesJS not available or DOM element not found')
        return
      }

      try {
        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: ['#6c5ce7', '#a29bfe', '#fd79a8']
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000'
              }
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#6c5ce7',
              opacity: 0.2,
              width: 1
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'grab'
              },
              onclick: {
                enable: true,
                mode: 'push'
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 0.3
                }
              },
              push: {
                particles_nb: 4
              }
            }
          },
          retina_detect: true
        })

        particlesInitialized.current = true
        console.log('Particles initialized successfully')
      } catch (error) {
        console.error('Error initializing particles:', error)
      }
    }

    initParticles()

    // Cleanup function
    return () => {
      if (particlesRef.current) {
        particlesRef.current.innerHTML = ''
      }
      particlesInitialized.current = false
    }
  }, [])

  return (
    <div 
      ref={particlesRef}
      id="particles-js" 
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{
        background: 'transparent'
      }}
    />
  )
}

export default ParticlesBackground