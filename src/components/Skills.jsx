import React from 'react';
import { motion } from 'framer-motion';

export function Skills() {
    const skillCategories = [
        {
            title: "Languages",
            skills: [
                { name: "C++", level: 90 },
                { name: "JavaScript", level: 85 },
                { name: "TypeScript", level: 80 },
                { name: "Java", level: 75 },
                { name: "Python", level: 70 },
                { name: "PHP", level: 60 }
            ]
        },
        {
            title: "Web Technologies",
            skills: [
                { name: "React.js", level: 85 },
                { name: "Node.js", level: 85 },
                { name: "Express.js", level: 80 },
                { name: "Tailwind CSS", level: 90 },
                { name: "Next.js", level: 75 }
            ]
        },
        {
            title: "Core CS & Databases",
            skills: [
                { name: "Data Structures & Algorithms", level: 95 },
                { name: "Database Management System", level: 85 },
                { name: "System Design", level: 75 },
                { name: "MySQL / PostgreSQL", level: 80 },
                { name: "MongoDB", level: 85 },
                { name: "Redis", level: 75 }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="skills" className="py-24 relative bg-surface/30">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Technical <span className="text-gradient">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="glass rounded-2xl p-8"
                        >
                            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-primary" />
                                {category.title}
                            </h3>

                            <div className="space-y-6">
                                {category.skills.map((skill, index) => (
                                    <motion.div key={index} variants={itemVariants}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-300 font-medium">{skill.name}</span>
                                            <span className="text-gray-500 text-sm">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-black/40 rounded-full h-2 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                                                className="bg-gradient-to-r from-primary to-secondary h-full rounded-full"
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
