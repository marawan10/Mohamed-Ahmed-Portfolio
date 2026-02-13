import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/constants';

export const ContactPage: React.FC = () => {
    return (
        <div className="min-h-screen pt-20 pb-12 container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                <header className="mb-12 border-b border-border-color pb-4">
                    <div className="flex items-center gap-2 text-accent-primary mb-2">
                        <Mail size={24} />
                        <h1 className="text-xl md:text-3xl font-mono font-bold">echo "Hello World" &gt; /dev/tcp/me</h1>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="bg-background-secondary border border-border-color rounded p-6">
                            <h2 className="text-xl font-bold text-accent-primary mb-4 font-mono">./contact_info</h2>
                            <div className="space-y-4 font-mono text-sm">
                                <div>
                                    <p className="text-text-secondary mb-1">// Location</p>
                                    <p className="text-text-primary flex items-center gap-2">
                                        <span className="text-accent-secondary">📍</span> {PERSONAL_INFO.location}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-text-secondary mb-1">// Phone</p>
                                    <a href={`tel:${PERSONAL_INFO.phone}`} className="text-text-primary hover:text-accent-primary transition-colors flex items-center gap-2">
                                        <span className="text-accent-secondary">📞</span> {PERSONAL_INFO.phone}
                                    </a>
                                </div>
                                <div>
                                    <p className="text-text-secondary mb-1">// Email</p>
                                    <a href={SOCIAL_LINKS.email} className="text-text-primary hover:text-accent-primary transition-colors flex items-center gap-2">
                                        <span className="text-accent-secondary">✉️</span> {SOCIAL_LINKS.email.replace('mailto:', '')}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-background-secondary border border-border-color rounded p-6">
                            <h2 className="text-xl font-bold text-accent-primary mb-6 font-mono">./social_uplink</h2>
                            <div className="flex gap-6">
                                <a
                                    href={SOCIAL_LINKS.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-terminal-bg border border-border-color rounded hover:border-accent-primary hover:text-accent-primary transition-all hover:scale-110 group"
                                    aria-label="GitHub"
                                >
                                    <Github size={32} />
                                </a>
                                <a
                                    href={SOCIAL_LINKS.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-terminal-bg border border-border-color rounded hover:border-accent-primary hover:text-accent-primary transition-all hover:scale-110 group"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={32} />
                                </a>
                                <a
                                    href={SOCIAL_LINKS.email}
                                    className="p-4 bg-terminal-bg border border-border-color rounded hover:border-accent-primary hover:text-accent-primary transition-all hover:scale-110 group"
                                    aria-label="Email"
                                >
                                    <Mail size={32} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-background-secondary border border-border-color rounded p-8 shadow-lg">
                        <p className="text-text-secondary font-mono mb-6">
                            // Initiate handshake protocol. I'm available for freelance work and interesting backend challenges.
                        </p>

                        <form className="space-y-6">
                            <div>
                                <label className="block text-text-primary text-sm font-bold font-mono mb-2">
                                    var sender_name =
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-terminal-bg border border-border-color rounded px-4 py-3 text-text-primary font-mono focus:border-accent-primary focus:outline-none transition-colors"
                                    placeholder='"John Doe"'
                                />
                            </div>

                            <div>
                                <label className="block text-text-primary text-sm font-bold font-mono mb-2">
                                    var sender_email =
                                </label>
                                <input
                                    type="email"
                                    className="w-full bg-terminal-bg border border-border-color rounded px-4 py-3 text-text-primary font-mono focus:border-accent-primary focus:outline-none transition-colors"
                                    placeholder='"john@example.com"'
                                />
                            </div>

                            <div>
                                <label className="block text-text-primary text-sm font-bold font-mono mb-2">
                                    const message_payload =
                                </label>
                                <textarea
                                    rows={5}
                                    className="w-full bg-terminal-bg border border-border-color rounded px-4 py-3 text-text-primary font-mono focus:border-accent-primary focus:outline-none transition-colors"
                                    placeholder='"Let connects and discuss architecture..."'
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-accent-primary text-background font-bold py-3 rounded font-mono flex items-center justify-center gap-2 hover:bg-opacity-90"
                            >
                                <Send size={18} />
                                <span>EXECUTE_SEND()</span>
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
