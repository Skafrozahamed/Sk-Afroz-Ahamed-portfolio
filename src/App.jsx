import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import LoadingScreen from './components/ui/LoadingScreen'

function App() {
  const [loading, setLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>
      
      <Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  )
}

export default App