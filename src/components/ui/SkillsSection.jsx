import React from 'react'
import { motion } from 'framer-motion'
import ParticlesBackground from "../three/ParticleBackground";

const SkillsSection = () => {
  const skills = {
    programming: [
      { name: 'C/C++', level: 'Advanced' },
      { name: 'Python', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'HTML/CSS', level: 'Advanced' },
      { name: 'MATLAB', level: 'Intermediate' },
      { name: 'Git', level: 'Intermediate' },
    ],
    hardware: [
      { name: 'ESP32', level: 'Advanced' },
      { name: 'Arduino', level: 'Advanced' },
      { name: 'Sensors', level: 'Advanced' },
      { name: 'PCB Design', level: 'Intermediate' },
      { name: 'IoT Platforms', level: 'Intermediate' },
      { name: 'MS Office', level: 'Advanced' },
    ]
  }

  const SkillCard = ({ title, skills }) => (
    <motion.div
      //initial={{ opacity: 0, y: 20 }}
      //whileInView={{ opacity: 1, y: 0 }}
     // transition={{ duration: 0.5 }}
      //className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20"
    >
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
        {title}
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="flex items-center gap-3 p-3 rounded-lg bg-gray-50/50 dark:bg-gray-700/50 hover:bg-gray-100/50 dark:hover:bg-gray-600/50 transition-colors duration-300"
          >
            <i className="fas fa-badge-check text-primary" />
            <div className="flex-1">
              <h4 className="font-medium text-gray-800 dark:text-white">
                {skill.name}
              </h4>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {skill.level}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )

  return (
    <section id="skills" className="py-16 px-4 relative overflow-hidden min-h-screen">
      {/* Particles Background */}
      <ParticlesBackground />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            My technical level
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <SkillCard title="Programming" skills={skills.programming} />
          <SkillCard title="Hardware & Tools" skills={skills.hardware} />
        </div>
      </div>
    </section>
  )
}

export default SkillsSection