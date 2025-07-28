import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import eLearning from '../assets/eLearning.png'
import makeup from '../assets/makeup.png'
import chakki from '../assets/chakki.png'

const projects = [
  {
    title: "E-Learning Platform",
    description: "A full-featured online store with product management, cart functionality, and secure checkout.",
    tags: ["React", "Node.js", "MongoDB"],
    image: eLearning,
    links: {
      live: "https://e-learning-two-nu.vercel.app/",
      code: "https://github.com/Userann3/E-learning"
    }
  },
  {
    title: "Makeup artist website",
    description: "Interactive dashboard for creative professionals to showcase their work with analytics.",
    tags: ["React", "Tailwind", "Framer Motion"],
    image: makeup,
    links: {
      live: "https://makeover-website.vercel.app/",
      code: "https://github.com/Userann3/makeoverWebsite"
    }
  },
  {
    title: "Flour Mill (Atta Chakki)",
    description: "Mobile application for tracking workouts, nutrition, and health metrics with AI recommendations.",
    tags: ["React","Tailwind"],
    image: chakki,
    links: {
      live: "https://chakki-website.vercel.app/",
      code: "https://github.com/Userann3/chakkiWebsite"
    }
  },
];

const WorksSection = () => {
  return (
    <section className="w-full min-h-screen bg-[#0a0a0a] text-white py-20 px-6 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-900/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-rose-900/10 blur-3xl animate-float-delay"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h4 className="text-lg text-gray-400 mb-2 tracking-widest">MY WORK</h4>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 to-rose-500 text-transparent bg-clip-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-rose-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Grid - Modified for immediate visibility */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-gray-800 bg-gray-900 overflow-hidden"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Content - Always visible */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="text-xs bg-gray-800/80 px-2 py-1 rounded-full border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.links.live}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm bg-gradient-to-r from-purple-600 to-rose-500 text-white px-4 py-2 rounded-full"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.links.code}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm bg-gray-800 text-white px-4 py-2 rounded-full border border-gray-700"
                  >
                    <FaGithub className="text-xs" />
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          {/* <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-rose-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all"
          >
            <FaCode className="text-lg" />
            
          </motion.a> */}
        </motion.div>
      </div>
    </section>
  );
};

export default WorksSection;