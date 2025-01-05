import React, { useState, useEffect } from 'react';
import { Calendar, Database } from 'lucide-react';

const StickySection = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHoveringText, setIsHoveringText] = useState(false);
  const [isInsideComponent, setIsInsideComponent] = useState(false);

  const handleMouseMove = (e) => {
    // Get the bounding rectangle of the container
    const rect = e.currentTarget.getBoundingClientRect();
    
    // Calculate cursor position relative to the container
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseEnter = () => {
    setIsInsideComponent(true);
  };

  const handleMouseLeave = () => {
    setIsInsideComponent(false);
    setIsHoveringText(false);
  };

  return (
    <div 
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Custom Cursor - Only shown when inside component */}
      {isInsideComponent && (
        <div
          className="absolute pointer-events-none z-50 transition-all duration-200 mix-blend-difference"
          style={{
            left: cursorPosition.x,
            top: cursorPosition.y,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div
            className={`rounded-full bg-white transition-all duration-200 ${
              isHoveringText ? 'w-24 h-24' : 'w-6 h-6'
            }`}
          />
        </div>
      )}

      <div className="h-screen overflow-y-scroll snap-y snap-mandatory cursor-none">
        {/* Calendar Section */}
        <section className="h-screen snap-start sticky top-0 bg-black flex flex-col items-center justify-center text-center px-4">
          <Calendar 
            className="w-12 h-12 text-white mb-6"
            onMouseEnter={() => setIsHoveringText(true)}
            onMouseLeave={() => setIsHoveringText(false)}
          />
          <h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            onMouseEnter={() => setIsHoveringText(true)}
            onMouseLeave={() => setIsHoveringText(false)}
          >
            A new type of Calendar
          </h1>
          <p 
            className="text-gray-300 max-w-2xl mb-8"
            onMouseEnter={() => setIsHoveringText(true)}
            onMouseLeave={() => setIsHoveringText(false)}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo
            officia atque iure voluptatibus necessitatibus odit cupiditate
            reprehenderit iusto quaerati
          </p>
          <button 
            className="bg-purple-400 hover:bg-purple-500 text-black px-6 py-3 rounded-lg font-medium transition-colors"
            onMouseEnter={() => setIsHoveringText(true)}
            onMouseLeave={() => setIsHoveringText(false)}
          >
            LEARN MORE →
          </button>
        </section>

        {/* Privacy Section */}
        <section className="h-screen snap-start sticky top-0 bg-white flex flex-col items-center justify-center text-center px-4">
          <Database 
            className="w-12 h-12 text-black mb-6"
            onMouseEnter={() => setIsHoveringText(true)}
            onMouseLeave={() => setIsHoveringText(false)}
          />
          <h1 
            className="text-5xl md:text-6xl font-bold text-black mb-6"
            onMouseEnter={() => setIsHoveringText(true)}
            onMouseLeave={() => setIsHoveringText(false)}
          >
            #1 in data privacy
          </h1>
          <p 
            className="text-gray-600 max-w-2xl mb-8"
            onMouseEnter={() => setIsHoveringText(true)}
            onMouseLeave={() => setIsHoveringText(false)}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo
            officia atque iure voluptatibus necessitatibus odit cupiditate
            reprehenderit iusto quaerati
          </p>
          <button 
            className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            onMouseEnter={() => setIsHoveringText(true)}
            onMouseLeave={() => setIsHoveringText(false)}
          >
            LEARN MORE →
          </button>
        </section>
      </div>
    </div>
  );
};

export default StickySection;