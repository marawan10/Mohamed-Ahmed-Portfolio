import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PERSONAL_INFO } from '../../data/constants';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords,
}) => {
    const defaultTitle = `${PERSONAL_INFO.name} | ${PERSONAL_INFO.role}`;
    const defaultDescription = `${PERSONAL_INFO.role} specializing in ASP.NET Core, building scalable, high-performance systems with clean architecture.`;
    const defaultKeywords = "Backend Developer, ASP.NET Core, C#, Software Engineer, Cairo, Egypt, .NET Developer, SQL Server";

    return (
        <Helmet>
            <title>{title ? `${title} | ${PERSONAL_INFO.name}` : defaultTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title || defaultTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            {/* Add more meta tags as needed */}
        </Helmet>
    );
};
