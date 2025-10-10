import React from 'react'
import { motion } from 'framer-motion'
import ParticlesBackground from '../three/ParticleBackground'

const AboutSection = () => {
  const stats = [
    { number: '05+', label: 'Projects completed' },
    { number: '02+', label: 'Years experience' },
    { number: '10+', label: 'Technologies mastered' },
  ]

  return (
    <section id="about" className="py-16 px-4 bg-gray-50 dark:bg-gray-800 relative overflow-hidden min-h-screen">
      {/* Particles Background */}
      <ParticlesBackground />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            My introduction
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 bg-primary rounded-2xl rotate-6 transition-transform duration-300 hover:rotate-3"></div>
              <img
                src="/assets/images/profile.png"
                alt="SK Afroz Ahamed"
                className="absolute top-0 left-0 w-80 h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
  I am a dedicated Graduate Engineer in Electronics & Communication Engineering with comprehensive 
  expertise in Embedded Systems, IoT solutions, and Circuit Design. Currently advancing my career 
  as a <strong>Graduate Engineer Trainee at Gautam Solar Pvt. Ltd.</strong>, where I specialize in 
  solar module manufacturing with a focus on operating and optimizing the 
  <strong> A050k Stringer Machine</strong> for automated solar cell stringing processes.
</p>

<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
  In my role, I ensure precision manufacturing of photovoltaic modules through technical oversight 
  of automated stringing operations, quality control adherence to international PV standards, and 
  preventive maintenance of sophisticated production equipment. This position allows me to bridge 
  my electronics engineering background with cutting-edge renewable energy technology and industrial 
  automation systems.
</p>

            <div className="grid grid-cols-3 gap-6 py-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="/assets/resume/Sk_Afroz_Ahamed_Resume.pdf"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary-dark"
            >
              Download CV
              <i className="fas fa-download" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection