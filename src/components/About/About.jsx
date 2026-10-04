import styles from './About.module.css';
import Reveal from '../common/Reveal';

const statsData = [
  {
    number: '2012',
    label: 'Year Established',
    desc: 'Founded under the aegis of Rishabh Educational Trust',
  },
  {
    number: '22',
    suffix: ' Acres',
    label: 'Scenic Campus',
    desc: 'Pollution-free mountain environment in Dehradun',
  },
  {
    number: '6 : 1',
    label: 'Student-Teacher Ratio',
    desc: 'Unmatched individual mentorship and pastoral care',
  },
  {
    number: '100%',
    label: 'CBSE Success Rate',
    desc: 'Exemplary board performance in AISSE & AISSCE',
  },
];

export default function About() {
  return (
    <section id="about" className={styles.aboutSection} aria-labelledby="about-heading">
      <div className={styles.container}>
        {/* Asymmetrical Top Layout */}
        <div className={styles.asymmetricGrid}>
          {/* Left Column: Vision & Narrative */}
          <div className={styles.textColumn}>
            <Reveal variant="fade-up" delay={0.1}>
              <span className={styles.sectionTag}>About Tulas International</span>
              <h2 id="about-heading" className={styles.heading}>
                The Soul of a <span className={styles.highlightText}>Modern Gurukul</span> with a Global Outlook
              </h2>
            </Reveal>

            <Reveal variant="fade-up" delay={0.2}>
              <p className={styles.leadText}>
                Tulas International School was founded in 2012 under the aegis of the Rishabh Educational Trust
                to impart holistic education through seamless opportunities. Located in the tranquil Doon Valley
                surrounded by the Shivalik hills, TIS reimagines ancient Indian Gurukul traditions for the modern world.
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={0.3}>
              <div className={styles.philosophyBlock}>
                <div className={styles.quoteBar} aria-hidden="true" />
                <div className={styles.quoteContent}>
                  <p className={styles.philosophyText}>
                    &ldquo;Education is not the learning of facts, but the training of the mind to think, empathize, and lead.&rdquo;
                  </p>
                  <span className={styles.philosophyLabel}>— TIS Educational Philosophy</span>
                </div>
              </div>
            </Reveal>

            <Reveal variant="fade-up" delay={0.4}>
              <div className={styles.pillarsGrid}>
                <div className={styles.pillarItem}>
                  <div className={styles.pillarIcon}>🌿</div>
                  <div>
                    <h3 className={styles.pillarTitle}>Holistic Character Building</h3>
                    <p className={styles.pillarDesc}>Nurturing emotional intelligence, ethical leadership, and self-discipline.</p>
                  </div>
                </div>
                <div className={styles.pillarItem}>
                  <div className={styles.pillarIcon}>🔬</div>
                  <div>
                    <h3 className={styles.pillarTitle}>21st-Century Competence</h3>
                    <p className={styles.pillarDesc}>Fostering STEM inquiry, digital literacy, and creative problem-solving.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Layered Campus Photography */}
          <div className={styles.imageColumn}>
            <Reveal variant="slide-right" delay={0.25} duration={0.8}>
              <div className={styles.imageCard}>
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=900&q=85"
                  alt="Tulas International School students engaged in collaborative classroom learning"
                  width={600}
                  height={500}
                  className={styles.aboutImg}
                  loading="lazy"
                />
                <div className={styles.imageOverlay} />
                <div className={styles.heritageBadge}>
                  <span className={styles.badgeYear}>2012</span>
                  <span className={styles.badgeCaption}>Nurturing Excellence in Dehradun</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom Statistics & Highlights Row */}
        <Reveal variant="fade-up" delay={0.3}>
          <div className={styles.statsStrip}>
            {statsData.map((stat, idx) => (
              <div key={stat.label} className={styles.statBox} style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className={styles.statNumberWrapper}>
                  <span className={styles.statNum}>{stat.number}</span>
                  {stat.suffix && <span className={styles.statSuffix}>{stat.suffix}</span>}
                </div>
                <h3 className={styles.statTitle}>{stat.label}</h3>
                <p className={styles.statDetail}>{stat.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
