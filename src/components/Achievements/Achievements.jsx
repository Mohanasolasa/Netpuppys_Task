import { useState } from 'react';
import styles from './Achievements.module.css';
import { rankingsData, awardsData, achievementsStats } from '../../data/achievements';
import Reveal from '../common/Reveal';

export default function Achievements() {
  const [activeTab, setActiveTab] = useState('rankings');

  return (
    <section id="achievements" className={styles.achievementsSection} aria-labelledby="achievements-heading">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <Reveal variant="fade-up" delay={0.1}>
            <span className={styles.eyebrow}>Honors & Rankings</span>
            <h2 id="achievements-heading" className={styles.heading}>
              Validated by <span className={styles.highlight}>India&apos;s Foremost Institutions</span>
            </h2>
            <p className={styles.subheading}>
              Consistently recognized by national education publications, ranking councils, and sports authorities for
              academic performance and co-curricular infrastructure.
            </p>
          </Reveal>

          {/* Tab Selector */}
          <Reveal variant="fade-up" delay={0.2}>
            <div className={styles.tabBar} role="tablist" aria-label="Achievements views">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'rankings'}
                className={`${styles.tabBtn} ${activeTab === 'rankings' ? styles.tabBtnActive : ''}`}
                onClick={() => setActiveTab('rankings')}
              >
                National Rankings
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'awards'}
                className={`${styles.tabBtn} ${activeTab === 'awards' ? styles.tabBtnActive : ''}`}
                onClick={() => setActiveTab('awards')}
              >
                Awards & Accolades
              </button>
            </div>
          </Reveal>
        </div>

        {/* View 1: National Rankings Cards */}
        {activeTab === 'rankings' && (
          <div className={styles.rankingsGrid}>
            {rankingsData.map((item, idx) => (
              <Reveal
                key={item.publication + item.scope}
                variant="fade-up"
                delay={0.1 + idx * 0.1}
                className={styles.rankCardWrapper}
              >
                <div className={styles.rankCard}>
                  <div className={styles.rankCardHeader}>
                    <div className={styles.rankDisplay}>
                      <span className={styles.rankNum}>{item.rank}</span>
                      <span className={styles.rankScope}>{item.scope}</span>
                    </div>
                    <span className={styles.badgePill}>{item.badge}</span>
                  </div>

                  <h3 className={styles.rankTitle}>{item.title}</h3>
                  <p className={styles.rankDesc}>{item.description}</p>

                  <div className={styles.rankFooter}>
                    <span className={styles.publicationName}>{item.publication}</span>
                    <span className={styles.yearTag}>{item.year}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {/* View 2: Awards & Accolades */}
        {activeTab === 'awards' && (
          <div className={styles.awardsGrid}>
            {awardsData.map((award, idx) => (
              <Reveal
                key={award.id}
                variant="fade-up"
                delay={0.08 + idx * 0.08}
                className={styles.awardCardWrapper}
              >
                <div className={styles.awardCard}>
                  <div className={styles.awardCrest} aria-hidden="true">
                    <span>🏆</span>
                  </div>
                  <div className={styles.awardDetails}>
                    <span className={styles.awardCategory}>{award.category}</span>
                    <h3 className={styles.awardTitle}>{award.title}</h3>
                    <p className={styles.awardOrg}>{award.organisation}</p>
                  </div>
                  <span className={styles.awardYear}>{award.year}</span>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {/* Verified Performance Metrics Strip */}
        <Reveal variant="fade-up" delay={0.3}>
          <div className={styles.statsBanner}>
            <div className={styles.bannerGrid}>
              {achievementsStats.map((stat) => (
                <div key={stat.label} className={styles.statCell}>
                  <strong className={styles.statVal}>{stat.value}</strong>
                  <span className={styles.statName}>{stat.label}</span>
                  <span className={styles.statDetailText}>{stat.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
