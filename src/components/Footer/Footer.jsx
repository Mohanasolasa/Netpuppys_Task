import styles from './Footer.module.css';
import tisLogoWhite from '../../assets/tis-logo-white.svg';

const CURRENT_YEAR = 2025;

const quickLinks = [
  { label: 'About TIS', href: '#about' },
  { label: 'Academics & CBSE', href: '#academics' },
  { label: 'Campus & Facilities', href: '#facilities' },
  { label: 'Why Choose TIS', href: '#why-tis' },
  { label: 'Student Life & Sports', href: '#activities' },
  { label: 'Awards & Honors', href: '#achievements' },
];

const admissionLinks = [
  { label: 'Admissions 2025–26', href: '#admissions' },
  { label: 'Online Application Portal', href: 'https://admission.tis.edu.in', external: true },
  { label: 'Request Callback / Enquiry', href: '#contact' },
  { label: 'Parent Testimonials', href: '#testimonials' },
  { label: 'Campus Location Map', href: 'https://maps.app.goo.gl/maBF8syXueQkw31E6', external: true },
];

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/tulasinternationalschool/', icon: 'FB' },
  { name: 'Instagram', href: 'https://www.instagram.com/tulasinternationalschool/', icon: 'IG' },
  { name: 'YouTube', href: 'https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw', icon: 'YT' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/school/tulas-international-school/', icon: 'IN' },
  { name: 'Twitter/X', href: 'https://twitter.com/tulas_intschool', icon: 'X' },
];

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        {/* Main Footer Grid */}
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <a href="#hero" className={styles.logoLink} aria-label="Tulas International School - Back to top">
              <img
                src={tisLogoWhite}
                alt="Tulas International School Crest and Logo"
                width={220}
                height={55}
                className={styles.logoImg}
              />
            </a>
            <p className={styles.brandDescription}>
              Established in 2012 under the aegis of Rishabh Educational Trust. A CBSE-affiliated premier
              co-educational boarding school set across 22 pollution-free acres in the scenic foothills of Dehradun, Uttarakhand.
            </p>
            <div className={styles.socialRow}>
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label={`Follow TIS on ${s.name}`}
                >
                  <span>{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Explore Campus</h3>
            <ul className={styles.linkList}>
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={styles.footerLink}>
                    <span className={styles.linkArrow} aria-hidden="true">›</span>
                    <span>{l.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions Column */}
          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Admissions</h3>
            <ul className={styles.linkList}>
              {admissionLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className={styles.footerLink}
                    {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <span className={styles.linkArrow} aria-hidden="true">›</span>
                    <span>{l.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className={styles.contactCol}>
            <h3 className={styles.colTitle}>Reach Us</h3>
            <div className={styles.contactContent}>
              <address className={styles.addressText}>
                Dhoolkot, P.O – Selaqui, Chakrata Road,<br />
                Dehradun – 248011, Uttarakhand, India
              </address>
              <div className={styles.directLinks}>
                <a href="tel:+919837983791" className={styles.directLink}>
                  📞 +91-98379 83791 (Admissions)
                </a>
                <a href="tel:01352699444" className={styles.directLink}>
                  ☎ 0135-2699444 / 2699666 (Landline)
                </a>
                <a href="mailto:info@tis.edu.in" className={styles.directLink}>
                  ✉ info@tis.edu.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {CURRENT_YEAR} Tulas International School. All rights reserved. Rishabh Educational Trust.
          </p>
          <div className={styles.subLinks}>
            <a href="#about" className={styles.subLink}>CBSE Disclosure</a>
            <span className={styles.dotSeparator} aria-hidden="true">•</span>
            <a href="#contact" className={styles.subLink}>Campus Map & Directions</a>
            <span className={styles.dotSeparator} aria-hidden="true">•</span>
            <a href="#hero" className={styles.subLink}>Back to Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
