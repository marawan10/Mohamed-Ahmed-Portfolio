import React, { useState, useEffect } from 'react';
import { Menu, X, Activity, Server, Wifi, Download } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { cn } from '../../utils/cn';
import { NAV_ITEMS } from '../../data/constants';
import { ThemeToggle } from './ThemeToggle';

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={cn(
            'fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-mono text-sm',
            scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border-color py-2 shadow-lg' : 'bg-transparent py-4'
        )}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link to="/" className="group flex items-center gap-3">
                        <img src="/logo.svg" alt="MA Logo" className="w-8 h-8 group-hover:drop-shadow-[0_0_8px_rgba(0,255,65,0.5)] transition-all" />
                        <span className="font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                            Mohamed Ahmed
                        </span>
                    </Link>

                    {/* System Status Indicators (Desktop) */}
                    <div className="hidden lg:flex items-center gap-4 text-xs text-text-secondary border-l border-border-color pl-6">
                        <div className="flex items-center gap-2">
                            <Server size={12} />
                            <span>UPTIME: 99.9%</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Activity size={12} />
                            <span>CPU: NORMAL</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Wifi size={12} />
                            <span>NET: SECURE</span>
                        </div>
                    </div>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <nav className="flex items-center gap-1">
                        {NAV_ITEMS.map((item) => (
                            <NavLink
                                key={item.label}
                                to={item.path}
                                className={({ isActive }) => cn(
                                    "px-4 py-2 rounded transition-all hover:bg-accent-primary/10 hover:text-accent-primary relative group",
                                    isActive ? "text-accent-primary font-bold bg-accent-primary/5" : "text-text-secondary"
                                )}
                            >
                                {({ isActive }) => (
                                    <>
                                        <span className="opacity-0 group-hover:opacity-100 absolute left-2 transition-opacity">&gt;</span>
                                        <span className="group-hover:translate-x-2 transition-transform inline-block">
                                            {isActive ? `[${item.label}]` : item.label}
                                        </span>
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </nav>
                    <div className="h-4 w-px bg-border-color mx-2" />
                    <a
                        href="/cv.pdf"
                        download="Mohammed_Ahmed_Backend_CV.pdf"
                        className="flex items-center gap-2 px-4 py-2 rounded bg-accent-primary/10 text-accent-primary hover:bg-accent-primary/20 transition-colors font-bold"
                    >
                        <span>CV</span>
                        <Download size={16} />
                    </a>
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center gap-4">
                    <ThemeToggle />
                    <button
                        className="text-text-primary hover:text-accent-primary transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 bg-background border-b border-border-color p-4 md:hidden flex flex-col gap-2 shadow-xl animate-in fade-in slide-in-from-top-5">
                        {NAV_ITEMS.map((item) => (
                            <NavLink
                                key={item.label}
                                to={item.path}
                                className={({ isActive }) => cn(
                                    "py-3 px-4 rounded transition-colors border-l-2 font-mono flex items-center",
                                    isActive
                                        ? "bg-accent-primary/10 border-accent-primary text-accent-primary font-bold"
                                        : "border-transparent text-text-secondary hover:bg-background-secondary hover:text-accent-primary"
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                {({ isActive }) => (
                                    <>
                                        {isActive && <span className="mr-2">&gt;</span>}
                                        {item.label}
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
};
