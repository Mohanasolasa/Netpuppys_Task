import { useState } from 'react';
import styles from './Facilities.module.css';
import { facilitiesData } from '../../data/facilities';
import Reveal from '../common/Reveal';

export default function Facilities() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Sports & Athletics', 'Academics', 'Residential Life', 'Nutrition & Wellness'];

  const filteredFacilities = activeFilter === 'All'
    ? facilitiesData
    : facilitiesData.filter(f => f.category === activeFilter);

  return (
    <section id="facilities" className={styles.facilitiesSection} aria-labelledby="facilities-heading">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <Reveal variant="fade-up" delay={0.1}>
            <span className={styles.eyebrow}>Campus Infrastructure</span>
            <h2 id="facilities-heading" className={styles.heading}>
              World-Class Spaces Across <span className={styles.highlight}>22 Pristine Acres</span>
            </h2>
            <p className={styles.subheading}>
              Designed to stimulate curiosity, physical vitality, and deep contemplation in the serene foothills of Dehradun.
            </p>
          </Reveal>

          {/* Category Filter Pills */}
          <Reveal variant="fade-up" delay={0.2}>
            <div className={styles.filterPills} role="tablist" aria-label="Facility Categories">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === cat}
                  className={`${styles.filterPill} ${activeFilter === cat ? styles.filterPillActive : ''}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Bento Grid Showcase */}
        <div className={styles.bentoGrid}>
          {filteredFacilities.map((fac, idx) => (
            <Reveal
              key={fac.id}
              variant="fade-up"
              delay={0.1 + (idx % 4) * 0.1}
              className={`${styles.bentoCell} ${fac.isFeatured ? styles.bentoFeatured : ''}`}
            >
              <div className={styles.facilityCard} data-cursor="view">
                <img
                  src={fac.image}
                  alt={fac.name}
                  width={fac.isFeatured ? 800 : 450}
                  height={fac.isFeatured ? 500 : 300}
                  className={styles.facilityImage}
                  loading="lazy"
                />
                <div className={styles.gradientOverlay} />

                {/* Badges */}
                <div className={styles.cardHeader}>
                  <span className={styles.badgeCategory}>{fac.category}</span>
                  {fac.badge && <span className={styles.badgeHighlight}>{fac.badge}</span>}
                </div>

                {/* Content Overlay */}
                <div className={styles.cardContent}>
                  <h3 className={styles.facilityTitle}>{fac.name}</h3>
                  <p className={styles.facilityDesc}>{fac.description}</p>

                  <div className={styles.tagsRow}>
                    {fac.features.map((feature) => (
                      <span key={feature} className={styles.tagPill}>
                        • {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
