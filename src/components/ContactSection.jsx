import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="w-full h-screen bg-[#0a0a0a] text-white flex items-center justify-center relative overflow-hidden px-4">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-900/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-rose-900/10 blur-3xl animate-float-delay"></div>
      </div>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content - Enhanced */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-lg text-gray-400 mb-2 tracking-widest">GET IN TOUCH</h4>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Let's Create <span className="bg-gradient-to-r from-purple-400 to-rose-500 text-transparent bg-clip-text">Something</span><br />Amazing Together
          </h2>
          
          <p className="text-gray-400 mb-10 max-w-md text-lg leading-relaxed">
            Have a project in mind? Let's discuss how we can bring your vision to life with cutting-edge design and development.
          </p>

          <div className="space-y-4">
            {/* Contact Card 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex items-center gap-6 bg-gradient-to-br from-[#111] to-[#1a1a1a] p-6 rounded-2xl border border-gray-800 shadow-lg hover:border-purple-500/50 transition-all"
            >
              <div className="bg-gradient-to-br from-purple-600 to-rose-500 p-3 rounded-xl">
                <FaPhoneAlt className="text-white text-xl" />
              </div>
              <div>
                <div className="text-xs text-gray-400 tracking-widest mb-1">PHONE</div>
                <div className="text-white font-medium text-lg">+91 8076120942</div>
              </div>
            </motion.div>

            {/* Contact Card 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex items-center gap-6 bg-gradient-to-br from-[#111] to-[#1a1a1a] p-6 rounded-2xl border border-gray-800 shadow-lg hover:border-rose-500/50 transition-all"
            >
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-3 rounded-xl">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <div>
                <div className="text-xs text-gray-400 tracking-widest mb-1">EMAIL</div>
                <div className="text-white font-medium text-lg">aadityarana900@gmail.com.com</div>
              </div>
            </motion.div>

            {/* Contact Card 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex items-center gap-6 bg-gradient-to-br from-[#111] to-[#1a1a1a] p-6 rounded-2xl border border-gray-800 shadow-lg hover:border-amber-500/50 transition-all"
            >
              <div className="bg-gradient-to-br from-amber-600 to-orange-500 p-3 rounded-xl">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <div>
                <div className="text-xs text-gray-400 tracking-widest mb-1">LOCATION</div>
                <div className="text-white font-medium text-lg">Ballabgarh Faridabad Haryana</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Form - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-[#111] to-[#1a1a1a] p-8 rounded-2xl shadow-2xl border border-gray-800 relative overflow-hidden"
        >
          {/* Form gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-rose-900/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">Send Me a Message</h3>
            <p className="text-gray-400 mb-8">Fill out the form below and I'll get back to you soon</p>
            
            <form className="space-y-5">
              <div className="space-y-1">
                <label className="text-sm text-gray-400">Your Name</label>
                <input
                  type="text"
                  className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white transition-all"
                />
              </div>
              
              <div className="space-y-1">
                <label className="text-sm text-gray-400">Email Address</label>
                <input
                  type="email"
                  className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 text-white transition-all"
                />
              </div>
              
              <div className="space-y-1">
                <label className="text-sm text-gray-400">Subject</label>
                <input
                  type="text"
                  className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white transition-all"
                />
              </div>
              
              <div className="space-y-1">
                <label className="text-sm text-gray-400">Your Message</label>
                <textarea
                  rows="4"
                  className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 text-white transition-all"
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-600 to-rose-500 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all"
              >
                <FaPaperPlane />
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delay { animation: float 8s ease-in-out infinite 2s; }
      `}</style>
    </section>
  );
};

export default ContactSection;