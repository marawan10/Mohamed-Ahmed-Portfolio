import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
        const variants = {
            primary: 'bg-primary text-background hover:bg-primary/90 shadow-[0_0_10px_rgba(0,255,159,0.5)]',
            secondary: 'bg-secondary text-background hover:bg-secondary/90 shadow-[0_0_10px_rgba(0,212,255,0.5)]',
            outline: 'border border-primary text-primary hover:bg-primary/10',
            ghost: 'text-text-primary hover:bg-white/5',
        };

        const sizes = {
            sm: 'h-8 px-3 text-sm',
            md: 'h-10 px-4 py-2',
            lg: 'h-12 px-6 text-lg',
        };

        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-sm font-mono font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 active:scale-95',
                    variants[variant],
                    sizes[size],
                    className
                )}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading && (
                    <span className="mr-2 h-4 w-4 animate-spin border-2 border-current border-t-transparent rounded-full" />
                )}
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';
