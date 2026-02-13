import type { Experience } from '../types';

export const EXPERIENCES: Experience[] = [
    {
        id: 'thought-craft',
        company: 'Thought Craft',
        role: 'Backend Developer',
        period: 'Aug 2025 – Present',
        description: 'Developing enterprise backend systems within a modular monolithic architecture, focusing on performance, clean code, and learning system design patterns.',
        achievements: [
            'Optimized "Submit to GM" API overhead from 90s to <1s by assisting in parallel processing implementation.',
            'Implemented background jobs for heavy I/O operations (e.g., Email with Attachments) to improve responsiveness.',
            'Developed complex logic for high-value modules ensuring accuracy and reliability.',
            'Consistently delivered tasks ahead of schedule, demonstrating high productivity.',
            'Created reusable components to support the team and reduce code duplication.'
        ],
        skills: ['ASP.NET Core 10', 'EF Core', 'SQL Server', 'Azure', 'Docker', 'Background Jobs']
    },
    {
        id: 'freelance',
        company: 'Freelance',
        role: 'Backend Developer',
        period: '2024 – 2025',
        description: 'Delivered backend solutions for various clients, managing the full development lifecycle from requirements to deployment.',
        achievements: [
            'Designed and deployed RESTful APIs for local businesses using .NET.',
            'Integrated third-party payment gateways and authentication systems.',
            'Managed database schema design and migrations for client projects.',
            'Collaborated directly with clients to gather requirements and provide technical updates.'
        ],
        skills: ['.NET', 'Web API', 'SQL Server', 'Git', 'Problem Solving']
    }
];
