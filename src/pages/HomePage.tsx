import React from 'react';
import TerminalHero from '../components/sections/TerminalHero';
import PerformanceMetrics from '../components/ui/PerformanceMetrics';
import { motion } from 'framer-motion';
import { Database, Layout, ShieldCheck, GitBranch } from 'lucide-react';

export const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen">
            <TerminalHero />

            <section className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column: Performance Review */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-accent-primary animate-pulse">●</span>
                            <h3 className="text-text-secondary font-mono text-sm tracking-wider">LATEST_PERFORMANCE_LOGS</h3>
                        </div>
                        <PerformanceMetrics />
                    </div>

                    {/* Right Column: Core Competencies */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-accent-primary animate-pulse">●</span>
                            <h3 className="text-text-secondary font-mono text-sm tracking-wider">SYSTEM_CAPABILITIES</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="p-6 bg-background-secondary border border-border-color rounded hover:border-accent-primary transition-colors group"
                            >
                                <Database className="text-accent-secondary mb-4 group-hover:text-glow" size={32} />
                                <h4 className="text-text-primary font-bold font-mono mb-2">Data Mastery</h4>
                                <p className="text-text-secondary text-sm">Expert in high-performance SQL/NoSQL schemas and query optimization.</p>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="p-6 bg-background-secondary border border-border-color rounded hover:border-accent-primary transition-colors group"
                            >
                                <Layout className="text-accent-secondary mb-4 group-hover:text-glow" size={32} />
                                <h4 className="text-text-primary font-bold font-mono mb-2">Scalable Arch</h4>
                                <p className="text-text-secondary text-sm">Designing modular monoliths and event-driven microservices.</p>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="p-6 bg-background-secondary border border-border-color rounded hover:border-accent-primary transition-colors group"
                            >
                                <ShieldCheck className="text-accent-secondary mb-4 group-hover:text-glow" size={32} />
                                <h4 className="text-text-primary font-bold font-mono mb-2">Security First</h4>
                                <p className="text-text-secondary text-sm">Implementing standard-compliant auth and data protection protocols.</p>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="p-6 bg-background-secondary border border-border-color rounded hover:border-accent-primary transition-colors group"
                            >
                                <GitBranch className="text-accent-secondary mb-4 group-hover:text-glow" size={32} />
                                <h4 className="text-text-primary font-bold font-mono mb-2">DevOps Ops</h4>
                                <p className="text-text-secondary text-sm">CI/CD pipelines, Docker containerization, and Azure cloud deployment.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
