import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="bg-black text-white min-h-screen flex items-center px-6 md:px-12 relative overflow-hidden"
      style={{ paddingTop: '100px' }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-900 opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-900 opacity-10 blur-3xl animate-pulse delay-300"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
          {/* Left Content (unchanged) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-6"
          >
            <div className="text-md md:text-base font-medium text-gray-400 tracking-widest">
              WEB DESIGNER & CREATIVE DEVELOPER
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight space-y-4">
              <div className="inline-block relative">
                <span className="relative z-10">HI I AM</span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-purple-600 z-0 opacity-70"></span>
              </div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
                AADITYA
              </div>
              <div className="flex items-center gap-4">
                <span>RANA</span>
                <motion.span
                  animate={{ rotate: [0, 20, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-4xl"
                >
                  👋🏽
                </motion.span>
              </div>
            </h1>

            <div className="flex justify-center lg:justify-start gap-6 pt-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Dribbble
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Behance
              </a>
            </div>
          </motion.div>

          {/* Redesigned Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:max-w-md"
          >
            <div className="relative group">
              {/* Visual element with floating shapes */}
              <div className="absolute -inset-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 overflow-hidden">
                {/* Floating tech icons */}
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-purple-500/10 blur-xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-pink-500/10 blur-xl"></div>
                
                {/* Minimal content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Tech stack visualization */}
                  <div className="mb-8 flex flex-wrap justify-center gap-3">
                    {['REACT', 'NODE', 'MONGODB', 'TAILWIND'].map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className="text-md font-mono px-3 py-1.5 bg-gray-800 rounded-full border border-gray-700"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Download Resume Button */}
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full max-w-xs border border-gray-600 text-white font-semibold py-3.5 px-8 rounded-full hover:bg-white hover:text-black transition flex items-center justify-center gap-2"
                  >
                    <span>DOWNLOAD RESUME</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </motion.button>
                  
                  {/* Stats visualization */}
                  <div className="mt-10 w-full">
                    <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                      />
                    </div>
                    <div className="flex justify-between text-md text-gray-400">
                      <span>DESIGN</span>
                      <span>DEVELOPMENT</span>
                      <span>CREATIVITY</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;