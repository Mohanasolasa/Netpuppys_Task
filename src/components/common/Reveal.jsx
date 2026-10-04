import { useEffect, useRef, useState } from 'react';
import styles from './Reveal.module.css';

/**
 * Reusable Reveal component powered by IntersectionObserver.
 * Supports fade-up, slide-left, slide-right, scale-up with configurable delay & duration.
 * Automatically respects prefers-reduced-motion.
 */
export default function Reveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.65,
  threshold = 0.15,
  className = '',
  as: Component = 'div',
  ...rest
}) {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return true;
    }
    return false;
  });

  const elementRef = useRef(null);

  useEffect(() => {
    if (isVisible) return;

    const currentEl = elementRef.current;
    if (!currentEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(currentEl);
    return () => observer.disconnect();
  }, [threshold, isVisible]);

  const variantClass = styles[variant] || styles['fade-up'];
  const delaySec = typeof delay === 'number' ? `${delay}s` : delay;
  const durationSec = typeof duration === 'number' ? `${duration}s` : duration;

  return (
    <Component
      ref={elementRef}
      className={`${styles.revealWrapper} ${variantClass} ${isVisible ? styles.visible : ''} ${className}`}
      style={{
        transitionDelay: delaySec,
        transitionDuration: durationSec,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
}
