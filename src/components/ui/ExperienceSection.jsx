import React from 'react'
import { motion } from 'framer-motion'
import ParticlesBackground from "../three/ParticleBackground";

const ExperienceSection = () => {
  const experiences = [
    {
      year: '2025',
      title: 'Graduate Engineer Trainee',
      company: 'Gautam Solar Pvt. Ltd.',
      period: 'July 2025 - Present',
      icon: 'fa-solar-panel',
      responsibilities: [
        'Operate and maintain A050k stringer machine for automated solar cell stringing',
        'Supervise soldering, alignment, and configuration to meet PV module standards',
        'Perform preventive maintenance and troubleshooting',
      ],
      tags: ['Solar Technology', 'Manufacturing', 'Quality Control']
    },
    {
      year: '2024',
      title: 'Trainee - Telecommunication Systems',
      company: 'Indian Railways, Kharagpur Division',
      period: 'June 2024 - August 2024',
      icon: 'fa-train',
      responsibilities: [
        'Maintained telecom systems including VHF/UHF radios',
        'Performed preventive maintenance on SMPS power supplies',
        'Diagnosed faults in communication modules',
      ],
      tags: ['Telecom', 'VHF/UHF', 'Maintenance']
    },
    {
      year: '2023',
      title: 'Academic Projects',
      company: 'College Projects & Research',
      period: '2021-2025',
      icon: 'fa-microchip',
      responsibilities: [
        'Automated Railway Signal System using ESP32',
        'Real-Time Gas Monitoring System with IoT',
        'Various embedded systems and electronics projects',
      ],
      tags: ['Embedded Systems', 'IoT', 'ESP32']
    }
  ]

  return (
    <section id="experience" className="py-16 px-4 relative overflow-hidden min-h-screen">
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
            Professional Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            My career path
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8 mb-12`}
            >
              {/* Timeline dot */}
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-gray-900 shadow-lg" />
                {index < experiences.length - 1 && (
                  <div className="w-0.5 h-full bg-primary/30 mt-2" />
                )}
              </div>

              {/* Content */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center text-white">
                    <i className={`fas ${exp.icon}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                      <i className="fas fa-arrow-right text-primary text-sm mt-1" />
                      {resp}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection