import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './Testimonials.module.css';
import { testimonialsData } from '../../data/testimonials';
import Reveal from '../common/Reveal';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayRef = useRef(null);
  const touchStartRef = useRef(null);
  const total = testimonialsData.length;

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay with pause on hover
  useEffect(() => {
    autoPlayRef.current = setInterval(next, 5000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [next]);

  const handleMouseEnter = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const handleMouseLeave = () => {
    autoPlayRef.current = setInterval(next, 5000);
  };

  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartRef.current === null) return;
    const diff = touchStartRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        next();
      } else {
        prev();
      }
    }
    touchStartRef.current = null;
  };

  const current = testimonialsData[activeIndex];

  return (
    <section id="testimonials" className={styles.testimonialsSection} aria-labelledby="testimonials-heading">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <Reveal variant="fade-up" delay={0.1}>
            <span className={styles.eyebrow}>Parent Voices</span>
            <h2 id="testimonials-heading" className={styles.heading}>
              Trusted by Families <span className={styles.highlight}>Across Generations</span>
            </h2>
            <p className={styles.subheading}>
              Hear from parents on how life and learning at Tulas International School nurtured confidence, independence,
              and academic excellence in their children.
            </p>
          </Reveal>
        </div>

        {/* Carousel Showcase Card */}
        <div
          className={styles.carouselContainer}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          aria-live="polite"
        >
          <Reveal variant="scale" delay={0.2}>
            <div className={styles.cardWrapper}>
              <div className={styles.quoteMark} aria-hidden="true">&ldquo;</div>

              <div className={styles.cardHeader}>
                <div className={styles.starRating} aria-label={`${current.rating} out of 5 stars`}>
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <span key={i} className={styles.star} aria-hidden="true">★</span>
                  ))}
                </div>
                <span className={styles.badgeVerified}>{current.source}</span>
              </div>

              <blockquote className={styles.quoteText}>
                &ldquo;{current.text}&rdquo;
              </blockquote>

              <div className={styles.authorFooter}>
                <div className={styles.avatarCircle} aria-hidden="true">
                  {current.avatar}
                </div>
                <div className={styles.authorMeta}>
                  <strong className={styles.authorName}>{current.name}</strong>
                  <span className={styles.authorRelation}>{current.relation}</span>
                </div>
                <div className={styles.highlightPill}>
                  <span>{current.highlight}</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Navigation Controls */}
          <div className={styles.controlRow}>
            <button
              type="button"
              className={styles.navArrow}
              onClick={prev}
              aria-label="Previous parent testimonial"
            >
              ←
            </button>

            <div className={styles.dotsGroup} role="tablist" aria-label="Testimonials slider navigation">
              {testimonialsData.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={idx === activeIndex}
                  aria-label={`Testimonial ${idx + 1}`}
                  className={`${styles.dot} ${idx === activeIndex ? styles.dotActive : ''}`}
                  onClick={() => setActiveIndex(idx)}
                />
              ))}
            </div>

            <button
              type="button"
              className={styles.navArrow}
              onClick={next}
              aria-label="Next parent testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
