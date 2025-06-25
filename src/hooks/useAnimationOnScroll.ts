'use client';
import { useEffect } from 'react';

export const useAnimateOnScroll = () =>
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.animate-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
