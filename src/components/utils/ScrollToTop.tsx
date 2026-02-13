import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Automatically scrolls to top of page on route change.
 * Replacement for react-router-dom's ScrollRestoration which requires data routers.
 */
export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};
