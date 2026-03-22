import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './Card';
import { Briefcase, Trophy, Star, Target } from 'lucide-react';

export function Experience() {
    const experiences = [
        {
            title: "SDE Intern",
            company: "ITJOBXS",
            period: "June 2025 – Aug 2025",
            points: [
                "Developed and optimized REST APIs in Node.js and Express for production services, reducing response latency by 30%.",
                "Built interactive React.js components with reusable hooks, improving frontend performance and scalability.",
                "Contributed to database optimization (MongoDB & PostgreSQL), enhancing query efficiency by 25%."
            ],
            icon: <Briefcase size={20} className="text-secondary" />
        }
    ];

    const achievements = [
        {
            platform: "LeetCode",
            details: "Current rating 1704, ranked in the Top 12% globally.",
            icon: <img src="https://cdn.simpleicons.org/leetcode/FFA116" alt="LeetCode" className="w-5 h-5" />
        },
        {
            platform: "CodeChef",
            details: "Attained 2★ rating showcasing consistency in competitive programming contests.",
            icon: <img src="https://cdn.simpleicons.org/codechef/FFFFFF" alt="CodeChef" className="w-6 h-6" />
        },
        {
            platform: "Codeforces",
            details: "Achieved a max rating of 1146 with active participation in over 40 global contests.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                    <rect x="2" y="12" width="5" height="10" rx="1" fill="#FFC107" />
                    <rect x="9.5" y="6" width="5" height="16" rx="1" fill="#1F8ACB" />
                    <rect x="17" y="0" width="5" height="22" rx="1" fill="#F44336" />
                </svg>
            )
        },
        {
            platform: "Problem Solving",
            details: "Solved more than 600 DSA problems across LeetCode, CodeChef and Codeforces.",
            icon: <Target size={20} className="text-emerald-400" />
        }
    ];

    return (
        <section id="experience" className="py-24 relative bg-surface/30">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Experience & <span className="text-gradient">Achievements</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Experience Timeline */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="p-2 bg-secondary/20 rounded-lg text-secondary">
                                <Briefcase size={24} />
                            </span>
                            Work Experience
                        </h3>
                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5 }}
                                    className="relative flex items-start gap-6 group"
                                >
                                    <div className="bg-surface border-2 border-white/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 z-10 group-hover:border-secondary transition-colors relative">
                                        {exp.icon}
                                    </div>
                                    <div className="flex-1 glass p-6 rounded-2xl">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                                            <div>
                                                <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                                                <p className="text-primary font-medium">{exp.company}</p>
                                            </div>
                                            <span className="text-xs font-mono px-3 py-1 bg-white/5 rounded-full text-gray-400">
                                                {exp.period}
                                            </span>
                                        </div>
                                        <ul className="space-y-3">
                                            {exp.points.map((point, i) => (
                                                <li key={i} className="text-gray-400 text-sm flex items-start gap-3">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50 mt-1.5 flex-shrink-0" />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements Grid */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="p-2 bg-primary/20 rounded-lg text-primary">
                                <Trophy size={24} />
                            </span>
                            Competitive Programming
                        </h3>
                        <div className="grid gap-4">
                            {achievements.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card className="flex items-center gap-6 p-5" hover={true}>
                                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-1">{item.platform}</h4>
                                            <p className="text-gray-400 text-sm">{item.details}</p>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
