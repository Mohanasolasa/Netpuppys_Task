import { useState } from 'react';
import styles from './Academics.module.css';
import { academicsData } from '../../data/academics';
import Reveal from '../common/Reveal';

const stageSteps = [
  { step: '01', phase: 'Foundational' },
  { step: '02', phase: 'Exploratory' },
  { step: '03', phase: 'Board Rigor' },
  { step: '04', phase: 'Specialization' },
];

export default function Academics() {
  const [selectedStage, setSelectedStage] = useState(null);

  return (
    <section id="academics" className={styles.academicsSection} aria-labelledby="academics-heading">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <Reveal variant="fade-up" delay={0.1}>
            <span className={styles.eyebrow}>Academic Continuum</span>
            <h2 id="academics-heading" className={styles.heading}>
              An 8-Year Journey to <span className={styles.highlight}>Intellectual Mastery</span>
            </h2>
            <p className={styles.subheading}>
              Affiliated with the Central Board of Secondary Education (CBSE), our progressive continuum from Class IV through XII
              seamlessly bridges natural curiosity with analytical rigor and global university placement readiness.
            </p>
          </Reveal>

          {/* Educational Continuum Timeline Indicator */}
          <Reveal variant="fade-up" delay={0.18}>
            <div className={styles.journeyTrack} aria-hidden="true">
              {stageSteps.map((s, i) => (
                <div key={s.step} className={styles.journeyNode}>
                  <div className={styles.journeyStepBadge}>
                    <span className={styles.journeyStepNumber}>{s.step}</span>
                  </div>
                  <span className={styles.journeyStepPhase}>{s.phase}</span>
                  {i < stageSteps.length - 1 && <div className={styles.journeyConnector} />}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Academic Journey Cards */}
        <div className={styles.continuumGrid}>
          {academicsData.map((item, idx) => (
            <Reveal
              key={item.id}
              variant="fade-up"
              delay={0.12 + idx * 0.08}
              className={styles.cardRevealWrapper}
            >
              <article className={styles.academicCard}>
                {/* Stage Header Strip */}
                <div className={styles.cardTopBar}>
                  <div className={styles.stepIndicator}>
                    <span className={styles.stepNum}>{stageSteps[idx].step}</span>
                    <span className={styles.stepDot}>•</span>
                    <span className={styles.stageName}>{item.stage}</span>
                  </div>
                  <span className={styles.classesPill}>{item.classes}</span>
                </div>

                <div className={styles.imageContainer}>
                  <img
                    src={item.image}
                    alt={`${item.stage} at Tulas International School`}
                    width={400}
                    height={230}
                    className={styles.cardImage}
                    loading="lazy"
                  />
                  <div className={styles.imageFade} aria-hidden="true" />
                  <span className={styles.ageBadge}>{item.ageGroup}</span>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDescription}>{item.description}</p>

                  <div className={styles.highlightsList}>
                    {item.highlights.slice(0, 3).map((hl) => (
                      <div key={hl} className={styles.highlightItem}>
                        <span className={styles.checkIcon} aria-hidden="true">›</span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.cardFooter}>
                    <button
                      type="button"
                      className={styles.learnMoreBtn}
                      onClick={() => setSelectedStage(item)}
                      aria-label={`Explore curriculum for ${item.stage}`}
                    >
                      <span>Explore Stage Details</span>
                      <svg viewBox="0 0 20 20" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                        <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Modal for Deep Dive Curriculum View */}
        {selectedStage && (
          <div
            className={styles.modalBackdrop}
            onClick={() => setSelectedStage(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedStage.stage} details`}
          >
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className={styles.modalCloseBtn}
                onClick={() => setSelectedStage(null)}
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className={styles.modalHeader}>
                <span className={styles.modalBadge}>{selectedStage.classes}</span>
                <h3 className={styles.modalHeading}>{selectedStage.stage} — {selectedStage.title}</h3>
                <p className={styles.modalSub}>{selectedStage.curriculum}</p>
              </div>

              <div className={styles.modalBody}>
                <p className={styles.modalDescription}>{selectedStage.description}</p>
                <h4 className={styles.modalHighlightsTitle}>Pedagogy & Core Competencies</h4>
                <ul className={styles.modalHighlights}>
                  {selectedStage.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <div className={styles.modalActions}>
                  <a href="#contact" className={styles.modalEnquireBtn} onClick={() => setSelectedStage(null)}>
                    Enquire for {selectedStage.classes}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
