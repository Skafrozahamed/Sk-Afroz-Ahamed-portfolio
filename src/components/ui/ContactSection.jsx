import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ParticlesBackground from "../three/ParticleBackground";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: 'fa-phone',
      title: 'Call Me',
      value: '+91 7908115024'
    },
    {
      icon: 'fa-envelope',
      title: 'Email',
      value: 'skafrozahamedtpo@gmail.com'
    },
    {
      icon: 'fa-map-marker-alt',
      title: 'Location',
      value: 'Midnapore, West Bengal, India'
    }
  ]

  return (
    <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-800 relative overflow-hidden min-h-screen">
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
            Contact Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Get in touch
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 dark:bg-gray-700/80 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
              >
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                  <i className={`fas ${info.icon}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {info.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-700/80 backdrop-blur-md text-gray-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-700/80 backdrop-blur-md text-gray-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-700/80 backdrop-blur-md text-gray-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-700/80 backdrop-blur-md text-gray-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300 resize-none"
              />
            </div>
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-primary text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary-dark flex items-center justify-center gap-2 backdrop-blur-md"
            >
              Send Message
              <i className="fas fa-paper-plane" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection