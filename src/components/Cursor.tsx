
import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverIn = () => setLinkHovered(true);
    const handleLinkHoverOut = () => setLinkHovered(false);

    const addLinkListeners = () => {
      document.querySelectorAll('a, button').forEach((el) => {
        el.addEventListener('mouseenter', handleLinkHoverIn);
        el.addEventListener('mouseleave', handleLinkHoverOut);
      });
    };

    const removeLinkListeners = () => {
      document.querySelectorAll('a, button').forEach((el) => {
        el.removeEventListener('mouseenter', handleLinkHoverIn);
        el.removeEventListener('mouseleave', handleLinkHoverOut);
      });
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', () => setHidden(true));
    document.addEventListener('mouseenter', () => setHidden(false));
    
    // Wait for DOM to be fully loaded before adding link listeners
    if (document.readyState === 'complete') {
      addLinkListeners();
    } else {
      window.addEventListener('load', addLinkListeners);
    }

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', () => setHidden(true));
      document.removeEventListener('mouseenter', () => setHidden(false));
      window.removeEventListener('load', addLinkListeners);
      removeLinkListeners();
    };
  }, []);

  return (
    <>
      <div 
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: hidden ? 0 : 1,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : 1}) ${linkHovered ? 'scale(2)' : ''}`,
          transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
        }}
      />
      <div 
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: hidden ? 0 : 0.2,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.3 : 1.5})`,
          transition: 'transform 0.4s ease-out, opacity 0.4s ease-out',
        }}
      />
    </>
  );
};

export default Cursor;
