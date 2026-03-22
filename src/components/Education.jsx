import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './Card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export function Education() {
    const education = [
        {
            degree: "Bachelor of Technology - Computer Science & Engineering",
            institution: "Lovely Professional University",
            location: "Phagwara, Punjab",
            period: "Aug 2023 – Present",
            score: "CGPA: 8.88"
        },
        {
            degree: "Intermediate (12th Grade)",
            institution: "GBPMS School",
            location: "Ghazipur, Uttar Pradesh",
            period: "Apr 2021 – Mar 2022",
            score: "Percentage: 91.6%"
        },
        {
            degree: "Matriculation (10th Grade)",
            institution: "GBPMS School",
            location: "Ghazipur, Uttar Pradesh",
            period: "Apr 2019 – Mar 2020",
            score: "Percentage: 88.4%"
        }
    ];

    return (
        <section id="education" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        My <span className="text-gradient">Education</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
                </motion.div>

                <div className="relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                    {education.map((item, index) => (
                        <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-8`}>
                            {/* Marker */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0a0a0a] bg-primary/20 text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <GraduationCap size={18} />
                            </div>

                            {/* Card */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30, y: 10 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]"
                            >
                                <Card className="p-6 md:p-8 relative overflow-hidden group-hover:border-primary/50 transition-colors duration-300" hover={true}>
                                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/50 to-secondary/50 hidden group-hover:block transition-all" />

                                    <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-wide mb-3 bg-primary/10 px-3 py-1 rounded-full">
                                        <Calendar size={14} />
                                        {item.period}
                                    </span>

                                    <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors">
                                        {item.degree}
                                    </h3>

                                    <h4 className="text-lg text-gray-300 font-medium mb-4">
                                        {item.institution}
                                    </h4>

                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm border-t border-white/5 pt-4 mt-2">
                                        <div className="flex items-center gap-2 text-gray-400">
                                            <MapPin size={16} className="text-secondary" />
                                            {item.location}
                                        </div>
                                        <div className="font-mono text-secondary font-bold bg-secondary/10 px-3 py-1 rounded-md inline-block">
                                            {item.score}
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
