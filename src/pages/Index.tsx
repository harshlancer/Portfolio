
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectShowcase from '@/components/ProjectShowcase';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';
import TransitionEffect from '@/components/TransitionEffect';

const Index = () => {
  useEffect(() => {
    // Set title
    document.title = "Portfolio | Creative Developer";
    
    // Disable the default cursor
    document.body.classList.add('custom-cursor-enabled');
    
    return () => {
      document.body.classList.remove('custom-cursor-enabled');
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <TransitionEffect />
      <Cursor />
      <Navbar />
      
      <main>
        <Hero />
        <ProjectShowcase />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
