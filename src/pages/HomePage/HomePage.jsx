import styles from './HomePage.module.css'

export default function HomePage({ content, onNavigate }) {
  const { hero, services = [] } = content

  function scrollToServices() {
    document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      <section className={`${styles.hero} anim-slide-top`}>
        <div className={styles.heroBg} />
        <div className={styles.heroPattern} />
        <div className={styles.heroContent}>
          <h1 className="anim-slide-bottom">{hero.heading}</h1>
          <p className="anim-zoom">{hero.subheading}</p>
          <button className={`${styles.heroBtn} anim-zoom delay-100`} onClick={scrollToServices}>
            {hero.ctaLabel ?? 'Services'} ↓
          </button>
        </div>
      </section>

      <section className={styles.services} id="services-section">
        <div className="container">
          <p className={styles.sectionLabel}>What We Do</p>
          <h2 className={styles.sectionTitle}>Our Services</h2>

          {services.length === 0 ? (
            <p className={styles.emptyServices}>No services added yet.</p>
          ) : (
            services.map((svc, i) => (
              <ServiceRow key={svc.id} svc={svc} index={i} onNavigate={onNavigate} />
            ))
          )}
        </div>
      </section>
    </div>
  )
}

function ServiceRow({ svc, index, onNavigate }) {
  const isReversed = svc.imageLeft
  const imgAnim    = isReversed ? 'anim-zoom-left' : 'anim-zoom-right'
  return (
    <div
      id={svc.id}
      className={`${styles.serviceRow}${isReversed ? ` ${styles.reversed}` : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={styles.serviceText}>
        <h2 className={`${svc.titleClass || ''} anim-slide-bottom`}>{svc.title}</h2>
        <div className="anim-zoom">
          <h4>{svc.heading}</h4>
          <p>{svc.body}</p>
        </div>
        <button
          type="button"
          className={`${styles.serviceBtn} anim-zoom delay-100`}
          onClick={() => onNavigate?.(svc.id)}
        >
          {svc.cta} →
        </button>
      </div>
      <div className={`${styles.serviceImg} ${imgAnim}`}>
        <img src={svc.image} alt={svc.imageAlt} loading="lazy" />
      </div>
    </div>
  )
}
