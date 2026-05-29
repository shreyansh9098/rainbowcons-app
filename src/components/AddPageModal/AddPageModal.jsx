import { useState } from 'react'
import styles from './AddPageModal.module.css'

const INITIAL = {
  label: '',
  type: 'generic',
  heading: '',
  subheading: '',
  body: '',
}

export default function AddPageModal({ onClose, onAdd }) {
  const [form, setForm] = useState(INITIAL)
  const [error, setError] = useState('')

  function set(key, value) {
    setForm((f) => ({ ...f, [key]: value }))
    if (error) setError('')
  }

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) onClose()
  }

  function handleSubmit() {
    if (!form.label.trim()) {
      setError('Page name is required.')
      return
    }

    const id = form.label.trim().toLowerCase().replace(/\s+/g, '-') + '-' + Date.now()

    const baseContent = {
      heading: form.heading || form.label.trim(),
      subheading: form.subheading,
      body: form.body,
    }

    const content =
      form.type === 'home'
        ? {
            hero: {
              heading: form.heading || form.label,
              subheading: form.subheading,
              ctaLabel: 'Our Services',
            },
            services: [],
            ...baseContent,
          }
        : form.type === 'contact'
        ? {
            ...baseContent,
            phone: '',
            email: '',
            address: form.body,
          }
        : baseContent

    onAdd({ id, label: form.label.trim(), type: form.type, content })
  }

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <h3 id="modal-title">Add New Page</h3>
        <p>Fill in the details below. The page will be added to the navigation instantly.</p>

        <div className={styles.row}>
          <div className={styles.field}>
            <label>Page Name *</label>
            <input
              placeholder="e.g. Oracle HCM"
              value={form.label}
              onChange={(e) => set('label', e.target.value)}
              autoFocus
            />
            {error && <span style={{ color: 'red', fontSize: '0.78rem' }}>{error}</span>}
          </div>

          <div className={styles.field}>
            <label>Page Type</label>
            <select value={form.type} onChange={(e) => set('type', e.target.value)}>
              <option value="generic">Generic</option>
              <option value="home">Home-style (Hero + Services)</option>
              <option value="contact">Contact</option>
            </select>
          </div>
        </div>

        <div className={styles.field}>
          <label>Heading</label>
          <input
            placeholder="Main heading shown on the page"
            value={form.heading}
            onChange={(e) => set('heading', e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label>Subheading / Tagline</label>
          <input
            placeholder="Short descriptor"
            value={form.subheading}
            onChange={(e) => set('subheading', e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label>Body Content</label>
          <textarea
            rows={5}
            placeholder="Main page content…"
            value={form.body}
            onChange={(e) => set('body', e.target.value)}
          />
        </div>

        <div className={styles.actions}>
          <button className={styles.btnCancel} onClick={onClose}>Cancel</button>
          <button className={styles.btnSave} onClick={handleSubmit} disabled={!form.label.trim()}>
            Add Page
          </button>
        </div>
      </div>
    </div>
  )
}
