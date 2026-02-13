import React from 'react';
import { AnimatedSection } from '../animations/AnimatedSection';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Mail, MapPin, Phone } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../data/constants';

export const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
                <AnimatedSection>
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                        <span className="text-primary">05.</span> Contact Me
                    </h2>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 gap-12">
                    <AnimatedSection delay={2}>
                        <p className="text-lg text-text-secondary mb-8">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
                        </p>

                        <div className="space-y-6">
                            <a href={SOCIAL_LINKS.email} className="flex items-center gap-4 text-text-secondary hover:text-primary transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-text-muted">Email</div>
                                    <div className="font-mono">{SOCIAL_LINKS.email.replace('mailto:', '')}</div>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 text-text-secondary">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-text-muted">Location</div>
                                    <div className="font-mono">{PERSONAL_INFO.location}</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-text-secondary">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-text-muted">Phone</div>
                                    <div className="font-mono">+20 106 898 5616</div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={4}>
                        <Card className="p-0 overflow-hidden border-white/10">
                            <div className="bg-surface border-b border-white/10 px-4 py-2 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                <div className="ml-2 text-xs text-text-muted font-mono">contact-form.sh</div>
                            </div>
                            <form className="p-6 space-y-4" action={SOCIAL_LINKS.email} method="POST">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-mono text-primary">
                                        <span className="opacity-50">$</span> enter_name:
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-background/50 border border-white/10 rounded px-4 py-2 text-text-primary focus:outline-none focus:border-primary transition-colors font-mono"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-mono text-primary">
                                        <span className="opacity-50">$</span> enter_email:
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-background/50 border border-white/10 rounded px-4 py-2 text-text-primary focus:outline-none focus:border-primary transition-colors font-mono"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-mono text-primary">
                                        <span className="opacity-50">$</span> enter_message:
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full bg-background/50 border border-white/10 rounded px-4 py-2 text-text-primary focus:outline-none focus:border-primary transition-colors font-mono resize-none"
                                        placeholder="Hello World..."
                                    />
                                </div>
                                <Button className="w-full" type="submit">
                                    Send Message
                                </Button>
                            </form>
                        </Card>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};
