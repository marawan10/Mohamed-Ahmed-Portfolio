import React from 'react';
import { AnimatedSection } from '../animations/AnimatedSection';
import { ServerStatus } from '../ui/ServerStatus';
import { PERSONAL_INFO } from '../../data/constants';

export const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-4">
                <AnimatedSection>
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                        <span className="text-primary">01.</span> About Me
                    </h2>
                </AnimatedSection>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <AnimatedSection delay={2}>
                        <div className="prose prose-invert max-w-none text-text-secondary space-y-6">
                            <p className="text-lg text-text-primary leading-relaxed">
                                I'm a <span className="text-primary font-bold">Backend Software Engineer</span> based in {PERSONAL_INFO.location}, specializing in building scalable systems with ASP.NET Core and SQL Server.
                            </p>
                            <p className="leading-relaxed">
                                Currently working at <span className="text-white font-medium">Thought Craft</span>, I focus on optimizing critical code paths and designing modular architectures. I thrive on solving complex performance bottlenecks—recently achieving an 85% improvement in execution time for a critical system component.
                            </p>
                            <p className="leading-relaxed">
                                My approach combines solid engineering principles like SOLID and Clean Architecture with a pragmatic mindset to deliver reliable solutions that solve real business problems. I don't just write code; I engineer systems that last.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={4} className="w-full">
                        <ServerStatus />
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};
