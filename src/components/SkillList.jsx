import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Server, ChevronRight, ExternalLink } from 'lucide-react';

const skills = [
  {
    category: "Frontend Development",
    icon: <Code className="w-6 h-6" />,
    description: "Building beautiful and responsive user interfaces",
    items: [
      { 
        name: "React/Next.js", 
        description: "Component-based architecture, hooks, state management",
      },
      { 
        name: "JavaScript", 
        description: "ES6+, async/await, type safety",
      },
      { 
        name: "Tailwind CSS", 
        description: "Responsive design, custom themes, animations",
      },
      { 
        name: "Framer Motion", 
        description: "Complex animations, gestures, transitions",
      },
    ]
  },
  {
    category: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    description: "Creating robust and scalable server solutions",
    items: [
      { 
        name: "Node.js/Express", 
        description: "REST APIs, authentication, middleware",
      },
      { 
        name: "Python/Django", 
        description: "Full-stack web apps, data processing",
      },
      { 
        name: "Laravel", 
        description: "Full-stack web apps, data processing",
      },
      { 
        name: "PostgreSQL", 
        description: "Complex queries, optimization, migrations",
      },
    ]
  },
];

const SkillList = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="min-h-screen bg-neutral-950 py-16 px-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto"
      >
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and experience across different domains
          </p>
        </motion.div>

        <div className="grid grid-rows-1 lg:grid-cols-1 gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className={`bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700
                ${selectedCategory === category.category ? 'ring-2 ring-blue-500' : ''}
                hover:border-gray-600 transition-all duration-300`}
              onClick={() => setSelectedCategory(
                selectedCategory === category.category ? null : category.category
              )}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-500 bg-opacity-20 rounded-lg text-blue-400">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                  <p className="text-gray-400 text-sm mt-1">{category.description}</p>
                </div>
              </div>

              <AnimatePresence>
                {selectedCategory === category.category && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-4 mt-6"
                  >
                    {category.items.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="group">
                          <div className="flex justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-white font-medium">{skill.name}</span>
                              <ChevronRight 
                                className={`w-4 h-4 text-gray-400 transition-transform duration-300
                                  ${hoveredSkill === skill.name ? 'rotate-90' : ''}`}
                              />
                            </div>
                          </div>
                          
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                            />
                          </div>

                          <AnimatePresence>
                            {hoveredSkill === skill.name && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute mt-2 p-3 bg-gray-800 rounded-lg border border-gray-700 shadow-xl z-10
                                  w-full"
                              >
                                <p className="text-gray-300 text-sm mb-2">{skill.description}</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SkillList;