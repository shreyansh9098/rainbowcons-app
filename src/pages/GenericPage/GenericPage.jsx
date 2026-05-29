import styles from './GenericPage.module.css'

export default function GenericPage({ content }) {
  return (
    <div>
      <section className={styles.pageHero}>
        <h1 className="animate-fade-up">{content.heading}</h1>
        {content.subheading && (
          <p className="animate-fade-up delay-100">{content.subheading}</p>
        )}
      </section>
      <div className={`${styles.body} animate-fade-up delay-200`}>
        <p>{content.body || 'Content coming soon.'}</p>
      </div>
    </div>
  )
}
