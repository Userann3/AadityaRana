import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPalette, FaServer, FaDatabase, FaMobileAlt } from "react-icons/fa";

const skills = [
  {
    title: "Frontend",
    icon: <FaPalette className="text-rose-400" />,
    highlights: [
      "React.js & Next.js",
      "Tailwind CSS",
      "Responsive Design",
      "UI/UX Principles"
    ],
    color: "bg-gradient-to-br from-rose-500 to-pink-600"
  },
  {
    title: "Backend",
    icon: <FaServer className="text-purple-400" />,
    highlights: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication"
    ],
    color: "bg-gradient-to-br from-purple-500 to-indigo-600"
  },
  {
    title: "Database",
    icon: <FaDatabase className="text-blue-400" />,
    highlights: [
      "MongoDB",
      "Mongoose",
      "Data Modeling",
      "NoSQL"
    ],
    color: "bg-gradient-to-br from-blue-500 to-teal-600"
  },
  {
    title: "Mobile",
    icon: <FaMobileAlt className="text-amber-400" />,
    highlights: [
      "React Native",
      "Cross-platform",
      "Mobile UI",
      "Performance"
    ],
    color: "bg-gradient-to-br from-amber-500 to-orange-600"
  }
];

const SkillsSection = () => {
  return (
    <section className="w-full min-h-screen bg-gray-950 text-white flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-900/10 rounded-full filter blur-[100px] animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-rose-900/10 rounded-full filter blur-[100px] animate-float-delay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center py-12 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium text-gray-400 mb-2 tracking-widest"
          >
            MY CAPABILITIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-300 to-rose-300 text-transparent bg-clip-text"
          >
            Technical Skills
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-rose-500 mx-auto mt-4 rounded-full"
          ></motion.div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`${skill.color} p-0.5 rounded-xl hover:shadow-lg hover:shadow-${skill.color.split('to-')[1].split(' ')[0]}/20 transition-all duration-300`}
            >
              <div className="bg-gray-900 h-full rounded-xl p-6 flex flex-col">
                <div className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center mb-4`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <ul className="space-y-2 flex-grow">
                  {skill.highlights.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mr-2"></div>
                      <span className="text-gray-300 text-md">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <button className="text-md font-medium text-gray-400 hover:text-white transition-colors">
                    View projects →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-rose-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:shadow-rose-500/30 transition-all"
          >
            Explore Full Portfolio
          </motion.button>
        </motion.div>
      </div>

      {/* Add this to your global CSS */}
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

export default SkillsSection;