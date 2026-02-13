import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'terminal';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = 'default', children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'rounded-md border border-white/10 bg-surface/50 backdrop-blur-sm transition-all',
                    variant === 'terminal' && 'border-t-4 border-t-primary/50',
                    className
                )}
                {...props}
            >
                {variant === 'terminal' && (
                    <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5 bg-white/5">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                )}
                <div className="p-6">{children}</div>
            </div>
        );
    }
);

Card.displayName = 'Card';
