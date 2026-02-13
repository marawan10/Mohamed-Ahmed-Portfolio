import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Terminal, Cpu, Server, Shield, Code2, Download } from 'lucide-react';

const BOOT_SEQUENCE = [
    "> INITIALIZING SYSTEM...",
    "> CHECKING KERNEL INTEGRITY... [OK]",
    "> LOADING MODULES: ASP.NET CORE, EF CORE, SQL SERVER... [OK]",
    "> ESTABLISHING SECURE CONNECTION... [OK]",
    "> MOUNTING VOLUMES... [OK]",
    "> SYSTEM READY.",
    "> WELCOME, USER."
];

const TerminalHero: React.FC = () => {
    const [text, setText] = useState<string[]>([]);
    const [isBooting, setIsBooting] = useState(true);

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < BOOT_SEQUENCE.length) {
                setText(prev => [...prev, BOOT_SEQUENCE[currentIndex]]);
                currentIndex++;
            } else {
                clearInterval(interval);
                setTimeout(() => setIsBooting(false), 800);
            }
        }, 150);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center bg-background overflow-hidden pt-16">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="container mx-auto px-4 z-10 relative">
                <div className="max-w-4xl mx-auto">
                    {/* Terminal Window */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-terminal-bg border border-border-color rounded-lg shadow-2xl overflow-hidden backdrop-blur-sm bg-opacity-95"
                    >
                        {/* Terminal Header */}
                        <div className="bg-background-secondary px-4 py-2 border-b border-border-color flex items-center justify-between">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="text-xs text-text-secondary font-mono flex items-center gap-2">
                                <Terminal size={14} />
                                <span>backend@portfolio:~</span>
                            </div>
                            <div className="w-16"></div>
                        </div>

                        {/* Terminal Content */}
                        <div className="p-6 font-mono text-sm md:text-base min-h-[400px]">
                            {text.map((line, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`${(line && line.includes("[OK]")) ? "text-accent-primary" : "text-text-primary"} mb-2`}
                                >
                                    {line}
                                </motion.div>
                            ))}

                            {!isBooting && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-8 space-y-6"
                                >
                                    <div className="flex flex-col md:flex-row items-baseline gap-4">
                                        <h1 className="text-4xl md:text-6xl font-bold text-text-primary tracking-tight">
                                            <span className="text-accent-primary">&gt;</span> Backend<br />Developer
                                        </h1>
                                        <p className="text-text-secondary text-lg md:text-xl">
                                            // Building robust systems & Aspiring Architect
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                        <div className="p-4 border border-border-color rounded bg-background bg-opacity-50 hover:border-accent-primary transition-colors group">
                                            <div className="flex items-center gap-3 mb-2 text-accent-primary group-hover:text-glow">
                                                <Server />
                                                <span className="font-bold">System Architecture</span>
                                            </div>
                                            <p className="text-text-secondary text-sm">Learning to design modular monoliths and microservices.</p>
                                        </div>
                                        <div className="p-4 border border-border-color rounded bg-background bg-opacity-50 hover:border-accent-primary transition-colors group">
                                            <div className="flex items-center gap-3 mb-2 text-accent-primary group-hover:text-glow">
                                                <Cpu />
                                                <span className="font-bold">Performance Focused</span>
                                            </div>
                                            <p className="text-text-secondary text-sm">Optimizing query execution and API overhead.</p>
                                        </div>
                                        <div className="p-4 border border-border-color rounded bg-background bg-opacity-50 hover:border-accent-primary transition-colors group">
                                            <div className="flex items-center gap-3 mb-2 text-accent-primary group-hover:text-glow">
                                                <Shield />
                                                <span className="font-bold">Secure Code</span>
                                            </div>
                                            <p className="text-text-secondary text-sm">Implementing best practices for auth and data protection.</p>
                                        </div>
                                        <div className="p-4 border border-border-color rounded bg-background bg-opacity-50 hover:border-accent-primary transition-colors group">
                                            <div className="flex items-center gap-3 mb-2 text-accent-primary group-hover:text-glow">
                                                <Code2 />
                                                <span className="font-bold">Modern Stack</span>
                                            </div>
                                            <p className="text-text-secondary text-sm">Working with .NET 10, EF Core, SQL Server, and Docker.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 mt-8">
                                        <a
                                            href="/cv.pdf"
                                            download="Mohammed_Ahmed_Backend_CV.pdf"
                                            className="px-6 py-3 bg-accent-primary text-background font-bold rounded flex items-center gap-2 hover:bg-opacity-90 transition-all hover:scale-105"
                                        >
                                            <Download size={18} />
                                            <span>wget cv.pdf</span>
                                        </a>
                                        <Link
                                            to="/projects"
                                            className="px-6 py-3 border border-border-color text-text-primary rounded flex items-center gap-2 hover:border-accent-primary hover:text-accent-primary transition-all hover:scale-105"
                                        >
                                            <span>./view-projects.sh</span>
                                        </Link>
                                    </div>
                                </motion.div>
                            )}

                            <div className="mt-4 flex items-center text-accent-primary">
                                <span className="mr-2">&gt;</span>
                                <span className="terminal-cursor"></span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TerminalHero;
