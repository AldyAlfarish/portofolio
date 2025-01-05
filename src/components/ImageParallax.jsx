import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useVelocity, useTransform, useSpring } from "framer-motion";
import { Calendar, Database, ChevronDown } from 'lucide-react';
import blackNoise from './black-noise.png';

// NavbarSticky Component
const NavbarSticky = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { title: 'Home', href: '#' },
    { title: 'About', href: '#' },
    { title: 'Services', href: '#' },
    { title: 'Contact', href: '#' }
  ];

  return (
    <nav className="fixed w-full z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between p-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white text-xl font-bold"
          >
            MAA
          </motion.div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-gray-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: 0 }
          }}
        >
          <div className="backdrop-blur-sm bg-black/30 rounded-lg mx-4 overflow-hidden">
            {navItems.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                className="block text-white hover:text-gray-300 px-4 py-3 border-b border-gray-700 last:border-none"
                variants={{
                  open: { opacity: 1, x: 0 },
                  closed: { opacity: 0, x: -20 }
                }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                {item.title}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

// VelocityText Component
const VelocityText = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scrollVelocity = useVelocity(scrollYProgress);

  const skewXRaw = useTransform(scrollVelocity, [-0.5, 0.5], ["45deg", "-45deg"]);
  const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -4000]);
  const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

  return (
    <section ref={targetRef} className="h-[1000vh] bg-neutral-50 text-neutral-950">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.p
          style={{ skewX, x }}
          className="origin-bottom-left whitespace-nowrap text-5xl font-black uppercase leading-[0.85] md:text-7xl md:leading-[0.85]"
        >
          Nothing in this world can take the place of persistence. Talent will
          not; nothing is more common than unsuccessful men with talent. Genius
          will not; unrewarded genius is almost a proverb. Education will not;
          the world is full of educated derelicts. Persistence and determination
          alone are omnipotent. The slogan 'Press On!' has solved and always
          will solve the problems of the human race.
        </motion.p>
      </div>
    </section>
  );
};

// Main Component
const CombinedSections = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHoveringText, setIsHoveringText] = useState(false);
  const [isInsideComponent, setIsInsideComponent] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
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
    <>
      <NavbarSticky />
      <div 
        className="relative"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
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
          {/* Fuzzy Overlay Section */}
          <section className="relative h-screen snap-start sticky top-0 overflow-hidden bg-neutral-950">
            <div className="relative grid h-screen place-content-center space-y-6 p-8 z-10">
              <h1 
                className="text-center text-5xl sm:text-9xl font-black text-neutral-50 title"
                onMouseEnter={() => setIsHoveringText(true)}
                onMouseLeave={() => setIsHoveringText(false)}
              >
                MUHAMMAD ALDY<br/>ALFARISH
              </h1>
              <motion.div 
                className="text-center transform -translate-x-1/2 text-white flex flex-col items-center"
                animate={{
                  y: [0, 10, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                onMouseEnter={() => setIsHoveringText(true)}
                onMouseLeave={() => setIsHoveringText(false)}
              >
                <span className="text-xl font-medium mx-5">Scroll Down</span>
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </div>
            <motion.div
              initial={{ transform: "translateX(-10%) translateY(-10%)" }}
              animate={{
                transform: "translateX(10%) translateY(10%)",
              }}
              transition={{
                repeat: Infinity,
                duration: 0.2,
                ease: "linear",
                repeatType: "mirror",
              }}
              style={{
                backgroundImage: `url(${blackNoise})`,
              }}
              className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
            />
          </section>

          {/* Velocity Text Section */}
          <VelocityText />

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
    </>
  );
};

export default CombinedSections;