import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './Card';
import { ExternalLink } from 'lucide-react';

export function Certificates() {
    const certificates = [
        {
            title: "Introduction to Hardware and Operating Systems",
            issuer: "Coursera",
            date: "Sept 2024",
            link: "https://drive.google.com/file/d/1TiIlN19nYw9cT0Rgsqf5msRGfQVxOYIN/view",
            id: "1TiIlN19nYw9cT0Rgsqf5msRGfQVxOYIN"
        },
        {
            title: "The Bits and Bytes of Computer Networking",
            issuer: "Coursera",
            date: "Sept 2024",
            link: "https://drive.google.com/file/d/1I-vJdgojh6O5TGwJ_WGEgkn71EYbSr-y/view",
            id: "1I-vJdgojh6O5TGwJ_WGEgkn71EYbSr-y"
        },
        {
            title: "Fundamentals of Network Communication",
            issuer: "Coursera",
            date: "Sept 2024",
            link: "https://drive.google.com/file/d/1wuu4W4H57I0A50uU4YCjiO4bALGXfUSB/view",
            id: "1wuu4W4H57I0A50uU4YCjiO4bALGXfUSB"
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
                            <Card className="h-full flex flex-col overflow-hidden group p-0">
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block relative h-56 overflow-hidden w-full border-b border-white/10"
                                >
                                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                                    <img
                                        src={`https://drive.google.com/thumbnail?id=${cert.id}&sz=w800`}
                                        alt={cert.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => {
                                            e.target.src = `https://drive.google.com/uc?export=view&id=${cert.id}`;
                                        }}
                                    />
                                    <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ExternalLink size={14} className="text-white" />
                                    </div>
                                </a>
                                <div className="p-6 flex flex-col flex-grow text-center">
                                    <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                                    <p className="text-gray-400 font-medium mb-4 flex-grow">{cert.issuer}</p>
                                    <div className="inline-flex justify-center items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mx-auto">
                                        <span className="text-xs text-gray-300 font-medium">{cert.date}</span>
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
