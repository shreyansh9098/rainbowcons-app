import s from '../../styles/innerPage.module.css'

export default function OracleEbsPage() {
  return (
    <div>
      {/* ── Intro ── */}
      <div className={`${s.pageIntro} anim-zoom`}>
        <h2>Oracle e-Business Suite</h2>
        <h3>Gain business intelligence like never before.</h3>
        <p>
          Avail a Full Suite Functional R12.x Configuration and Migration with RainbowCons. Implement new
          functional modules and leverage business intelligence for the future of business. With our
          expertise, get a full-fledged functional and technical upgrade from 11.x to R12.x.
        </p>
      </div>

      {/* ── Sections ── */}
      <div className={s.sectionsWrap}>
        <div className={s.container}>
          <div className={s.sectionRow}>
            <div className={`${s.imgBlock} anim-zoom-left`}>
              <img
                src="https://consster.com/wp-content/uploads/2022/02/iStock-485468747-1024x1010.jpg"
                alt="Oracle e-Business Suite"
                loading="lazy"
              />
            </div>
            <div className={`${s.textBlock} anim-slide-bottom`}>
              <h2>Our Services</h2>
              <p>
                Leverage the E-business Suite Release 12 (R12.x) with the several Oracle Applications
                inclusive of:
              </p>
              <ul>
                <li>Advisory Services for Future integration roadmap</li>
                <li>Advisory Services and assessment for Oracle Cloud version upgrade</li>
                <li>Advisory for process improvement based upon operation data assessment</li>
                <li>Master Data Cleansing</li>
                <li>Data extraction and data mining for interface and third-party applications</li>
                <li>Enhancement and Production Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
