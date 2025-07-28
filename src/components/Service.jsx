import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaHandHoldingUsd, FaCheck, FaCrown, FaRocket, FaShieldAlt } from "react-icons/fa";

const Service = () => {
  const formLink = "https://forms.gle/moeRMAWYKkRswn3W8";

  return (
    <section className="w-full min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden py-12 md:py-0">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-900/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-pink-900/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-black/50 z-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full flex flex-col justify-center z-20 py-8">        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-300 text-transparent bg-clip-text">
            PREMIUM DEVELOPMENT
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-purple-300 to-pink-200 text-transparent bg-clip-text">
            Tailored Web Solutions
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Service Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col hover:border-purple-500/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
              <FaGlobe className="text-2xl text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Static Websites</h3>
            <p className="text-gray-400 mb-6">Perfect for portfolios, landing pages, and small business sites</p>
            <div className="mt-auto">
              <div className="flex items-end gap-2 mb-4">
                <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 text-transparent bg-clip-text">₹2,499</span>
                <span className="text-gray-400 text-sm">one-time</span>
              </div>
              <ul className="space-y-3 mb-6">
                {["5 Custom Pages", "Mobile Responsive", "SEO Optimized", "1 Month Support"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <FaCheck className="text-green-400 text-sm flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href={formLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-purple-600/90 to-pink-500/90 rounded-lg font-medium flex items-center justify-center"
              >
                Get Started
              </motion.a>
            </div>
          </motion.div>

          {/* Service Card 2 (Featured) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-purple-900/20 backdrop-blur-sm border border-purple-800/50 rounded-2xl p-6 md:p-8 flex flex-col relative hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
              <FaCrown className="mr-1" /> POPULAR
            </div>
            <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-6">
              <FaRocket className="text-2xl text-pink-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Dynamic Websites</h3>
            <p className="text-gray-400 mb-6">For businesses needing content management and user interaction</p>
            <div className="mt-auto">
              <div className="flex items-end gap-2 mb-4">
                <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 text-transparent bg-clip-text">₹4,999</span>
                <span className="text-gray-400 text-sm">starting at</span>
              </div>
              <ul className="space-y-3 mb-6">
                {["All Static Features", "User Authentication", "Database Integration", "3 Months Support"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <FaCheck className="text-green-400 text-sm flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href={formLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg font-medium flex items-center justify-center"
              >
                Get Started
              </motion.a>
            </div>
          </motion.div>

          {/* Service Card 3 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col hover:border-pink-500/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-6">
              <FaShieldAlt className="text-2xl text-pink-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">E-Commerce</h3>
            <p className="text-gray-400 mb-6">Complete online store with payment integration</p>
            <div className="mt-auto">
              <div className="flex items-end gap-2 mb-4">
                <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 text-transparent bg-clip-text">₹8,999</span>
                <span className="text-gray-400 text-sm">starting at</span>
              </div>
              <ul className="space-y-3 mb-6">
                {["All Dynamic Features", "Product Management", "Payment Gateway", "6 Months Support"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <FaCheck className="text-green-400 text-sm flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href={formLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-purple-600/90 to-pink-500/90 rounded-lg font-medium flex items-center justify-center"
              >
                Get Started
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* CTA Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Have custom requirements?</p>
          <motion.a
            href={formLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg"
          >
            <FaHandHoldingUsd />
            Discuss Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;