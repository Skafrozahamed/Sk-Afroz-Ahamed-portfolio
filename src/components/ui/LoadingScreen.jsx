import React from 'react'
import { motion } from 'framer-motion'

const LoadingScreen = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    exit: { 
      opacity: 0,
      transition: { 
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  const spinTransition = {
    loop: Infinity,
    ease: "linear",
    duration: 1
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={spinTransition}
          className="w-20 h-20 border-4 border-white border-t-transparent rounded-full mx-auto mb-6"
        />
        
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-2 mb-4"
        >
          {["S", "K", " ", "A", "f", "r", "o", "z", " ", "A", "h", "a", "m", "e", "d"].map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: 0 }}
              animate={{ 
                y: [0, -10, 0],
                color: ["#ffffff", "#fbbf24", "#ffffff"]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "easeInOut"
              }}
              className="text-2xl font-bold text-white"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-2xl font-bold text-white mb-2"
        >
          Loading Portfolio
        </motion.h2>
        
        <motion.div
          variants={itemVariants}
          className="w-48 h-1 bg-white/30 rounded-full overflow-hidden mx-auto"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-full h-full bg-white"
          />
        </motion.div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0,
              scale: 0,
              x: Math.random() * 400 - 200,
              y: Math.random() * 400 - 200
            }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.random() * 400 - 200,
              y: Math.random() * 400 - 200
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default LoadingScreen