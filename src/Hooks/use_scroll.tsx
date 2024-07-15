// In your scroll-to-top hook (use-scroll-to-top.ts)
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToTop(): null {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    sessionStorage.setItem('scrollPosition', JSON.stringify({ x: 0, y: 0 }));
  }, [pathname]);

  return null;
}
