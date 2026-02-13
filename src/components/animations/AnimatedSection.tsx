import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '../../utils/cn';

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
    children,
    className,
    delay = 0,
    ...props
}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref} className={cn('w-full', className)} {...props}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: delay * 0.1, ease: 'easeOut' }}
            >
                {children}
            </motion.div>
        </div>
    );
};
