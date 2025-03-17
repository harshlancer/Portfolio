import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownIcon, Sparkles, Code, Feather } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      
      // Subtle parallax effect
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const heroElement = heroRef.current;
    
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        heroElement.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center bg-gradient-to-br from-secondary via-background to-background overflow-hidden"
      style={{
        '--mouse-x': '0.5',
        '--mouse-y': '0.5',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full bg-primary/10 absolute animate-spin-slow blur-3xl"></div>
        <div className="w-[600px] h-[600px] rounded-full bg-primary/5 absolute animate-spin-slow blur-xl" style={{ animationDirection: 'reverse' }}></div>
        <div className="w-[400px] h-[400px] rounded-full bg-secondary/10 absolute animate-pulse blur-xl"></div>
      </div>
      
      {/* Floating accent elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[15%] w-8 h-8 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute top-[40%] right-[10%] w-6 h-6 bg-primary/30 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-[30%] left-[20%] w-10 h-10 bg-secondary/20 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute bottom-[10%] right-[25%] w-12 h-12 bg-secondary/30 rounded-md rotate-45 animate-float animation-delay-3000"></div>
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"></div>
      
      <div className="section-container relative z-10">
        <div className="container-inner">
          <div className="flex flex-col items-center text-center space-y-8 animate-scale-in [animation-delay:300ms]">
            <span className="inline-block py-1 px-4 bg-primary/10 backdrop-blur-sm rounded-full text-sm font-medium border border-primary/20 shadow-sm">
              <span className="flex items-center gap-1">
                <Sparkles size={14} className="text-primary animate-pulse" />
                Portfolio
              </span>
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Creating <span className="text-primary relative">
                beautiful
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary/30 rounded-full"></span>
              </span> digital experiences
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mt-4 font-light">
              A showcase of my projects and creative work in web development, design, and interaction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href="#projects" 
                className="group px-7 py-3 bg-primary text-primary-foreground rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2 font-medium"
              >
                <span className="relative">
                  View Projects
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white/70 group-hover:w-full transition-all duration-300"></span>
                </span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              
              <a 
                href="#about" 
                className="group px-7 py-3 border border-primary/20 rounded-full transition-all duration-300 hover:bg-primary/5 backdrop-blur-sm flex items-center justify-center gap-2"
              >
                <span className="relative">
                  About Me
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary/70 group-hover:w-full transition-all duration-300"></span>
                </span>
              </a>
            </div>
            
            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 w-full max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                  <Code size={22} className="text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">Web Development</h3>
                <p className="text-muted-foreground text-sm">Creating responsive and accessible web applications.</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                  <Sparkles size={22} className="text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">UI/UX Design</h3>
                <p className="text-muted-foreground text-sm">Crafting beautiful and intuitive user interfaces.</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                  <Feather size={22} className="text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">Creative Coding</h3>
                <p className="text-muted-foreground text-sm">Bringing ideas to life with interactive experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`absolute bottom-8 left-0 right-0 flex justify-center ${scrolled ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
        <a href="#projects" className="text-primary/60 hover:text-primary transition-colors p-2 bg-white/5 backdrop-blur-sm rounded-full animate-bounce">
          <ArrowDownIcon size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;