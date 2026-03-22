import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t border-white/10 py-12 bg-surface text-center">
            <div className="container mx-auto px-6 max-w-6xl flex flex-col items-center">
                <div className="text-2xl font-bold text-white mb-6">
                    Aditya<span className="text-primary">.</span>
                </div>

                <div className="flex items-center gap-6 mb-8">
                    <a href="https://github.com/Aaditya8090" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                        <Github size={24} />
                    </a>
                    <a href="https://linkedin.com/in/aditya90" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:adityakgzp8090@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                        <Mail size={24} />
                    </a>
                </div>

                <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Aditya Kumar. Made with ❤️
                </p>
            </div>
        </footer>
    );
}
