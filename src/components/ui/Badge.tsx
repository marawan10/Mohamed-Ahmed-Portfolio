import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'accent';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, variant = 'primary', ...props }, ref) => {
        const variants = {
            primary: 'bg-primary/10 text-primary border-primary/20',
            secondary: 'bg-secondary/10 text-secondary border-secondary/20',
            accent: 'bg-accent/10 text-accent border-accent/20',
            outline: 'border-white/20 text-text-secondary',
        };

        return (
            <span
                ref={ref}
                className={cn(
                    'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 font-mono',
                    variants[variant],
                    className
                )}
                {...props}
            />
        );
    }
);

Badge.displayName = 'Badge';
