import React from 'react';
import { motion } from 'framer-motion';
import { FaFigma, FaTwitter, FaGithub, FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';
import Facebook from '/facebook.svg'

const slides = [
    { icon: <FaTwitter size={90} /> },
    { icon: <FaGithub size={90} /> },
    { icon: <FaInstagram size={90} /> },
    { icon: <FaLinkedin size={90} /> },
    { icon: <FaDiscord size={90} /> },
]

const SliderNumber = () => {
    const duplicatedSlides = [...slides, ...slides];

    return (
        <div className="relative h-full overflow-hidden py-12 bg-white mx-auto" style={{ width: "50%" }}>

            <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:filter after:blur-3"></div>

            <motion.div
                className="flex"
                animate={{
                    x: ['0%', '-100%'],
                    transition: {
                        ease: 'linear',
                        duration: 15,
                        repeat: Infinity,
                    }
                }}
            >
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: "240px" }}>
                        <div className="flex items-center justify-center h-full">
                           <a href={slide.link} target='_blank'>
                            {slide.icon}
                           </a>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default SliderNumber;
