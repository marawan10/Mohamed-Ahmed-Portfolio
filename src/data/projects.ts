import type { Project } from '../types';

export const PROJECTS: Project[] = [
    {
        id: 'it-dept-system',
        title: 'IT Dept Management System',
        description: 'A comprehensive management system for university IT departments. \n\nKey Features:\n- Real-time updates using SignalR\n- Offline support and synchronization\n- Streamlined student enrollment workflows\n- Resource allocation tracking\n\nTechnical Challenges:\n- Implementing robust offline-first data sync\n- Managining concurrent user sessions',
        tags: ['ASP.NET Core', 'SignalR', 'SQL Server', 'React'],
        github: '', // Private / Demo only
        featured: true,
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 'gym-platform',
        title: 'Online Gym Platform',
        description: 'Full-featured backend for a virtual fitness platform.\n\nKey Features:\n- Secure video streaming integration (Vimeo)\n- Subscription management via PayPal\n- Role-based access control (JWT)\n- Course progress tracking\n\nTechnical Challenges:\n- Securing video content from unauthorized downloads\n- Handling webhook events from payment providers reliably',
        tags: ['ASP.NET Core', 'PayPal API', 'Vimeo API', 'JWT'],
        github: '', // Private / Demo only
        featured: true,
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop'
    }
];
