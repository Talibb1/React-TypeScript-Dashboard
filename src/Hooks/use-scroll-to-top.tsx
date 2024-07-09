import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = (): null => {
  const { pathname } = useLocation();

  const saveScrollPosition = useCallback((): void => {
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
  }, []);

  useEffect(() => {
    const previousPosition = sessionStorage.getItem('scrollPosition');
    if (previousPosition !== null) {
      window.scrollTo(0, parseInt(previousPosition, 10));
    }

    window.history.scrollRestoration = 'manual';

    window.addEventListener('beforeunload', saveScrollPosition);

    return () => {
      saveScrollPosition();
      window.removeEventListener('beforeunload', saveScrollPosition);
    };
  }, [pathname, saveScrollPosition]);

  return null;
};


// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// export function useScrollToTop(): void {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     // Save the current scroll position
//     const currentPosition = window.scrollY;
//     // Set scroll restoration to manual
//     window.history.scrollRestoration = 'manual';

//     // Restore the previous scroll position when navigating back
//     return () => {
//       setTimeout(() => {
//         window.scrollTo(0, currentPosition);
//       }, 0);
//     };
//   }, [pathname]);
// }
