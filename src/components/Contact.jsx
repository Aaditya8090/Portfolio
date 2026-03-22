import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from './Card';
import { Button } from './Button';
import { Send, MapPin, Mail, Loader2 } from 'lucide-react';

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://formsubmit.co/ajax/73877ba935971c1a03b6dd3dc73d961a", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitted(true);
                e.target.reset();
                setTimeout(() => setSubmitted(false), 5000);
            } else {
                alert("Something went wrong. Please try emailing me directly.");
            }
        } catch (error) {
            console.error(error);
            alert("Network error. Please try emailing me directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
                    <p className="text-gray-400 mt-6 max-w-xl mx-auto">
                        I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-5 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-2 space-y-6"
                    >
                        <Card className="flex items-center gap-5 p-6" hover={true}>
                            <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                                <Mail size={24} />
                            </div>
                            <div className="overflow-hidden min-w-0 flex-1">
                                <h4 className="text-sm font-medium text-gray-400 mb-1">Email natively</h4>
                                <a href="mailto:adityakgzp101@gmail.com" className="text-white font-bold hover:text-primary transition-colors truncate block md:text-base lg:text-lg">
                                    adityakgzp101@gmail.com
                                </a>
                            </div>
                        </Card>

                        <Card className="flex items-center gap-5 p-6" hover={true}>
                            <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div className="overflow-hidden min-w-0 flex-1">
                                <h4 className="text-sm font-medium text-gray-400 mb-1">Current Location</h4>
                                <p className="text-white font-bold text-lg md:text-base lg:text-lg truncate">
                                    Punjab, India
                                </p>
                                <p className="text-secondary text-sm font-medium mt-1 uppercase tracking-wide">
                                    Open to Relocate
                                </p>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-3"
                    >
                        <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 text-left">
                            {/* Optional FormSubmit configuration fields */}
                            <input type="hidden" name="_subject" value="New message from your Portfolio!" />
                            <input type="hidden" name="_template" value="table" />

                            <div className="grid sm:grid-cols-2 gap-6 mb-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 mb-8">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>

                            <Button
                                type="submit"
                                variant="primary"
                                className="w-full"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <><Loader2 className="animate-spin" size={20} /> Sending...</>
                                ) : submitted ? (
                                    "Message Sent Successfully"
                                ) : (
                                    <><Send size={20} /> Send Message</>
                                )}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
