import styles from './AdmissionsCTA.module.css';
import Reveal from '../common/Reveal';

export default function AdmissionsCTA() {
  return (
    <section id="admissions" className={styles.ctaSection} aria-labelledby="admissions-cta-heading">
      {/* Visual background textures */}
      <div className={styles.patternOverlay} aria-hidden="true" />
      <div className={styles.glowTop} aria-hidden="true" />
      <div className={styles.glowBottom} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.contentBox}>
          <Reveal variant="fade-up" delay={0.1}>
            <div className={styles.badgeWrapper}>
              <span className={styles.badgePill}>
                <span className={styles.starIcon} aria-hidden="true">★</span>
                <span>Admissions Open • Academic Year 2025–26</span>
              </span>
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={0.2}>
            <h2 id="admissions-cta-heading" className={styles.title}>
              Begin Your Journey at <br className={styles.breakDesktop} />
              <span className={styles.highlightGold}>Tulas International School</span>
            </h2>
          </Reveal>

          <Reveal variant="fade-up" delay={0.3}>
            <p className={styles.description}>
              Empower your child with a world-class CBSE education in the peaceful Himalayan foothills of Dehradun.
              Limited residential and day-boarding seats available from Class IV to XII.
            </p>
          </Reveal>

          {/* Three Key Action Buttons */}
          <Reveal variant="fade-up" delay={0.4}>
            <div className={styles.buttonGroup}>
              <a
                href="https://admission.tis.edu.in"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.applyBtn}
              >
                <span>Apply Now (Online Portal)</span>
                <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                  <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <a href="#contact" className={styles.enquireBtn}>
                <span>Enquire Now</span>
              </a>

              <a href="tel:+919837983791" className={styles.visitBtn}>
                <svg viewBox="0 0 512 512" width="15" height="15" fill="currentColor" aria-hidden="true">
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
                <span>Schedule a Campus Visit</span>
              </a>
            </div>
          </Reveal>

          {/* Admissions Steps Bar */}
          <Reveal variant="fade-up" delay={0.5}>
            <div className={styles.admissionsSteps}>
              <div className={styles.stepItem}>
                <span className={styles.stepNum}>01</span>
                <div>
                  <strong className={styles.stepTitle}>Submit Enquiry</strong>
                  <span className={styles.stepSub}>Online or phone consultation</span>
                </div>
              </div>
              <div className={styles.stepDivider} aria-hidden="true">→</div>

              <div className={styles.stepItem}>
                <span className={styles.stepNum}>02</span>
                <div>
                  <strong className={styles.stepTitle}>Campus Interaction</strong>
                  <span className={styles.stepSub}>Visit or virtual interview</span>
                </div>
              </div>
              <div className={styles.stepDivider} aria-hidden="true">→</div>

              <div className={styles.stepItem}>
                <span className={styles.stepNum}>03</span>
                <div>
                  <strong className={styles.stepTitle}>Offer & Enrollment</strong>
                  <span className={styles.stepSub}>Welcome to the TIS family</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
