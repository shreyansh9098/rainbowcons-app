import { useMemo, useState } from 'react'
import styles from './ContactPage.module.css'

export default function ContactPage({ content }) {
  const { heading, subheading, address, phone, email, body } = content

  const captcha = useMemo(() => {
    const a = Math.floor(Math.random() * 10) + 1
    const b = Math.floor(Math.random() * 15) + 1
    return { a, b, answer: a + b }
  }, [])

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', message: '', captcha: '',
  })
  const [status, setStatus] = useState(null)

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (Number(form.captcha) !== captcha.answer) {
      setStatus({ ok: false, msg: 'You entered the wrong number in captcha.' })
      return
    }
    setStatus({ ok: true, msg: 'Thanks! Your message has been sent.' })
    setForm({ firstName: '', lastName: '', email: '', phone: '', message: '', captcha: '' })
  }

  return (
    <div>
      <section className={styles.pageHero}>
        <h1 className="animate-fade-up">{heading}</h1>
        {subheading && <p className="animate-fade-up delay-100">{subheading}</p>}
      </section>

      <div className={`${styles.body} animate-fade-up delay-200`}>
        <div className={styles.card}>
          <h2>Send us a message</h2>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
              <label className={styles.field}>
                <span>First Name</span>
                <input type="text" required value={form.firstName}
                  onChange={update('firstName')} placeholder="First Name" />
              </label>
              <label className={styles.field}>
                <span>Last Name</span>
                <input type="text" required value={form.lastName}
                  onChange={update('lastName')} placeholder="Last Name" />
              </label>
            </div>

            <div className={styles.row}>
              <label className={styles.field}>
                <span>Email Address</span>
                <input type="email" required value={form.email}
                  onChange={update('email')} placeholder="Email Address" />
              </label>
              <label className={styles.field}>
                <span>Phone Number</span>
                <input type="tel" required value={form.phone} onChange={update('phone')}
                  placeholder="Phone Number" pattern="[0-9\s-]{10,12}" maxLength={12} />
              </label>
            </div>

            <label className={styles.field}>
              <span>Message</span>
              <textarea required rows={5} value={form.message}
                onChange={update('message')} placeholder="Message" />
            </label>

            <div className={styles.captchaRow}>
              <span className={styles.captchaQ}>{captcha.a} + {captcha.b}</span>
              <span>=</span>
              <input type="text" required size={3} value={form.captcha}
                onChange={update('captcha')} autoComplete="off" />
              <button type="submit" className={styles.submit}>Submit</button>
            </div>

            {status && (
              <p className={status.ok ? styles.success : styles.error}>{status.msg}</p>
            )}
          </form>
        </div>

        <div className={styles.cardCol}>
          <div className={styles.card}>
            <h2>Our Address</h2>
            <address>{address || body || 'Suite#G604 Orchid, Royal Greens\nIndore MP – 452010'}</address>
          </div>
          <div className={styles.card}>
            <h2>Reach Us</h2>
            <address>
              {phone && <>📞 <a href={`tel:${phone.replace(/\s/g,'')}`}>{phone}</a><br /></>}
              {email && <>✉️ <a href={`mailto:${email}`}>{email}</a></>}
              {!phone && !email && 'connect@consster.com'}
            </address>
          </div>
        </div>
      </div>
    </div>
  )
}
