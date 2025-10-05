import React, { useEffect } from 'react';

const ScrollAnimationProvider = ({ children }) => {
  useEffect(() => {
    // Initialize Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    // Observer for fade animations
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Observer for general animations
    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observer for staggered animations
    const staggerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const staggerItems = entry.target.querySelectorAll('.stagger-item');
          staggerItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate');
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    // Function to observe elements
    const observeElements = () => {
      // Observe fade elements
      const fadeElements = document.querySelectorAll('.observe-fade, .observe-slide-left, .observe-slide-right, .observe-scale');
      fadeElements.forEach(el => fadeObserver.observe(el));

      // Observe animation elements
      const animationElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
      animationElements.forEach(el => animationObserver.observe(el));

      // Observe stagger containers
      const staggerContainers = document.querySelectorAll('.stagger-container');
      staggerContainers.forEach(el => staggerObserver.observe(el));
    };

    // Initial observation
    observeElements();

    // Re-observe when content changes (for dynamic content)
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Scroll progress indicator
    const createScrollIndicator = () => {
      let indicator = document.querySelector('.scroll-indicator');
      if (!indicator) {
        indicator = document.createElement('div');
        indicator.className = 'scroll-indicator';
        document.body.appendChild(indicator);
      }

      const updateScrollProgress = () => {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = scrollPx / winHeightPx;
        indicator.style.transform = `scaleX(${scrolled})`;
      };

      window.addEventListener('scroll', updateScrollProgress, { passive: true });
      updateScrollProgress();

      return () => window.removeEventListener('scroll', updateScrollProgress);
    };

    const removeScrollListener = createScrollIndicator();

    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const targetId = target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Cleanup function
    return () => {
      fadeObserver.disconnect();
      animationObserver.disconnect();
      staggerObserver.disconnect();
      mutationObserver.disconnect();
      removeScrollListener();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return <>{children}</>;
};

export default ScrollAnimationProvider;