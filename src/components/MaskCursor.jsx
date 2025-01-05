import React from 'react';
import "../index.css";
import { motion } from "framer-motion";
import { useMouse } from "@uidotdev/usehooks";

const MaskCursor = () => {
    const [mouse, ref] = useMouse();
    const xIntersecting = mouse.elementX > 0 && mouse.elementX < 850;
    const yIntersecting = mouse.elementY > 0 && mouse.elementY < 250;
    const isIntersecting = xIntersecting && yIntersecting;
    const cursor = isIntersecting ? 400 : 40;

    return (
        <div className='relative w-screen h-screen bg:#0f0f0f'>
            <motion.div
                animate={{
                    WebkitMaskPosition: `${mouse.x - cursor / 2}px ${mouse.y - cursor / 2}px`,
                    WebkitMaskSize: `${cursor}px`,
                }}
                transition={{
                    type: 'tween',
                    ease: 'backOut',
                    duration: 0.3,
                }}
                className='mask'
                >
                    <div ref={ref} className='color:#0f0f0f h-screen text-white'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates sequi similique atque dicta quidem pariatur maxime magnam perspiciatis sit suscipit? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptas asperiores expedita accusamus facilis deleniti, repellat perspiciatis fuga nihil natus nisi, quo autem adipisci odit magnam tempora. Reiciendis, sequi voluptatibus.
                    </div>
                </motion.div>
                <div className='bg-black text-white h-screen'>
                    <div className='color:#bcb8b1'>
                        <span className='color:#e63946'>Generative AI Models </span>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ea quo impedit sit aut quis neque ab dolores debitis officia voluptates, animi cupiditate molestiae. Minus debitis rem doloremque obcaecati dolorum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, tempore.
                    </div>
                </div>
        </div>
    )
}

export default MaskCursor