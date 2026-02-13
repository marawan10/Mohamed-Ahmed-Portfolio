import { motion } from 'framer-motion';
import { Terminal, Calendar, ChevronRight } from 'lucide-react';
import { EXPERIENCES } from '../data/experience';

export const ExperiencePage: React.FC = () => {
    return (
        <div className="min-h-screen pt-20 pb-12 container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12 border-b border-border-color pb-4">
                    <div className="flex items-center gap-2 text-accent-primary mb-2">
                        <Terminal size={20} />
                        <h1 className="text-xl md:text-2xl font-mono font-bold">/var/log/career_history</h1>
                    </div>
                    <p className="text-text-secondary font-mono text-sm">
                        // Tracking professional execution contexts and system contributions
                    </p>
                </header>

                <div className="space-y-8 relative before:absolute before:left-2 md:before:left-4 before:top-0 before:bottom-0 before:w-px before:bg-border-color">
                    {EXPERIENCES.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Node */}
                            <div className="absolute left-0 md:left-2 top-0 w-4 h-4 rounded-full bg-terminal-bg border-2 border-accent-primary transform -translate-x-1.5 md:-translate-x-1.5"></div>

                            <div className="bg-background-secondary border border-border-color rounded p-6 hover:border-accent-primary transition-colors group">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <h2 className="text-xl font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                                        {exp.role} <span className="text-text-secondary">@ {exp.company}</span>
                                    </h2>
                                    <div className="flex items-center gap-2 text-xs font-mono text-text-secondary bg-terminal-bg px-2 py-1 rounded">
                                        <Calendar size={12} />
                                        <span>{exp.period}</span>
                                    </div>
                                </div>

                                <p className="text-text-secondary mb-6 font-mono text-sm leading-relaxed border-l-2 border-accent-secondary/30 pl-4">
                                    {exp.description}
                                </p>

                                <div className="space-y-3 mb-6">
                                    <h3 className="text-xs font-bold text-accent-secondary uppercase tracking-wider mb-2">Execution Logs:</h3>
                                    {exp.achievements.map((achievement, i) => (
                                        <div key={i} className="flex items-start gap-2 text-sm text-text-primary/90">
                                            <span className="text-accent-primary mt-1">
                                                <ChevronRight size={14} />
                                            </span>
                                            <span>{achievement}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2 pt-4 border-t border-border-color">
                                    {exp.skills.map(skill => (
                                        <span
                                            key={skill}
                                            className="px-2 py-1 text-xs font-mono rounded bg-accent-primary/10 text-accent-primary border border-accent-primary/20"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
