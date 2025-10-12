import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Nav from '../components/ui/Nav'
import AboutSection from '../components/ui/AboutSection'
import SkillsSection from '../components/ui/SkillsSection'
import ProjectsSection from '../components/ui/ProjectsSection'
import ExperienceSection from '../components/ui/ExperienceSection'
import ContactSection from '../components/ui/ContactSection'
import Footer from '../components/ui/Footer'

const Home = ({ darkMode, toggleDarkMode }) => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  
  const texts = ['Electronics Engineer', 'Embedded Systems', 'IoT Development',  'Circuit Design','Solar Module Production','Renewable Energy','Industrial Automation']

  const socialLinks = [
    { icon: 'fa-linkedin', url: 'https://www.linkedin.com/in/sk-afroz-ahamed-8b1575231/' },
    { icon: 'fa-github', url: 'https://github.com/Skafrozahamed' },
    { icon: 'fa-twitter', url: 'https://x.com/SkAfrozAhamed11?s=09' },
    { icon: 'fa-facebook', url: 'https://www.facebook.com/share/177RxCaKCa/' },
  ]

  // Typewriter effect
  useEffect(() => {
    const current = texts[textIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < current.length) {
          setCurrentText(prev => prev + current[currentIndex])
          setCurrentIndex(prev => prev + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (currentIndex > 0) {
          setCurrentText(prev => prev.slice(0, -1))
          setCurrentIndex(prev => prev - 1)
        } else {
          setIsDeleting(false)
          setTextIndex(prev => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentIndex, isDeleting, textIndex, texts])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  const socialVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i) => ({
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 1 + i * 0.1
      }
    }),
    hover: {
      scale: 1.2,
      rotate: 5,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }

  const floatingVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="relative">
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: Math.random() * 80 + 30,
                height: Math.random() * 80 + 30,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() * 15 - 7.5, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: Math.random() * 8 + 8,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 3
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="container-custom relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text Content */}
            <motion.div
              variants={containerVariants}
              className="text-center lg:text-left"
            >
              <motion.div
                variants={itemVariants}
                className="mb-6"
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg text-white/80 font-light mb-2 block"
                >
                  Hi, I'm
                </motion.span>
                
                <motion.h1
                  variants={itemVariants}
                  className="text-5xl lg:text-7xl font-bold text-white mb-4"
                >
                  <motion.span
                    className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ['0%', '100%', '0%'],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      backgroundSize: '200% auto'
                    }}
                  >
                    SK Afroz Ahamed
                  </motion.span>
                </motion.h1>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mb-8"
              >
                <motion.h2
                  className="text-2xl lg:text-3xl text-white/80 mb-4 h-12"
                >
                  <span className="text-white font-semibold">I specialize in </span>
                  <motion.span
                    key={textIndex}
                    className="text-cyan-300 font-bold"
                  >
                    {currentText}
                  </motion.span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="ml-1"
                  >
                    |
                  </motion.span>
                </motion.h2>
                
                <motion.p
  variants={itemVariants}
  className="text-lg text-white/80 leading-relaxed max-w-2xl"
>
  Graduate Engineer bridging Electronics & Communication with Renewable Energy. 
  Expert in <strong>Embedded Systems</strong>, <strong>IoT solutions</strong>, and 
  <strong> Solar Module Production</strong>. Currently optimizing A050k stringer 
  operations at Gautam Solar for next-generation PV manufacturing.
</motion.p>
              </motion.div>
              
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  href="/assets/resume/Sk_Afroz_Ahamed_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 group"
                >
                  <motion.span
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Download CV
                  </motion.span>
                  <motion.i
                    className="fas fa-download"
                    whileHover={{ 
                      x: 5,
                      y: 2 
                    }}
                  />
                </motion.a>
                
                <motion.a 
                  href="#contact"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    backgroundColor: "rgba(255,255,255,0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 group"
                >
                  <motion.span
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Contact Me
                  </motion.span>
                  <motion.i
                    className="fas fa-paper-plane"
                    whileHover={{ 
                      x: 5,
                      rotate: 15 
                    }}
                  />
                </motion.a>
              </motion.div>
            </motion.div>
            
            {/* Social Links */}
            <motion.div
              variants={containerVariants}
              className="flex lg:flex-col justify-center gap-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.icon}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={index}
                  variants={socialVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/20 relative overflow-hidden group"
                >
                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <i className={`fab ${social.icon} text-lg relative z-10`} />
                  
                  {/* Pulse effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-white rounded-xl"
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{ 
                      scale: 1.1, 
                      opacity: 0.3 
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Icons */}
        <motion.div
          className="absolute top-1/4 left-10 text-4xl opacity-30"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ⚡
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/4 right-10 text-3xl opacity-30"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          🔧
        </motion.div>
      </section>

      {/* Other Sections */}
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Home