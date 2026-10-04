import { useState } from 'react';
import styles from './Activities.module.css';
import { activitiesData, activitiesCategories } from '../../data/activities';
import Reveal from '../common/Reveal';

export default function Activities() {
  const [selectedCat, setSelectedCat] = useState('All');

  const filtered = selectedCat === 'All'
    ? activitiesData
    : activitiesData.filter(a => a.category === selectedCat);

  return (
    <section id="activities" className={styles.activitiesSection} aria-labelledby="activities-heading">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <Reveal variant="fade-up" delay={0.1}>
            <span className={styles.eyebrow}>Life at TIS</span>
            <h2 id="activities-heading" className={styles.heading}>
              Beyond the Classroom, <span className={styles.highlight}>Into the Arena</span>
            </h2>
            <p className={styles.subheading}>
              Every afternoon at Tulas is an exploration of passions — from archery targets and classical ragas to
              Himalayan nature treks and autonomous robotics.
            </p>
          </Reveal>

          {/* Filter Bar */}
          <Reveal variant="fade-up" delay={0.2}>
            <div className={styles.filterBar} role="tablist" aria-label="Activities categories">
              {activitiesCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={selectedCat === cat}
                  className={`${styles.filterButton} ${selectedCat === cat ? styles.filterButtonActive : ''}`}
                  onClick={() => setSelectedCat(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Asymmetrical Visual Gallery Layout */}
        <div className={styles.galleryGrid}>
          {filtered.map((item, idx) => (
            <Reveal
              key={item.id}
              variant="fade-up"
              delay={0.1 + (idx % 3) * 0.1}
              className={`${styles.galleryItem} ${item.span === 'col-span-2' ? styles.spanTwo : ''}`}
            >
              <div className={styles.activityCard} data-cursor="view">
                <img
                  src={item.image}
                  alt={item.title}
                  width={item.span === 'col-span-2' ? 800 : 420}
                  height={340}
                  className={styles.cardImg}
                  loading="lazy"
                />
                <div className={styles.cardGradient} />

                <div className={styles.cardTopBadge}>
                  <span className={styles.categoryPill}>{item.category}</span>
                </div>

                <div className={styles.cardBottom}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>
                  <div className={styles.tagsContainer}>
                    {item.tags.map((t) => (
                      <span key={t} className={styles.tagBadge}>
                        {t}
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
