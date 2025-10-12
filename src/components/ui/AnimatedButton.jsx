import React from 'react'
import { motion } from 'framer-motion'

const AnimatedButton = ({
  children, 
  onClick, 
  variant = 'primary',
  size = 'medium',
  className = '',
  ...props 
}) => {
  const baseClasses = 'relative overflow-hidden font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-3'
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-gray-600 dark:text-gray-300 hover:text-primary'
  }
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3',
    large: 'px-8 py-4 text-lg'
  }

  return (
    <motion.button
      whileHover={{ 
        scale: 1.05,
        y: -2
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {/* Ripple effect */}
      <motion.span
        className="absolute inset-0 bg-white opacity-0 rounded-full"
        whileHover={{ opacity: 0.1, scale: 1.2 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Shine effect */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
        whileHover={{ 
          opacity: 0.2,
          x: ['0%', '100%']
        }}
        transition={{ 
          duration: 0.6,
          ease: "easeInOut"
        }}
      />
      
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}

export default AnimatedButton
