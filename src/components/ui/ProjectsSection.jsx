import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ParticlesBackground from "../three/ParticleBackground";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Automated Railway Signal System',
      icon: 'fa-train',
      description: 'ESP32-based bidirectional railway gate system with IoT capabilities',
      fullDescription: 'Designed a bidirectional railway gate system using ESP32 with IoT capabilities for real-time monitoring and control.',
      features: [
        'ESP32 microcontroller',
        'IR sensors for train detection',
        'Servo motors for gate control',
        'IoT integration for monitoring'
      ],
      reportUrl: `${process.env.PUBLIC_URL}/assets/Report/Final year Project Report Afroz.pdf`
    },
    {
      id: 2,
      title: 'Real-Time Gas Monitoring System',
      icon: 'fa-gas-pump',
      description: 'IoT-based ambient gas monitoring with cloud integration',
      fullDescription: 'IoT-based ambient gas monitoring system using ESP32 with cloud integration for real-time data analysis and alerts.',
      features: [
        'Multiple gas sensors integration',
        'ThingSpeak cloud platform',
        'Real-time data visualization',
        'Alert notification system'
      ],
      reportUrl: `${process.env.PUBLIC_URL}/assets/Report/My Project.pdf`
    }
  ]

  return (
    <section id="projects" className="py-16 px-4 bg-gray-50 dark:bg-gray-800 relative overflow-hidden min-h-screen">
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
            Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Most recent work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border border-white/20"
              onClick={() => setSelectedProject(project)}
            >
              <div className="text-center mb-4">
                <i className={`fas ${project.icon} text-4xl text-primary mb-4 group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
              
              <div className="flex items-center justify-center text-primary font-medium mt-4">
                View details
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-xl"
                  >
                    <i className="fas fa-times" />
                  </button>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {selectedProject.fullDescription}
                </p>

                <div className="grid gap-3 mb-6">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <i className="fas fa-check-circle text-primary" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 flex-wrap">
                  <a
                    href={selectedProject.reportUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary-dark"
                  >
                    View Report
                    <i className="fas fa-file-pdf" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ProjectsSection
