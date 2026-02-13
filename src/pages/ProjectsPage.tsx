import { motion } from 'framer-motion';
import { FolderGit2, Server, Radio } from 'lucide-react';
import { PROJECTS } from '../data/projects';

export const ProjectsPage: React.FC = () => {
    return (
        <div className="min-h-screen pt-20 pb-12 container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                <header className="mb-12 border-b border-border-color pb-4 flex justify-between items-end">
                    <div>
                        <div className="flex items-center gap-2 text-accent-primary mb-2">
                            <FolderGit2 size={24} />
                            <h1 className="text-xl md:text-3xl font-mono font-bold">./deployed_modules</h1>
                        </div>
                        <p className="text-text-secondary font-mono text-sm max-w-xl">
                            // Portfolio of production-grade systems and experimental architectures
                        </p>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-background-secondary border border-border-color rounded-lg overflow-hidden hover:border-accent-primary group transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Project Header / Image Area equivalent */}
                            <div className="relative h-48 bg-terminal-bg border-b border-border-color flex items-center justify-center overflow-hidden">
                                {project.image ? (
                                    <>
                                        <div className="absolute inset-0 bg-accent-primary/5 group-hover:bg-accent-primary/10 transition-colors z-10"></div>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity grayscale group-hover:grayscale-0"
                                        />
                                    </>
                                ) : (
                                    <Server size={48} className="text-text-secondary opacity-20" />
                                )}

                                <div className="absolute top-2 right-2 z-20 flex gap-2">
                                    {project.featured && (
                                        <span className="bg-accent-primary text-background text-[10px] font-bold px-2 py-1 rounded uppercase flex items-center gap-1">
                                            <Radio size={10} className="animate-pulse" /> Live
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-text-primary font-mono group-hover:text-accent-primary transition-colors">
                                        {project.title}
                                    </h3>
                                </div>

                                <div className="text-text-secondary text-sm mb-6 font-mono flex-grow whitespace-pre-line">
                                    {project.description}
                                </div>

                                <div className="space-y-4 mt-auto">
                                    <p className="text-xs font-bold text-text-primary uppercase tracking-wider">Tech Stack:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="text-xs px-2 py-1 bg-terminal-bg border border-border-color rounded text-text-secondary font-mono"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
