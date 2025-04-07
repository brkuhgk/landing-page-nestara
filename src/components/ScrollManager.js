import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component handles scrolling to sections based on the URL hash
const ScrollManager = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    // If there's a hash, scroll to the element with the corresponding ID
    if (hash) {
      // Remove the # from the hash
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // Wait a bit for the page to render before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (pathname === '/') {
      // If we're on the home page with no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null; // This component doesn't render anything
};

export default ScrollManager;