import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './Card';
import { Code2, Server, Database, GraduationCap } from 'lucide-react';

export function About() {
    const highlights = [
        {
            icon: <Code2 className="text-primary" size={24} />,
            title: "Clean Code",
            desc: "Writing modular, scalable, and maintainable software"
        },
        {
            icon: <Server className="text-secondary" size={24} />,
            title: "Backend Driven",
            desc: "Strong focus on APIs, architecture, and system design"
        },
        {
            icon: <Database className="text-emerald-400" size={24} />,
            title: "Data Optimization",
            desc: "Efficient caching, DB modeling, and querying"
        },
        {
            icon: <GraduationCap className="text-orange-400" size={24} />,
            title: "Continuous Learner",
            desc: "Always exploring new tech and solving complex problems"
        }
    ];

    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full md:mx-0 mx-auto" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-gray-300 text-lg leading-relaxed space-y-6"
                    >
                        <p>
                            I am a Software Developer and Computer Science student at Lovely Professional University (CGPA 8.88).
                            I specialize in building robust backend systems, scalable APIs, and performance-optimized full-stack applications.
                        </p>
                        <p>
                            With over 600+ Data Structures & Algorithm problems solved across platforms like LeetCode and Codeforces,
                            I bring a strong problem-solving mindset to software engineering. My expertise lies in <strong className="text-white font-medium">C++, Node.js, React, and MongoDB</strong>.
                        </p>
                        <p>
                            Whether it's designing a high-performance in-memory cache engine or architecting a real-time chat service,
                            I enjoy tackling technical challenges that require deep understanding of computer science fundamentals.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                            >
                                <Card className="h-full">
                                    <div className="bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-white font-medium mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
