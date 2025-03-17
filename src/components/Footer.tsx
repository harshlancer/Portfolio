
import React from 'react';
import { ArrowUpIcon } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-lg font-medium">Portfolio</p>
            
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="space-x-6 text-sm">
              <a href="#projects" className="hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#about" className="hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="hover:text-primary transition-colors">
                Contact
              </a>
            </div>
            
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUpIcon size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
