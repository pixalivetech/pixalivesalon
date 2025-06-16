// components/ScrollToTopOnRouteChange.jsx
import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // This ensures the scroll resets before the browser paints
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTopOnRouteChange;
