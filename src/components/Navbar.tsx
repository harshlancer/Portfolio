
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="section-container py-0">
        <nav className="flex items-center justify-between">
          <a 
            href="#" 
            className="text-xl font-medium tracking-tight relative"
            aria-label="Home"
          >
            <span>Portfolio</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex flex-col gap-1.5 p-2 z-50"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span 
              className={cn(
                "w-6 h-0.5 bg-current transition-all duration-300 ease-in-out",
                isMenuOpen && "translate-y-2 rotate-45"
              )}
            ></span>
            <span 
              className={cn(
                "w-6 h-0.5 bg-current transition-all duration-300 ease-in-out",
                isMenuOpen && "opacity-0"
              )}
            ></span>
            <span 
              className={cn(
                "w-6 h-0.5 bg-current transition-all duration-300 ease-in-out",
                isMenuOpen && "-translate-y-2 -rotate-45"
              )}
            ></span>
          </button>
          
          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="link-underline font-medium transition-colors hover:text-primary"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Mobile Nav Overlay */}
          <div 
            className={cn(
              "fixed inset-0 bg-background/95 backdrop-blur-sm flex items-center justify-center z-40 transition-all duration-500",
              isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}
          >
            <ul className="flex flex-col items-center gap-8 text-3xl">
              {navLinks.map((link) => (
                <li 
                  key={link.name} 
                  className={cn(
                    "transform transition-all duration-300 delay-100",
                    isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  )}
                >
                  <a 
                    href={link.href}
                    className="link-underline font-medium"
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
