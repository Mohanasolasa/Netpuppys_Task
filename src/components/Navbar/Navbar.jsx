import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import tisLogo from '../../assets/tis-logo.svg';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Campus & Facilities', href: '#facilities' },
  { label: 'Why TIS', href: '#why-tis' },
  { label: 'Life at TIS', href: '#activities' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll effect for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section for navigation highlight
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'academics', 'facilities', 'why-tis', 'activities', 'admissions', 'contact'];
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.25,
      rootMargin: '-80px 0px -40% 0px',
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close on escape key
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Top Admissions Alert Bar */}
      <div className={styles.topUtilityBar}>
        <div className={styles.topUtilityInner}>
          <div className={styles.topAlert}>
            <span className={styles.statusDot} aria-hidden="true" />
            <span>Admissions Open for Academic Year 2025–26 (Classes IV to XII)</span>
          </div>
          <div className={styles.topLinks}>
            <a href="tel:+91-9837983791" className={styles.topLink}>
              <svg viewBox="0 0 512 512" width="13" height="13" fill="currentColor" aria-hidden="true">
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              <span>Admissions Helpline: +91-98379 83791</span>
            </a>
            <span className={styles.divider} aria-hidden="true">|</span>
            <a href="mailto:info@tis.edu.in" className={styles.topLink}>
              <span>info@tis.edu.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}
        role="banner"
      >
        <div className={styles.navContainer}>
          {/* TIS Logo */}
          <a href="#hero" className={styles.brandLogo} aria-label="Tulas International School - Home">
            <img
              src={tisLogo}
              alt="Tulas International School Logo"
              width={200}
              height={50}
              className={styles.logoImg}
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className={styles.desktopNav} aria-label="Main Navigation">
            <ul className={styles.navList}>
              {navItems.map((item) => {
                const targetId = item.href.replace('#', '');
                const isActive = activeSection === targetId;
                return (
                  <li key={item.label} className={styles.navItem}>
                    <a
                      href={item.href}
                      className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                    >
                      {item.label}
                      {isActive && <span className={styles.activePill} aria-hidden="true" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action CTAs */}
          <div className={styles.actionGroup}>
            <a href="#contact" className={styles.enquireButton}>
              Enquire
            </a>
            <a
              href="https://admission.tis.edu.in"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.applyButton}
            >
              Apply Now
              <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className={`${styles.hamburgerBtn} ${mobileMenuOpen ? styles.hamburgerActive : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-nav-menu"
        className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileDrawerOpen : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className={styles.mobileBackdrop} onClick={closeMobileMenu} aria-hidden="true" />
        <div className={styles.mobilePanel}>
          <div className={styles.mobilePanelHeader}>
            <img src={tisLogo} alt="TIS Logo" width={170} height={42} />
            <button
              type="button"
              className={styles.mobileCloseBtn}
              onClick={closeMobileMenu}
              aria-label="Close Navigation Menu"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className={styles.mobileNavLinks}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={styles.mobileNavLink}
                onClick={closeMobileMenu}
              >
                <span>{item.label}</span>
                <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M7 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}
          </div>

          <div className={styles.mobilePanelFooter}>
            <a
              href="https://admission.tis.edu.in"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileApplyBtn}
              onClick={closeMobileMenu}
            >
              Apply Online Now
            </a>
            <div className={styles.mobileContactCards}>
              <a href="tel:+919837983791" className={styles.mobileContactCard}>
                <strong>Call Admissions:</strong>
                <span>+91-98379 83791</span>
              </a>
              <a href="mailto:info@tis.edu.in" className={styles.mobileContactCard}>
                <strong>Email Us:</strong>
                <span>info@tis.edu.in</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
