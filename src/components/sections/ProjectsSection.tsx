import React from 'react';
import { AnimatedSection } from '../animations/AnimatedSection';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { PROJECTS } from '../../data/projects';
import { Github, ExternalLink } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
    return (
        <section id="projects" className="py-20 bg-surface/30">
            <div className="container mx-auto px-4">
                <AnimatedSection>
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                        <span className="text-primary">04.</span> Featured Projects
                    </h2>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <AnimatedSection key={project.id} delay={index * 2}>
                            <Card className="h-full flex flex-col group hover:-translate-y-2 transition-transform duration-300">
                                <div className="relative h-48 mb-6 overflow-hidden rounded-md border border-white/10">
                                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                <div className="flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-text-secondary mb-6 text-sm leading-relaxed flex-1">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 pt-4 border-t border-white/10">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <Button size="sm" variant="ghost" className="px-0 hover:bg-transparent hover:text-primary">
                                                <Github size={18} className="mr-2" /> Code
                                            </Button>
                                        </a>
                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                <Button size="sm" variant="ghost" className="px-0 hover:bg-transparent hover:text-primary">
                                                    <ExternalLink size={18} className="mr-2" /> Demo
                                                </Button>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};
