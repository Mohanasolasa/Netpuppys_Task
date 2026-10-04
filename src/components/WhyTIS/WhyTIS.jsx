import styles from './WhyTIS.module.css';
import { whyTisData } from '../../data/whyTis';
import Reveal from '../common/Reveal';

export default function WhyTIS() {
  return (
    <section id="why-tis" className={styles.manifestoSection} aria-labelledby="why-heading">
      <div className={styles.container}>
        {/* Dominant Institutional Manifesto Header */}
        <div className={styles.manifestoHeader}>
          <Reveal variant="fade-up" delay={0.1}>
            <span className={styles.manifestoTag}>Institutional Manifesto</span>
            <h2 id="why-heading" className={styles.manifestoHeading}>
              Six Non-Negotiable Pillars of an <br className={styles.breakDesktop} />
              <span className={styles.highlight}>Uncommon Education</span>
            </h2>
            <p className={styles.manifestoStatement}>
              We believe a school must do more than instruct — it must awaken. Founded under the aegis of the
              Rishabh Educational Trust, Tulas International School pairs ancient Gurukul mentorship with
              international academic excellence across 22 acres of Himalayan tranquility.
            </p>
          </Reveal>
        </div>

        {/* 6 Manifesto Pillars with Whitespace & Clean Typography */}
        <div className={styles.manifestoGrid}>
          {whyTisData.map((item, idx) => {
            const stepNum = String(idx + 1).padStart(2, '0');
            return (
              <Reveal
                key={item.id}
                variant="fade-up"
                delay={0.1 + (idx % 3) * 0.08}
                className={styles.pillarWrapper}
              >
                <div className={styles.manifestoItem}>
                  {/* Step Marker & Metric */}
                  <div className={styles.itemHeader}>
                    <span className={styles.itemNumber}>{stepNum}</span>
                    <span className={styles.metricHighlight}>{item.metric}</span>
                  </div>

                  <div className={styles.itemBody}>
                    <span className={styles.pillarEyebrow}>{item.eyebrow}</span>
                    <h3 className={styles.pillarTitle}>{item.title}</h3>
                    <p className={styles.pillarText}>{item.description}</p>
                  </div>

                  <div className={styles.itemFooter}>
                    <span className={styles.itemCaption}>{item.metricLabel}</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
