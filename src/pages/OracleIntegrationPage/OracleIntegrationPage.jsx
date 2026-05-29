import s from '../../styles/innerPage.module.css'

export default function OracleIntegrationPage() {
  return (
    <div>
      {/* ── Intro ── */}
      <div className={`${s.pageIntro} anim-zoom`}>
        <h2>Oracle Integration Cloud</h2>
        <h3>Extract the most value out of Oracle Fusion Middleware</h3>
        <p>
          Avail a seamless integration and have a modern and hyper agile application network. Step up from
          the legacy infrastructure and accelerating transformations in all domains from finance, HR,
          customer relationship, and operations. Make better decisions, reduce cost and enhance efficiency.
        </p>
      </div>

      {/* ── Sections ── */}
      <div className={s.sectionsWrap}>
        <div className={s.container}>

          {/* Implementation Services */}
          <div className={s.sectionRow}>
            <div className={`${s.imgBlock} anim-zoom-left`}>
              <img
                src="https://consster.com/wp-content/uploads/2022/02/iStock-1297238195_crp-1024x618.jpg"
                alt="Implementation Services"
                loading="lazy"
              />
            </div>
            <div className={`${s.textBlock} anim-slide-bottom`}>
              <h2>Implementation Services</h2>
              <p>
                Our Seasoned Oracle experts will help you create a robust application network giving easy
                accessibility of data across all levels. Oracle Fusion helps make the most effective
                microservices serving the needs of modern enterprises effectively and elegantly. Run agile,
                intelligent business applications while maximizing IT efficiency by utilizing modern hardware
                and software architectures.
              </p>
            </div>
          </div>

          {/* Managed Services – dark bg */}
          <div className={`${s.sectionRow} ${s.darkBg} ${s.reversed}`} style={{ padding: '72px 40px' }}>
            <div className={`${s.textBlock} anim-slide-bottom`}>
              <h2>Managed Services</h2>
              <p>
                RainbowCons takes the entire responsibility of Interface design and management, which is the
                core of microservices. With in-depth knowledge and experience in OIC, we make sure that the
                data integration is on the spot and error-free. We aim to deliver high-quality service
                standards regardless of the scale of the project. Please choose from our different
                engagement models to reap the best benefits out of Oracle Fusion Middleware.
              </p>
            </div>
            <div className={`${s.imgBlock} anim-zoom-right`}>
              <img
                src="https://consster.com/wp-content/uploads/2022/02/iStock-693979436_opt-1024x635.jpg"
                alt="Managed Services"
                loading="lazy"
              />
            </div>
          </div>

          {/* Support Services */}
          <div className={s.sectionRow}>
            <div className={`${s.imgBlock} anim-zoom-left`}>
              <img
                src="https://consster.com/wp-content/uploads/2022/02/iStock-831326394-1024x683.jpg"
                alt="Support Services"
                loading="lazy"
              />
            </div>
            <div className={`${s.textBlock} anim-slide-bottom`}>
              <h2>Support Services</h2>
              <p>
                You can rest assured that we offer a 24x7x365 days customized support service package that
                proactively monitors your Oracle Integration Cloud implementation. Our teams are dedicated to
                keeping your applications up and running by proactively detecting and fixing the API problems
                on time, thereby preventing them from turning into major issues. We believe in being
                proactive instead of being Reactive.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
