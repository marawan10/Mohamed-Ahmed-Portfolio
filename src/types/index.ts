export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    link?: string;
    github?: string;
    image?: string;
    featured?: boolean;
}

export interface Experience {
    id: string;
    company: string;
    role: string;
    period: string;
    description: string;
    achievements: string[];
    skills: string[];
}

export interface Skill {
    name: string;
    level: number; // 0-100 or 1-5
    category: 'frontend' | 'backend' | 'devops' | 'tools' | 'other';
    icon?: string;
}

export interface NavItem {
    label: string;
    path: string;
}
