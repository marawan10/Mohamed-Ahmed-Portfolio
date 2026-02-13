import React from 'react';
import { AnimatedSection } from '../animations/AnimatedSection';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { EXPERIENCES } from '../../data/experience';
import { Calendar } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-4">
                <AnimatedSection>
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                        <span className="text-primary">03.</span> Experience
                    </h2>
                </AnimatedSection>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                    {EXPERIENCES.map((exp, index) => (
                        <AnimatedSection key={exp.id} delay={index * 2}>
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                                {/* Icon/Dot */}
                                <div className="absolute left-0 w-10 h-10 rounded-full border border-white/10 bg-surface flex items-center justify-center md:left-[8.75rem] md:-translate-x-1/2 z-10">
                                    <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
                                </div>

                                <div className="pl-14 md:pl-44 w-full">
                                    <Card className="hover:border-secondary/30 transition-all group-hover:bg-white/5">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                                    {exp.role} <span className="text-primary">@ {exp.company}</span>
                                                </h3>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-text-muted font-mono bg-white/5 px-3 py-1 rounded-full w-fit">
                                                <Calendar size={14} />
                                                {exp.period}
                                            </div>
                                        </div>

                                        <p className="text-text-secondary mb-6 leading-relaxed">
                                            {exp.description}
                                        </p>

                                        <div className="space-y-2 mb-6">
                                            {exp.achievements.map((item, i) => (
                                                <div key={i} className="flex items-start gap-2 text-sm text-text-muted">
                                                    <span className="text-primary mt-1">▹</span>
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                            {exp.skills.map(skill => (
                                                <Badge key={skill} variant="outline" className="text-xs">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};
