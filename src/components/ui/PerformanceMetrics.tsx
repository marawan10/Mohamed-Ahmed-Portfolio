import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Zap } from 'lucide-react';

interface Metric {
    label: string;
    score: number;
    max: number;
    description?: string;
}

const metrics: Metric[] = [
    { label: 'Problem Solving', score: 5, max: 5, description: 'Implemented complex library logic & optimisations.' },
    { label: 'Creativity & Innovation', score: 5, max: 5, description: 'Out-of-box solutions (e.g., Background Jobs).' },
    { label: 'Productivity', score: 5, max: 5, description: 'Tasks delivered well ahead of expected time.' },
    { label: 'Independent Work', score: 5, max: 5, description: 'Proven autonomy in delivering modules.' },
    { label: 'Quality of Work', score: 4, max: 5, description: 'High reliability execution.' },
    { label: 'Takes Initiative', score: 4, max: 5, description: 'Proactive problem identification.' },
];

const PerformanceMetrics: React.FC = () => {
    return (
        <div className="bg-background-secondary border border-border-color rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <Trophy className="text-yellow-500" />
                    <h2 className="text-xl font-bold text-text-primary font-mono">Performance Review 2025</h2>
                </div>
                <div className="px-3 py-1 bg-green-500/20 text-green-500 text-xs font-mono rounded-full border border-green-500/30">
                    RATING: OUTSTANDING
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {metrics.map((metric, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                    >
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-text-secondary font-mono text-sm">{metric.label}</span>
                            <span className="text-accent-primary font-mono font-bold">
                                {metric.score}/{metric.max}
                            </span>
                        </div>
                        <div className="dark h-2 bg-terminal-bg rounded-full overflow-hidden border border-border-color">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${(metric.score / metric.max) * 100}%` }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className={`h-full ${metric.score === 5 ? 'bg-accent-primary shadow-[0_0_10px_var(--accent-primary)]' : 'bg-accent-secondary'}`}
                            />
                        </div>
                        {metric.description && (
                            <p className="text-xs text-text-secondary mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {'>'} {metric.description}
                            </p>
                        )}
                    </motion.div>
                ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border-color grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="dark bg-terminal-bg p-4 rounded border border-border-color">
                    <div className="flex items-start gap-3">
                        <TrendingUp className="text-accent-primary shrink-0 mt-1" size={18} />
                        <div>
                            <h4 className="text-text-primary font-bold text-sm mb-1">Impact Highlight</h4>
                            <p className="text-text-secondary text-xs">
                                "Optimized Submit to GM API overhead from 90s to parallel processing, significantly reducing latency."
                            </p>
                        </div>
                    </div>
                </div>
                <div className="dark bg-terminal-bg p-4 rounded border border-border-color">
                    <div className="flex items-start gap-3">
                        <Zap className="text-yellow-400 shrink-0 mt-1" size={18} />
                        <div>
                            <h4 className="text-text-primary font-bold text-sm mb-1">Innovation</h4>
                            <p className="text-text-secondary text-xs">
                                "Implemented background jobs for email attachments, decoupling heavy IO from user request threads."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerformanceMetrics;
