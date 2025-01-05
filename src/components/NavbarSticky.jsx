import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NavbarSticky = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'Project', href: '/Project' },
    { title: 'Skill', href: '/Skill' },
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

          {/* Menu Button for All Screens */}
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

        {/* Menu for All Screens */}
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
                className="block text-white hover:text-gray-300 px-4 py-3 text-5xl last:border-none"
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

export default NavbarSticky;