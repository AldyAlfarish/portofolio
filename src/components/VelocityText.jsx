import {
    motion,
    useScroll,
    useVelocity,
    useTransform,
    useSpring,
  } from "framer-motion";
  import React, { useRef } from "react";
  
const VelocityText = () => {
    const targetRef = useRef(null);
  
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start start", "end start"],
    });
  
    const scrollVelocity = useVelocity(scrollYProgress);
  
    const skewXRaw = useTransform(
      scrollVelocity,
      [-0.5, 0.5],
      ["45deg", "-45deg"]
    );
    const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });
  
    const xRaw = useTransform(scrollYProgress, [0, 1], [0, -4000]);
    const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });
  
    return (
      <section
        ref={targetRef}
        className="h-[1000vh] bg-neutral-950 text-white"
      >

        <div className="sticky top-0 flex flex-col h-screen items-center overflow-hidden">
          
          <h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6 mt-6"
          >
            About Me
          </h1>
          <p className="mb-4 text-lg text-center text-white md:text-2xl  sm:w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima
            maiores voluptate est ut saepe accusantium maxime doloremque nulla
            consectetur possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            reiciendis blanditiis aliquam aut fugit sint. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, debitis?
          </p>
          <motion.p
            style={{ skewX, x }}
            className="origin-bottom-left whitespace-nowrap text-5xl font-black uppercase leading-[0.85] md:text-7xl md:leading-[0.85]"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ullam autem, 
            accusantium rem, praesentium sunt quo animi fugiat obcaecati minima voluptate. 
            Neque dolore amet dolores, rerum dicta, voluptatibus numquam voluptate impedit 
            rem eligendi iusto distinctio nemo delectus minus fugiat, quod laborum repudiandae? 
            Soluta minus ipsam aspernatur saepe impedit veniam et cupiditate minima, voluptatum 
            explicabo asperiores expedita? Aspernatur, repellendus impedit. Nulla.
          </motion.p>
        </div>
      </section>
    );
  };

export default VelocityText