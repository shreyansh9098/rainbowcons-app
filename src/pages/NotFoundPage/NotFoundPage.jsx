import styles from './NotFoundPage.module.css'

export default function NotFoundPage({ searchTerm, onGoHome }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.title}>Page not found</h2>
        {searchTerm ? (
          <p className={styles.msg}>
            We couldn't find anything matching <strong>"{searchTerm}"</strong>.
          </p>
        ) : (
          <p className={styles.msg}>
            The page you're looking for doesn't exist or has been moved.
          </p>
        )}
        <button className={styles.btn} onClick={onGoHome}>← Back to Home</button>
      </div>
    </div>
  )
}
