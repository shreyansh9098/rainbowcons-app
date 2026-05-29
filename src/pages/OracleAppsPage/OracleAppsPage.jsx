import s from '../../styles/innerPage.module.css'

export default function OracleAppsPage() {
  return (
    <div>
      {/* ── Intro ── */}
      <div className={`${s.pageIntro} anim-zoom`}>
        <h2>Oracle Applications Cloud</h2>
        <p>
          Gain a competitive advantage deploying top-notch customer and employee experience with Oracle Cloud
          Solutions. RainbowCons's in-depth expertise and best practices from seasoned Oracle Cloud Consultants
          will help you create a more straightforward and robust application ecosystem. Drive your
          organization with greater agility by moving to the Oracle Cloud.
        </p>
      </div>

      {/* ── Sections ── */}
      <div className={s.sectionsWrap}>
        <div className={s.container}>

          {/* Implementation Services */}
          <div className={s.sectionRow}>
            <div className={`${s.imgBlock} anim-zoom-left`}>
              <img
                src="https://consster.com/wp-content/uploads/2022/02/iStock-178150242_compressed-960x1024.jpg"
                alt="Implementation Services"
                loading="lazy"
              />
            </div>
            <div className={`${s.textBlock} anim-slide-bottom`}>
              <h2>Implementation Services</h2>
              <p>
                Gain a sense of ownership with an engaging partnership that involves you in each step of the
                process. We empower your staff with forward-looking and future-proof changes. RainbowCons's
                highly experienced consultants strive to create next-gen solutions with Oracle Cloud
                Applications Implementation to take you a step further in your digital transformation
                journey.
              </p>
            </div>
          </div>

          {/* Managed Services – dark bg */}
          <div className={`${s.sectionRow} ${s.darkBg} ${s.reversed}`} style={{ padding: '72px 40px' }}>
            <div className={`${s.textBlock} anim-slide-bottom`}>
              <h2>Managed Services</h2>
              <p>
                Choose from our different engagement models to reap the best benefits out of the oracle cloud
                Applications. Our team will get on the table to discuss the blueprint of the project life
                cycle to decide on a tailored service engagement with your organization mutually. Our highly
                skilled senior-level quality team members understand and manage your entire quality-related
                needs and provide staff expertise while delivering high-quality service standards.
              </p>
            </div>
            <div className={`${s.imgBlock} anim-zoom-right`}>
              <img
                src="https://consster.com/wp-content/uploads/2022/02/iStock-883638396-1024x683.jpg"
                alt="Managed Services"
                loading="lazy"
              />
            </div>
          </div>

          {/* Support Services */}
          <div className={s.sectionRow}>
            <div className={`${s.imgBlock} anim-zoom-left`}>
              <img
                src="https://consster.com/wp-content/uploads/2022/02/iStock-182431683-1024x853.jpg"
                alt="Support Services"
                loading="lazy"
              />
            </div>
            <div className={`${s.textBlock} anim-slide-bottom`}>
              <h2>Support Services</h2>
              <p>
                Our Oracle experts provide you with extensive administrative and configuration (development)
                support in implementing and operating the Oracle ecosystem. Whether you need to get your Cloud
                Apps monitored, undertake testing, develop specific tools within the application, or obtain
                technical support regarding the same, we will ensure that you get the best possible
                assistance from industry professionals.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
