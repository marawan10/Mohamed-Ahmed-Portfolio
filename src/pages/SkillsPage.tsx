import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Cloud, Layout } from 'lucide-react';
import { SKILLS } from '../data/skills';

export const SkillsPage: React.FC = () => {
    const getIcon = (category: string) => {
        if (category.includes('Backend')) return <Cpu />;
        if (category.includes('Database')) return <Database />;
        if (category.includes('Cloud') || category.includes('DevOps')) return <Cloud />;
        return <Layout />;
    };

    return (
        <div className="min-h-screen pt-20 pb-12 container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
                <header className="mb-12 border-b border-border-color pb-4">
                    <div className="flex items-center gap-2 text-accent-primary mb-2">
                        <Cpu size={24} />
                        <h1 className="text-xl md:text-3xl font-mono font-bold">./capabilities</h1>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SKILLS.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-background-secondary border border-border-color rounded p-6 hover:border-accent-primary transition-colors group"
                        >
                            <div className="flex items-center gap-3 mb-6 text-accent-primary">
                                {getIcon(skillGroup.category)}
                                <h2 className="text-xl font-bold font-mono group-hover:text-glow">{skillGroup.category}</h2>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map(item => (
                                    <span
                                        key={item}
                                        className="dark px-3 py-1.5 bg-terminal-bg border border-border-color rounded text-sm text-text-primary font-mono hover:text-accent-secondary transition-colors"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
