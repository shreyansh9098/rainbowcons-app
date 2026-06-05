import { idToPath } from '../../hooks/usePages'

const LOGO_URL = '/rc-logo.png'

const SERVICE_IDS = ['oracle-apps-cloud', 'oracle-integration-cloud', 'oracle-ebusiness-suite']
const PRIMARY_NAV = ['about', 'careers', 'contact']

export default function Footer({ pages, onNavigate }) {
  const servicePages = pages.filter(p => SERVICE_IDS.includes(p.id))
  const primaryPages = pages.filter(p => PRIMARY_NAV.includes(p.id))

  function go(e, id) {
    if (e) e.preventDefault()
    onNavigate(id)
  }

  return (
    <footer className="et-l et-l--footer">
      <div className="et_builder_inner_content et_pb_gutters3">
        <div className="et_pb_section et_pb_section_0_tb_footer et_section_regular">
          <div
            className="et_pb_row et_pb_row_0_tb_footer et_pb_row--with-menu"
            style={{ zIndex: 3,display: "flex", flexDirection: "row", justifyContent: "space-between" }}
          >
            {/* Contact column */}
            <div className="et_pb_column et_pb_column_1_3 et_pb_column_0_tb_footer et_pb_css_mix_blend_mode_passthrough">
              <div className="et_pb_module et_pb_text et_pb_text_0_tb_footer et_pb_text_align_left et_pb_text_align_center-phone et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <h2>Contact:</h2>
                  <address>RainbowCons,</address>
                  <address>
                    Suite#G604 Orchid<br />Royal Greens<br />Indore MP – 452010
                  </address>
                  <address></address>
                  <address>
                    <img
                      decoding="async"
                      src="https://img.icons8.com/ios/64/000000/apple-phone.png"
                      style={{ width: 18 }}
                      alt=""
                    />{' '}
                    Phone: +91 70002 61105
                  </address>
                  <address></address>
                  <address>
                    <img
                      decoding="async"
                      src="https://img.icons8.com/pastel-glyph/64/000000/email--v3.png"
                      style={{ width: 18, height: 18 }}
                      alt=""
                    />{' '}
                    Email: engage@rainbowcons.com
                  </address>
                  <address></address>
                </div>
              </div>
            </div>

           

            {/* Quick Links column */}
            <div className="et_pb_column et_pb_column_1_3 et_pb_column_2_tb_footer et_pb_css_mix_blend_mode_passthrough et-last-child et_pb_column--with-menu">
              <div className="et_pb_module et_pb_text et_pb_text_1_tb_footer et_pb_text_align_left et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <h2 style={{ textAlign: 'center' }}>Quick Links</h2>
                </div>
              </div>
              <div
                id="footer-quick-links"
                className="et_pb_module et_pb_menu et_pb_menu_0_tb_footer flex-col et_pb_bg_layout_light et_pb_text_align_left et_dropdown_animation_fade et_pb_menu--without-logo et_pb_menu--style-left_aligned"
              >
                <div className="et_pb_menu_inner_container clearfix">
                  <div className="et_pb_menu__wrap">
                    <div className="et_pb_menu__menu">
                      <nav className="et-menu-nav">
                        <ul id="menu-primary" className="et-menu nav">
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                            <a href="#services" onClick={(e) => e.preventDefault()}>
                              Services<span className="rc-chevron" aria-hidden="true">▼</span>
                            </a>
                            <ul className="sub-menu">
                              {servicePages.map(p => (
                                <li key={p.id} className="menu-item menu-item-type-post_type menu-item-object-page">
                                  <a href={idToPath(p.id)} onClick={(e) => go(e, p.id)}>{p.label}</a>
                                </li>
                              ))}
                            </ul>
                          </li>
                          {primaryPages.map(p => (
                            <li key={p.id} className="menu-item menu-item-type-post_type menu-item-object-page">
                              <a href={idToPath(p.id)} onClick={(e) => go(e, p.id)}>{p.label}</a>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="et_pb_row et_pb_row_1_tb_footer">
            <div className="et_pb_column et_pb_column_4_4 et_pb_column_3_tb_footer et_pb_css_mix_blend_mode_passthrough et-last-child">
              <div className="et_pb_module et_pb_text et_pb_text_3_tb_footer et_pb_text_align_left et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  © Copyright {new Date().getFullYear()} RainbowCons | All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
