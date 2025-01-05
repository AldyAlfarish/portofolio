import React from "react";
import { motion } from "framer-motion";
import blackNoise from './black-noise.png';
import { ChevronDown } from 'lucide-react';
import '../App.css';

const FooterText = () => {
  return (
    // NOTE: An overflow of hidden will be required on a wrapping
    // element to see expected results
    <div className="relative overflow-hidden">
       <TextFooter />
      <ExampleContent />
      <TextEndFooter />
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
    <div className="grid place-content-center gap-2 px-8 py-24 text-white bg-neutral-950">
      <FlipLink href="#">Instagram</FlipLink>
      <FlipLink href="#">Linkedin</FlipLink>
      <FlipLink href="#">GitHub</FlipLink>
    </div>
  );
};

const TextFooter = () => {
  return (
    <div className="bg-neutral-950 px-8 py-4">
      <h3 className="text-white text-[4rem]">Follow Me</h3>
      <p className="text-gray-400 text-xl mb-4">Discover my journey through code and creativity</p>
      <div className="border-2 border-white w-1/4" />
    </div>
  );
};

const TextEndFooter = () => {
  return (
    <div className="bg-neutral-950">
      <div className="border-2 border-white w-full" />
      <div className="py-6 px-8">
        <h3 className="text-white text-xl text-center">Copyright 2025</h3>
        <p className="text-gray-400 text-center mt-2">
          All rights reserved | Designed and developed 
        </p>
      </div>
    </div>
  );
};


const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default FooterText;