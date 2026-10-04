import { useEffect, useRef, useState } from 'react';
import styles from './CustomCursor.module.css';

/**
 * High-performance custom cursor utilizing direct DOM manipulation via requestAnimationFrame.
 * Does NOT cause React re-renders on mousemove.
 * Automatically disabled on touch screens and coarse pointer devices.
 */
export default function CustomCursor() {
  const [isEnabled] = useState(() => {
    if (typeof window === 'undefined') return false;
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const isTouch = 'ontouchstart' in window || (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0);
    return hasFinePointer && !isTouch;
  });

  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!isEnabled) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isVisible = false;
    let rafId = null;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }
    };

    const onMouseDown = () => {
      if (ringRef.current) ringRef.current.classList.add(styles.ringClick);
    };

    const onMouseUp = () => {
      if (ringRef.current) ringRef.current.classList.remove(styles.ringClick);
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (!target || !(target instanceof Element)) return;

      const isInteractive = Boolean(
        target.closest('a, button, input, select, textarea, [role="button"], [role="tab"], .interactive')
      );
      const isImg = Boolean(target.closest('img, [data-cursor="view"], .cursor-view'));

      if (isImg) {
        if (ringRef.current) {
          ringRef.current.classList.add(styles.ringImage);
          ringRef.current.classList.remove(styles.ringHover);
        }
        if (textRef.current) textRef.current.textContent = 'EXPLORE';
      } else if (isInteractive) {
        if (ringRef.current) {
          ringRef.current.classList.add(styles.ringHover);
          ringRef.current.classList.remove(styles.ringImage);
        }
        if (textRef.current) textRef.current.textContent = '';
      } else {
        if (ringRef.current) {
          ringRef.current.classList.remove(styles.ringHover, styles.ringImage);
        }
        if (textRef.current) textRef.current.textContent = '';
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    // Smooth RAF animation loop for smooth trailing ring
    const render = () => {
      const ease = 0.18;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <div className={styles.cursorContainer} aria-hidden="true">
      {/* Primary pinpoint dot */}
      <div ref={dotRef} className={styles.cursorDot} />
      {/* Smooth trailing outer ring */}
      <div ref={ringRef} className={styles.cursorRing}>
        <span ref={textRef} className={styles.cursorText} />
      </div>
    </div>
  );
}
