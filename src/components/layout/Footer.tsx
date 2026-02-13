import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../../data/constants';

export const Footer: React.FC = () => {
    return (
        <footer className="w-full py-8 mt-20 border-t border-white/10 bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-text-secondary text-sm font-mono">
                    © {new Date().getFullYear()} Mohammed Ahmed Mahmoud. All rights reserved.
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-primary transition-colors"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-secondary transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href={SOCIAL_LINKS.email}
                        className="text-text-secondary hover:text-accent transition-colors"
                        aria-label="Email"
                    >
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};
