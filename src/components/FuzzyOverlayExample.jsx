import React from "react";
import { motion } from "framer-motion";
import blackNoise from './black-noise.png';
import { ChevronDown } from 'lucide-react';
import '../App.css';

const FuzzyOverlayExample = () => {
  return (
    // NOTE: An overflow of hidden will be required on a wrapping
    // element to see expected results
    <div className="relative overflow-hidden">
      <ExampleContent />
      <FuzzyOverlay />
    </div>
  );
};

const FuzzyOverlay = () => {
  return (
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
      // You can download these PNGs here:
      // https://www.hover.dev/black-noise.png
      // https://www.hover.dev/noise.png
      style={{
        backgroundImage:  `url(${blackNoise})`,
        // backgroundImage: 'url("/noise.png")',
      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
    />
  );
};

const ExampleContent = () => {
  return (
    <div className="relative grid h-screen place-content-center space-y-6 bg-neutral-950 p-8">
      <h1 className="text-center text-5xl sm:text-9xl font-black text-neutral-50 title">
        MUHAMMAD ALDY<br/>ALFARISH
      </h1>
      {/* <p className="text-center text-neutral-400">
        Scroll Down
      </p> */}
      {/* Scroll Down Indicator */}
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
        >
          <span className="text-xl font-medium mx-5">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
    </div>
  );
};

export default FuzzyOverlayExample;