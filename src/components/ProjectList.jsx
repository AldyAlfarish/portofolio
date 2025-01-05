import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import Todo from './todo.jpg';

export const ProjectList = () => {
  return (
    <section className="bg-neutral-950 p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-neutral-50 text-4xl md:text-6xl font-bold mb-8 text-center"
        >
          List Projects
        </motion.h1>
        <Link
          heading="Todo List"
          subheading="Full-stack Todo List"
          description="A todo list basic."
          imgSrc={Todo}
          href="https://todo-list-theta-one-61.vercel.app/"
          tech={["React", "Node.js", "Postre", "Express JS"]}
        />
        <Link
          heading="Netflix Clone"
          subheading="Web Streaming Video (Coming Soon)"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, voluptatem."
          imgSrc="data:image/jpeg;base64,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"
          href="#"
          tech={["React", "Node.js", "Mongo DB", "Express JS"]}
        />
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, description, href, tech }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-8 transition-colors duration-500 hover:border-neutral-50 md:py-12"
    >
      <div className="relative z-10 max-w-2xl">
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-lg text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
        <p className="mt-4 text-neutral-400 transition-colors duration-500 group-hover:text-neutral-300 max-w-md">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-neutral-800 text-neutral-400 rounded-full transition-colors duration-500 group-hover:bg-neutral-700 group-hover:text-neutral-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};