import React from 'react';
import { AnimatedSection } from '../animations/AnimatedSection';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { SKILLS } from '../../data/skills';

export const SkillsSection: React.FC = () => {
    return (
        <section id="skills" className="py-20 bg-surface/30">
            <div className="container mx-auto px-4">
                <AnimatedSection>
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                        <span className="text-primary">02.</span> Technical Arsenal
                    </h2>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SKILLS.map((skillGroup, index) => (
                        <AnimatedSection key={skillGroup.category} delay={index * 2} className="h-full">
                            <Card variant="terminal" className="h-full hover:border-primary/30 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-6 font-mono border-b border-white/10 pb-2">
                                    {skillGroup.category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((skill) => (
                                        <Badge key={skill} variant="secondary">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </Card>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};
