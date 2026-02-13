import React from 'react';
import { cn } from '../../utils/cn';

interface LogoProps {
    className?: string;
    variant?: 'default' | 'footer';
}

export const Logo: React.FC<LogoProps> = ({ className, variant = 'default' }) => {
    return (
        <div className={cn("flex items-center gap-3 select-none group cursor-pointer", className)}>
            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-surface border border-white/10 shadow-xl overflow-hidden group-hover:border-primary/50 transition-colors duration-300">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Animated Brackets Code Concept */}
                <div className="relative z-10 flex items-center gap-0.5 font-mono font-bold text-xl tracking-tighter">
                    <span className="text-primary group-hover:-translate-x-1 transition-transform duration-300">{'{'}</span>
                    <div className="relative">
                        <span className="text-text-primary group-hover:text-white transition-colors">M</span>
                        <span className="text-text-secondary group-hover:text-white transition-colors">A</span>
                        {/* Underline decoration */}
                        <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </div>
                    <span className="text-primary group-hover:translate-x-1 transition-transform duration-300">{'}'}</span>
                </div>
            </div>

            {variant === 'default' && (
                <div className="flex flex-col">
                    <span className="text-lg font-bold text-text-primary leading-none tracking-tight group-hover:text-primary transition-colors">
                        Mohammed Ahmed
                    </span>
                </div>
            )}
        </div>
    );
};
