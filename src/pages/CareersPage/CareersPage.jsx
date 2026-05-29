import s from '../../styles/innerPage.module.css'

export default function CareersPage() {
  return (
    <div>
      {/* ── Intro ── */}
      <div className={`${s.pageIntro} anim-zoom`}>
        <h2>Why RainbowCons?</h2>
        <p>
          Nothing is impossible at RainbowCons. You can expand your skills and grow your career by joining our
          culture of innovation, authenticity, and collaboration.
        </p>
      </div>

      {/* ── Sections ── */}
      <div className={s.sectionsWrap}>
        <div className={s.container}>
          <div className={s.sectionRow}>
            <div className={`${s.imgBlock} anim-zoom-left`}>
              <img
                src="https://consster.com/wp-content/uploads/2022/02/iStock-1062550916_opt-1024x576.jpg"
                alt="Grow with us"
                loading="lazy"
              />
            </div>
            <div className={`${s.textBlock} anim-slide-bottom`}>
              <h2>Grow with us</h2>
              <p>
                All depends on you and your motivation. You can constantly develop and search for the best
                place for yourself.
              </p>
              <p style={{ marginTop: '12px' }}>Check how it affects your development:</p>
              <ul>
                <li>You improve your skills within an area, proving yourself in different roles.</li>
                <li>You expand your knowledge, increase the level of difficulty of the performed tasks.</li>
                <li>You participate in an increasing number of projects.</li>
              </ul>
              <p style={{ marginTop: '14px' }}>Set a goal and build your career path in RainbowCons.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
