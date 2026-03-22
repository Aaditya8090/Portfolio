import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './Card';
import { Award, MonitorPlay, Network, Server } from 'lucide-react';

export function Certificates() {
    const certificates = [
        {
            title: "Introduction to Hardware and Operating Systems",
            issuer: "Coursera",
            date: "Sept 2024",
            icon: <MonitorPlay className="text-secondary" size={32} />
        },
        {
            title: "The Bits and Bytes of Computer Networking",
            issuer: "Coursera",
            date: "Sept 2024",
            icon: <Network className="text-primary" size={32} />
        },
        {
            title: "Fundamentals of Network Communication",
            issuer: "Certified",
            date: "Sept 2024",
            icon: <Server className="text-emerald-400" size={32} />
        }
    ];

    return (
        <section id="certificates" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        My <span className="text-gradient">Certifications</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col items-center text-center p-8">
                                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                                    {cert.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                                <p className="text-gray-400 font-medium mb-6 flex-grow">{cert.issuer}</p>
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mt-auto">
                                    <Award size={14} className="text-gray-400" />
                                    <span className="text-xs text-gray-300 font-medium">{cert.date}</span>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
