import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const socialLinks = [
    { icon: 'fa-linkedin', url: 'https://www.linkedin.com/in/sk-afroz-ahamed-8b1575231/' },
    { icon: 'fa-github', url: 'https://github.com/Skafrozahamed' },
    { icon: 'fa-twitter', url: 'https://x.com/SkAfrozAhamed11?s=09' },
    { icon: 'fa-facebook', url: 'https://www.facebook.com/share/177RxCaKCa/' },
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold mb-2"
            >
              SK Afroz Ahamed
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-400"
            >
              Graduate Engineer
            </motion.p>
          </div>

          {/* Quick Links */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-8"
          >
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </motion.ul>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center md:justify-end gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.icon}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all duration-300"
              >
                <i className={`fab ${social.icon}`} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2025 SK Afroz Ahamed. All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer