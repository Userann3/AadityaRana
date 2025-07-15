import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaPalette, FaBrain, FaRocket } from "react-icons/fa";

const tabs = [
  { name: "Introduction", icon: <FaRocket className="mr-2" /> },
  { name: "Skills", icon: <FaCode className="mr-2" /> },
  { name: "Passions", icon: <FaPalette className="mr-2" /> },
  { name: "Vision", icon: <FaBrain className="mr-2" /> },
];

const AboutMeSection = () => {
  const [activeTab, setActiveTab] = useState("Introduction");

  const renderContent = () => {
    switch (activeTab) {
      case "Introduction":
        return {
          left: {
            title: "Background",
            subtitle: "2010 - Present",
            desc: `I'm a passionate full-stack developer with a love for clean code, modern UI, and scalable backend systems. I thrive on bringing ideas to life through intuitive interfaces.`,
            stats: [
              { value: "10+", label: "Years Experience" },
              { value: "50+", label: "Projects Completed" },
            ],
          },
          right: {
            title: "Philosophy",
            subtitle: "Driven by Curiosity",
            desc: `I believe in continuous learning and building with purpose. My goal is to create digital experiences that are not just functional, but enjoyable and impactful.`,
            stats: [
              { value: "100%", label: "Client Satisfaction" },
              { value: "∞", label: "Learning Mindset" },
            ],
          },
        };
      case "Skills":
        return {
          left: {
            title: "Frontend",
            subtitle: "React, Tailwind, UX",
            desc: "Proficient in building responsive web interfaces using React.js, Tailwind CSS, and UI design principles.",
            skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
          },
          right: {
            title: "Backend",
            subtitle: "Node, Express, MongoDB",
            desc: "Experienced in REST API development, data modeling, and server-side logic with Node and Express.",
            skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
          },
        };
      case "Passions":
        return {
          left: {
            title: "Design",
            subtitle: "UI/UX & Animation",
            desc: "I enjoy crafting interfaces that look and feel modern, playful, and accessible.",
            passions: ["UI Design", "Micro-interactions", "3D Graphics", "Illustration"],
          },
          right: {
            title: "Tech Exploration",
            subtitle: "DevTools & AI",
            desc: "I constantly explore new tools, frameworks, and emerging technologies to sharpen my edge.",
            passions: ["AI Integration", "WebGL", "DevOps", "AR/VR"],
          },
        };
      case "Vision":
        return {
          left: {
            title: "Career",
            subtitle: "Next 5 Years",
            desc: "I aim to work on global products, contribute to open source, and help solve real-world challenges through tech.",
            goals: ["Global Impact", "Open Source", "Mentorship", "Innovation"],
          },
          right: {
            title: "Dream",
            subtitle: "Beyond Code",
            desc: "I want to create tools that empower others — whether it's developers, designers, or people from non-tech backgrounds.",
            goals: ["Accessibility", "Education", "Community", "Creativity"],
          },
        };
      default:
        return {};
    }
  };

  const content = renderContent();

  return (
    <section className="w-full min-h-screen bg-[#0a0a12] text-white flex flex-col justify-center relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-900/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-rose-900/10 blur-3xl animate-float-delay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-300 to-rose-300 text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="text-gray-400 text-lg tracking-widest mt-2">MY JOURNEY & ASPIRATIONS</p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-rose-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Enhanced tabs */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.name
                  ? "bg-gradient-to-r from-purple-600 to-rose-500 text-white shadow-lg"
                  : "bg-[#1a1a24] text-gray-400 hover:bg-[#2a2a38]"
              }`}
            >
              {tab.icon}
              {tab.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {[content.left, content.right].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
              className={`bg-gradient-to-br from-[#1a1a24] to-[#1e1e2a] p-8 rounded-2xl border border-[#2a2a38] shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group`}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-rose-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="text-sm font-medium text-rose-400 tracking-wider mb-2">
                  {item?.subtitle}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item?.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{item?.desc}</p>
                
                {/* Dynamic content based on tab */}
                <div className="mt-auto">
                  {item?.stats && (
                    <div className="grid grid-cols-2 gap-4">
                      {item.stats.map((stat, i) => (
                        <div key={i} className="bg-[#2a2a38]/50 p-4 rounded-xl">
                          <div className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-rose-300 text-transparent bg-clip-text">
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {(item?.skills || item?.passions || item?.goals) && (
                    <div className="flex flex-wrap gap-2">
                      {(item.skills || item.passions || item.goals).map((item, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="text-sm bg-[#2a2a38] px-3 py-1.5 rounded-full border border-[#3a3a48]"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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

export default AboutMeSection;