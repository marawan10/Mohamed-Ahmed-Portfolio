import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import resumePdf from '../../assets/Cv.pdf';
import profileImage from '../../assets/image.png';

export const HeroSection: React.FC = () => {
    return (
        <section className="min-h-[calc(100vh-100px)] flex items-center justify-center py-12 md:py-20 overflow-hidden relative">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

            <div className="container mx-auto px-4 z-10">
                <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 text-center md:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-white/10 text-primary font-mono text-sm mb-6">
                            <Terminal size={14} />
                            <span>root@portfolio:~$ ./init_portfolio.sh</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                            Hi, I'm <span className="text-primary text-glow">Mohammed</span>
                        </h1>

                        <div className="h-20 mb-6 font-mono text-xl md:text-2xl text-secondary">
                            <span className="mr-2">&gt;</span>
                            <TypeAnimation
                                sequence={[
                                    'ASP.NET Core',
                                    2000,
                                    'Backend Developer',
                                    2000,
                                    'System Architect',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </div>

                        <p className="text-text-secondary text-lg md:text-xl max-w-2xl mb-8 leading-relaxed mx-auto md:mx-0">
                            Crafting scalable, high-performance systems with ASP.NET Core.
                            I build robust, scalable server-side applications that power real business impact.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                            <Link
                                to="/projects"
                                className="w-full sm:w-auto px-8 py-3 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group"
                            >
                                View My Work
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <a
                                href={resumePdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-8 py-3 border border-white/10 bg-surface hover:bg-white/5 text-text-primary font-bold rounded-lg transition-all flex items-center justify-center gap-2"
                            >
                                Download Resume
                                <Download size={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Circular Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-shrink-0 relative group"
                    >
                        {/* Decorative Rings */}
                        <div className="absolute inset-0 -m-4 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-0 -m-8 rounded-full border border-secondary/10 animate-[spin_15s_linear_infinite_reverse]" />

                        {/* Main Image Container */}
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-surface shadow-2xl relative z-10">
                            <img
                                src={profileImage}
                                alt="Mohammed Ahmed"
                                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
