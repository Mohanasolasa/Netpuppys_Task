import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import Reveal from '../common/Reveal';

export default function Hero() {
  const containerRef = useRef(null);

  // Subtle interactive parallax tilt on the hero image container (RAF throttled)
  useEffect(() => {
    const el = containerRef.current;
    if (!el || window.matchMedia('(pointer: coarse)').matches) return;

    let rafId = null;

    const onMouseMove = (e) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
        const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
        el.style.setProperty('--tilt-x', `${x * 8}px`);
        el.style.setProperty('--tilt-y', `${y * 8}px`);
      });
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="hero" className={styles.heroSection} aria-label="Hero Introduction">
      {/* Background ambient lighting effects */}
      <div className={styles.ambientGlowTop} aria-hidden="true" />
      <div className={styles.ambientGlowBottom} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.editorialGrid}>
          {/* Left Column: Editorial Content */}
          <div className={styles.contentCol}>
            {/* Accreditation & Heritage Pill */}
            <Reveal variant="fade-up" delay={0.05}>
              <div className={styles.badgeWrapper}>
                <span className={styles.badgePill}>
                  <span className={styles.badgeIcon}>★</span>
                  <span>CBSE Affiliated Co-Ed Residential School • Est. 2012</span>
                </span>
                <span className={styles.brandMotto}>&ldquo;Let&apos;s do it with Tulas&rdquo;</span>
              </div>
            </Reveal>

            {/* Main Editorial Headline */}
            <Reveal variant="fade-up" delay={0.15}>
              <h1 className={styles.mainTitle}>
                Where Curiosity Meets{' '}
                <span className={styles.himalayanHighlight}>Himalayan Horizons</span>
              </h1>
            </Reveal>

            {/* Supporting Copy */}
            <Reveal variant="fade-up" delay={0.25}>
              <p className={styles.leadParagraph}>
                Set within a lush 22-acre pollution-free valley in Dehradun, Tulas International School
                combines the soul of a Modern Gurukul with forward-looking international education.
                Here, an exceptional 6:1 student-teacher ratio and 16+ Olympic sports empower every child
                to lead with purpose.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal variant="fade-up" delay={0.35}>
              <div className={styles.ctaGroup}>
                <a href="#admissions" className={styles.primaryCta}>
                  <span>Explore Admissions 2025–26</span>
                  <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="#facilities" className={styles.secondaryCta}>
                  <span className={styles.playIcon} aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span>Discover Campus Life</span>
                </a>
              </div>
            </Reveal>

            {/* Quick Factual Highlight Counters */}
            <Reveal variant="fade-up" delay={0.45}>
              <div className={styles.metricsRow}>
                <div className={styles.metricItem}>
                  <span className={styles.metricValue}>22 Acres</span>
                  <span className={styles.metricLabel}>Pollution-Free Campus</span>
                </div>
                <div className={styles.metricDivider} aria-hidden="true" />
                <div className={styles.metricItem}>
                  <span className={styles.metricValue}>6 : 1</span>
                  <span className={styles.metricLabel}>Student-Teacher Ratio</span>
                </div>
                <div className={styles.metricDivider} aria-hidden="true" />
                <div className={styles.metricItem}>
                  <span className={styles.metricValue}>16+</span>
                  <span className={styles.metricLabel}>Olympic Sports</span>
                </div>
                <div className={styles.metricDivider} aria-hidden="true" />
                <div className={styles.metricItem}>
                  <span className={styles.metricValue}>#1 School</span>
                  <span className={styles.metricLabel}>In Dehradun Ranking</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Visual Composition with Layered Floating Cards */}
          <div className={styles.visualCol} ref={containerRef}>
            <Reveal variant="scale" delay={0.2} duration={0.8}>
              <div className={styles.imageFrame}>
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1100&q=85"
                  alt="Tulas International School scenic campus grounds in Dehradun"
                  width={620}
                  height={580}
                  className={styles.mainHeroImg}
                  loading="eager"
                />
                <div className={styles.imageVignette} aria-hidden="true" />

                {/* Floating Card 1: Top Ranking Award */}
                <div className={`${styles.floatingCard} ${styles.topFloatingCard}`}>
                  <div className={styles.trophyIcon} aria-hidden="true">🏆</div>
                  <div>
                    <strong className={styles.cardBold}>#1 Boarding School</strong>
                    <span className={styles.cardMuted}>Times of India & Education World</span>
                  </div>
                </div>

                {/* Floating Card 2: Pastoral & Sports Badge */}
                <div className={`${styles.floatingCard} ${styles.bottomFloatingCard}`}>
                  <div className={styles.sportsBadgeIcon} aria-hidden="true">🏹</div>
                  <div>
                    <strong className={styles.cardBold}>Olympic Sports Complex</strong>
                    <span className={styles.cardMuted}>Archery, Taekwondo, Horse Riding, Polo</span>
                  </div>
                </div>

                {/* Floating Card 3: Modern Gurukul Pill */}
                <div className={`${styles.floatingCard} ${styles.sideFloatingCard}`}>
                  <span className={styles.pulseDot} aria-hidden="true" />
                  <span className={styles.cardTag}>Dehradun, Uttarakhand</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
