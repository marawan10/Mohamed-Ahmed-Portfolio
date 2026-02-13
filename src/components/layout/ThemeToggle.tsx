import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

export const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2 rounded-full hover:bg-slate-200 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle theme"
        >
            <div className="relative w-6 h-6">
                <motion.div
                    initial={false}
                    animate={{
                        scale: theme === 'dark' ? 1 : 0,
                        rotate: theme === 'dark' ? 0 : 180,
                        opacity: theme === 'dark' ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center text-primary"
                >
                    <Moon size={20} />
                </motion.div>
                <motion.div
                    initial={false}
                    animate={{
                        scale: theme === 'light' ? 1 : 0,
                        rotate: theme === 'light' ? 0 : -180,
                        opacity: theme === 'light' ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center text-amber-500"
                >
                    <Sun size={20} />
                </motion.div>
            </div>
        </button>
    );
};
