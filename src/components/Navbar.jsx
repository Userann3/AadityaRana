import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle scroll events for 100vh sections
  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past 10px
      setIsScrolled(window.scrollY > 10);

      // Calculate scroll progress (0 to 100)
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalHeight) * 100;
      setScrollProgress(progress);

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sectionIndex = Math.floor(scrollPosition / window.innerHeight);
      const sections = ["home", "services", "skills", "about", "contact"];
      
      if (sections[sectionIndex]) {
        setActiveSection(sections[sectionIndex]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to specific 100vh section
  const scrollToSection = (sectionId, e) => {
    e.preventDefault();
    const sections = ["home", "services", "skills", "about", "pricing", "contact"];
    const sectionIndex = sections.indexOf(sectionId);
    
    if (sectionIndex >= 0) {
      window.scrollTo({
        top: sectionIndex * window.innerHeight,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "HOME" },
    { id: "services", label: "SERVICES" },
    { id: "skills", label: "SKILLS" },
    { id: "about", label: "ABOUT ME" },
    // { id: "pricing", label: "PRICING" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <>
      {/* Scroll progress indicator */}
      <div 
        className="fixed top-0 left-0 h-1 z-50 bg-gradient-to-r from-purple-400 to-pink-300" 
        style={{ width: `${scrollProgress}%` }}
      />
      
      <nav className={`fixed w-full z-50 bg-black/90 backdrop-blur-sm text-white transition-all duration-300 ${isScrolled ? 'py-3 shadow-xl' : 'py-5 md:py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => scrollToSection("home", e)}
              className={`font-bold transition-all duration-300 ${isScrolled ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'} tracking-wider hover:scale-105`}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
                AADITYA
              </span>
            </a>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none transition duration-300 transform hover:scale-110"
                aria-label="Toggle menu"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              <ul className="flex gap-8 items-center text-md">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => scrollToSection(item.id, e)}
                      className={`transition duration-300 hover:scale-105 group ${
                        activeSection === item.id
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300"
                          : "text-white hover:text-gray-300"
                      }`}
                    >
                      {item.label}
                      <span className={`block h-0.5 bg-gradient-to-r from-purple-400 to-pink-300 transition-all duration-300 ${
                        activeSection === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden bg-black/95 backdrop-blur-sm overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-[700px] py-4" : "max-h-0 py-0"
          }`}>
            <ul className="flex flex-col gap-6 px-6 text-xl">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(item.id, e)}
                    className={`block transition duration-300 py-3 border-b ${
                      activeSection === item.id
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 border-gradient-r border-gradient-purple-pink"
                        : "text-white hover:text-gray-300 border-gray-800"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;