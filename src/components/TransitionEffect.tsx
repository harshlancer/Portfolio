
import React, { useEffect, useState } from 'react';

const TransitionEffect = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div 
        className={`fixed inset-0 z-50 bg-primary transition-transform duration-[800ms] ease-in-out ${isLoading ? 'transform-none' : 'translate-y-full'}`}
      ></div>
      <div 
        className={`fixed inset-0 z-50 bg-background transition-transform duration-[800ms] delay-[200ms] ease-in-out ${isLoading ? 'transform-none' : 'translate-y-full'}`}
      ></div>
      
      <div 
        className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
        style={{ 
          opacity: isLoading ? 1 : 0,
          transition: 'opacity 500ms ease-in-out',
          transitionDelay: '200ms'
        }}
      >
        <div className="text-3xl font-semibold text-primary-foreground">
          Portfolio
        </div>
      </div>
    </>
  );
};

export default TransitionEffect;
