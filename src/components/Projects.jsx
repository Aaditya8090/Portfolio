import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './Card';
import { Button } from './Button';
import { Github, ExternalLink, Leaf, Car, Database, Activity, MessageSquare, Wallet } from 'lucide-react';

export function Projects() {
    const projects = [
        {
            title: "Traffic Management System",
            description: "A dynamic traffic flow optimization system to analyze real-time vehicle density and manage signal timing efficiently to reduce congestion.",
            techStack: ["Node.js", "Express.js", "React.js", "MongoDB", "Tailwind CSS"],
            icon: <Car className="text-secondary mb-4" size={32} />,
            github: "https://github.com/Aaditya8090/TrafficManagementSystem",
            demo: "https://traffic-management-client.onrender.com/"
        },
        {
            title: "Smart Cache Engine",
            description: "A high-performance in-memory cache engine featuring O(1) operations, LRU eviction, and robust thread safety using mutexes and read-write locks.",
            techStack: ["C++", "Data Structures", "Multithreading", "OOP"],
            icon: <Database className="text-blue-400 mb-4" size={32} />,
            github: "https://github.com/Aaditya8090/SmartCacheEngine",
            demo: "https://github.com/Aaditya8090/SmartCacheEngine"
        },
        {
            title: "Expense Tracker",
            description: "A comprehensive MERN stack financial management dashboard featuring complete CRUD operations, income/expense analytics, and responsive design metrics.",
            techStack: ["React.js", "Node.js", "MongoDB", "Express"],
            icon: <Wallet className="text-emerald-500 mb-4" size={32} />,
            github: "https://github.com/Aaditya8090/Expense_Tracker_Project_MERN",
            demo: "https://github.com/Aaditya8090/Expense_Tracker_Project_MERN"
        },
        {
            title: "Smart Resource Conservation System",
            description: "An IoT-driven platform focusing on real-time optimization of energy and water usage. Provides analytics dashboards and threshold alerts for sustainable resource management.",
            techStack: ["React.js", "Node.js", "MongoDB", "IoT API"],
            icon: <Leaf className="text-emerald-400 mb-4" size={32} />,
            github: "https://github.com/Aaditya8090/SmartHomeProject",
            demo: "https://github.com/Aaditya8090/SmartHomeProject"
        },
        {
            title: "Smart API Rate Limiter",
            badge: "Coming Soon",
            description: "Distributed rate limiting service supporting multiple algorithms natively using Redis atomic counters to enforce limits across instances.",
            techStack: ["Node.js", "Redis", "Docker", "React.js"],
            icon: <Activity className="text-orange-400 mb-4" size={32} />,
            github: "https://github.com/Aaditya8090",
            demo: "https://github.com/Aaditya8090"
        },
        {
            title: "Low Latency Chat System",
            badge: "Coming Soon",
            description: "Real-time messaging system utilizing Socket.IO and WebSockets with horizontal scaling via Redis Pub/Sub for highly reliable communication.",
            techStack: ["React.js", "Node.js", "Socket.IO", "Redis"],
            icon: <MessageSquare className="text-purple-400 mb-4" size={32} />,
            github: "https://github.com/Aaditya8090",
            demo: "https://github.com/Aaditya8090"
        }
    ];

    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col h-full"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                        >
                            <Card className="h-full pt-8">
                                <div className="flex flex-col h-full">
                                    <div className="flex-grow flex flex-col">
                                        {project.icon}
                                        <div className="flex items-center flex-wrap gap-3 mb-3">
                                            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                                            {project.badge && (
                                                <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold bg-primary/20 text-primary border border-primary/30 rounded-full select-none">
                                                    {project.badge}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-gray-400 text-sm mb-6">{project.description}</p>

                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.techStack.map((tech, i) => (
                                                <span key={i} className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-4 mt-auto pt-2">
                                        <Button variant="outline" size="sm" href={project.github} target="_blank" className="flex-1 border-white/10 hover:border-white/20">
                                            <Github size={16} /> Code
                                        </Button>
                                        <Button variant="primary" size="sm" href={project.demo} target="_blank" className="flex-1">
                                            <ExternalLink size={16} /> Live Demo
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
