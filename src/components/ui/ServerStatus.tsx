import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Server, Shield, Database } from 'lucide-react';
import { cn } from '../../utils/cn';

interface SystemMetricProps {
    label: string;
    value: string;
    description: string;
    icon: React.FC<any>;
    color: string;
    delay: number;
}

const SystemMetric: React.FC<SystemMetricProps> = ({ label, value, description, icon: Icon, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: delay * 0.1, duration: 0.5 }}
        className="relative group"
    >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
        <div className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
            <div className={cn("p-3 rounded-lg bg-black/40 border border-white/5", color)}>
                <Icon size={20} />
            </div>
            <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                    <h3 className="font-mono font-bold text-sm text-gray-200">{label}</h3>
                    <span className={cn("font-mono text-xs px-2 py-0.5 rounded bg-black/40", color)}>
                        {value}
                    </span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                    {description}
                </p>
                {/* Simulated Progress Bar */}
                <div className="mt-3 h-1 w-full bg-black/40 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1.5, delay: delay * 0.2, ease: "circOut" }}
                        className={cn("h-full opacity-50", color.replace('text-', 'bg-'))}
                    />
                </div>
            </div>
        </div>
    </motion.div>
);

export const ServerStatus: React.FC = () => {
    return (
        <div className="relative p-6 rounded-2xl border border-white/10 bg-[#0c0c0e] shadow-2xl overflow-hidden">
            {/* Header / Top Bar of the 'Terminal' */}
            <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 font-mono text-xs text-text-muted">system_monitor.exe</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono animate-pulse">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    SYSTEM ONLINE
                </div>
            </div>

            <div className="space-y-4">
                <SystemMetric
                    label="ARCHITECTURE"
                    value="MODULAR"
                    description="Designing scalable monolithic & microservices systems."
                    icon={Server}
                    color="text-blue-400"
                    delay={1}
                />
                <SystemMetric
                    label="PERFORMANCE"
                    value="OPTIMIZED"
                    description="Query tuning, caching strategies, and load balancing."
                    icon={Activity}
                    color="text-green-400"
                    delay={2}
                />
                <SystemMetric
                    label="DATABASE"
                    value="NORMALIZED"
                    description="Complex SQL schema design and EF Core management."
                    icon={Database}
                    color="text-yellow-400"
                    delay={3}
                />
                <SystemMetric
                    label="SECURITY"
                    value="ENCRYPTED"
                    description="JWT Auth, Role-based access, and secure data handling."
                    icon={Shield}
                    color="text-purple-400"
                    delay={4}
                />
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
        </div>
    );
};
