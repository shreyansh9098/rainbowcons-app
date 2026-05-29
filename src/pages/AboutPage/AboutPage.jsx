import s from '../../styles/innerPage.module.css'

export default function AboutPage() {
  return (
    <div>
      {/* ── Intro ── */}
      <div className={`${s.pageIntro} anim-zoom`}>
        <h2 className="anim-slide-bottom">About Us</h2>
        <p>
          Having our presence working on Oracle applications and services for last two decades, we stand
          distinguished in the market with our team of expert consultants. We know every business is unique
          and we go down to every detail providing tailored services for the digital transformation of your
          business. We work to support your success by understanding your vision and providing you the
          services that you call for. Our attitude revolves around making your project a success either by
          new technologies or established solutions. The experience and expertise of our team will help you
          make the best decisions for your business.
        </p>
      </div>

      {/* ── Sections ── */}
      <div className={s.sectionsWrap}>
        <div className={s.container}>

          {/* Objectives */}
          <div className={s.sectionRow}>
            <div className={`${s.imgBlock} anim-zoom-left`}>
              <img
                src="https://consster.com/wp-content/uploads/2022/02/iStock-170230392-removebg_opt-1-1024x905.png"
                alt="Objectives"
                loading="lazy"
              />
            </div>
            <div className={`${s.textBlock} anim-slide-bottom`}>
              <h2>Objectives</h2>
              <p>
                We are here to drive the change by the accurate use of technologies to set you apart in the
                market. At RainbowCons, We love to create innovative stuff, but our main approach and focus are
                to let our clients achieve their goals. The solutions are delivered with the blend of diverse
                viewpoints and skill sets through our collaborative team approach by identifying business
                needs, suggesting a fix, and observing the results in the hands of users.
              </p>
            </div>
          </div>

          {/* Vision – dark background */}
          <div className={`${s.sectionRow} ${s.darkBg} ${s.reversed}`} style={{ padding: '72px 40px' }}>
            <div className={`${s.textBlock} anim-slide-bottom`}>
              <h2>Vision</h2>
              <p>
                Creative thinking and feeling more motivated every single day by looking at the analytics and
                investing in our client's feedback is our Vision. We stick to our mantra of keeping ourselves
                ahead of time by the constant quest of learning, so we never miss out on an opportunity to
                serve YOU better.
              </p>
            </div>
            <div className={`${s.imgBlock} anim-zoom-right`}>
              <img
                src="https://consster.com/wp-content/uploads/2022/09/iStock-172331272-2.jpg"
                alt="Vision"
                loading="lazy"
              />
            </div>
          </div>

          {/* Our Culture */}
          <div className={s.sectionRow}>
            <div className={`${s.imgBlock} anim-zoom-left`}>
              <img
                src="https://consster.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-08-at-20.24.49-1024x959.jpeg"
                alt="Our Culture"
                loading="lazy"
              />
            </div>
            <div className={`${s.textBlock} anim-slide-bottom`}>
              <h2>Our Culture</h2>
              <p>
                At RainbowCons, people come first. In fact they are everything, the heart and soul of our
                business. Our culture is not about following hierarchy. We deal with problem together and
                learn from each other. A culture that promotes us to take the ownership in the task we
                perform.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
