import React from 'react';
import { User, BookOpen, Terminal } from 'lucide-react';

export const AboutPage: React.FC = () => {
    return (
        <div className="min-h-screen pt-20 pb-12 container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12 border-b border-border-color pb-4">
                    <div className="flex items-center gap-2 text-accent-primary mb-2">
                        <User size={20} />
                        <h1 className="text-xl md:text-2xl font-mono font-bold">/whois/current_user</h1>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Sidebar / Stats */}
                    <div className="md:col-span-1 space-y-6">
                        <div className="bg-background-secondary border border-border-color rounded p-6">
                            <div className="w-24 h-24 bg-terminal-bg rounded-full mx-auto mb-4 border-2 border-accent-primary flex items-center justify-center">
                                <Terminal size={40} className="text-accent-primary" />
                            </div>
                            <h2 className="text-center font-bold text-text-primary text-lg">Backend Dev</h2>
                            <p className="text-center text-text-secondary text-sm mb-4">Aspiring Architect</p>

                            <div className="space-y-2 text-sm font-mono border-t border-border-color pt-4">
                                <div className="flex justify-between">
                                    <span className="text-text-secondary">Exp:</span>
                                    <span className="text-text-primary">2+ Years</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-text-secondary">Level:</span>
                                    <span className="text-accent-primary">Mid-Level</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-text-secondary">Focus:</span>
                                    <span className="text-text-primary">.NET/Cloud</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-8">
                        <section>
                            <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                                <Terminal className="text-accent-secondary" size={20} />
                                <span className="text-accent-secondary">Background Process</span>
                            </h3>
                            <div className="bg-background-secondary border border-border-color rounded p-6 font-mono text-sm leading-relaxed text-text-secondary">
                                <p className="mb-4">
                                    Started my journey with a passion for how systems work behind the scenes.
                                    Over the last 2 years, I've evolved from building simple APIs to contributing to enterprise-scale systems.
                                </p>
                                <p>
                                    My experience includes a mix of corporate structure and freelance agility.
                                    I'm currently focused on mastering <strong>System Architecture</strong> and <strong>Clean Code</strong> principles,
                                    aiming to design systems that are not just functional, but maintainable and scalable.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                                <BookOpen className="text-accent-primary" size={20} />
                                <span className="text-accent-primary">Learning Queue</span>
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-terminal-bg border border-border-color rounded p-4 border-l-4 border-l-yellow-500">
                                    <h4 className="font-bold text-text-primary mb-1">System Architecture</h4>
                                    <p className="text-xs text-text-secondary">Deep diving into Microservices patterns and Event-Driven Design.</p>
                                </div>
                                <div className="bg-terminal-bg border border-border-color rounded p-4 border-l-4 border-l-blue-500">
                                    <h4 className="font-bold text-text-primary mb-1">Advanced Cloud</h4>
                                    <p className="text-xs text-text-secondary">Mastering Azure managed services and container orchestration.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};
