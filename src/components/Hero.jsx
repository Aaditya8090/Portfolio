import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Button } from './Button';
import { Download, ChevronRight } from 'lucide-react';

export function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-blob" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '2s' }} />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 relative group cursor-pointer"
                    >
                        {/* Rotating Outer Glow Ring */}
                        <motion.div
                            className="absolute -inset-2 bg-gradient-to-r from-primary via-purple-500 to-secondary rounded-full opacity-60 group-hover:opacity-100 blur-lg transition duration-500"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Floating Profile Photo */}
                        <motion.div
                            className="w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-black overflow-hidden relative z-10 bg-black"
                            animate={{ y: [-8, 8, -8] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src={`${import.meta.env.BASE_URL}profile.jpeg`}
                                alt="Aditya Kumar"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.src = 'https://ui-avatars.com/api/?name=Aditya+Kumar&background=0D8ABC&color=fff&size=200';
                                }}
                            />
                        </motion.div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-primary font-medium tracking-wide uppercase mb-4"
                    >
                        Aditya Kumar
                    </motion.h2>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                        Software Developer <br />
                        <span className="text-gradient">Problem Solver</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-xl md:text-2xl text-gray-400 mb-10 h-8"
                    >
                        <TypeAnimation
                            sequence={[
                                'Expert in Data Structures & Algorithms',
                                2000,
                                'Backend Development',
                                2000,
                                'System Design',
                                2000,
                                'Full Stack (MERN)',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center flex-wrap gap-4"
                    >
                        <Button variant="primary" href="#projects">
                            View Projects <ChevronRight size={18} />
                        </Button>
                        <Button
                            variant="outline"
                            href="https://drive.google.com/file/d/1s_v4zr8ctDaEbezskIA7yykk5cB262B8/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download Resume <Download size={18} />
                        </Button>
                        <Button variant="ghost" href="#contact">
                            Contact Me
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
