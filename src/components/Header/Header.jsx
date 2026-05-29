import { useEffect, useRef, useState } from 'react'
import { idToPath } from '../../hooks/usePages'
import styles from './Header.module.css'

const LOGO_URL = '/rc-logo.png'

const SERVICE_PAGES = ['oracle-apps-cloud', 'oracle-integration-cloud', 'oracle-ebusiness-suite']
const PRIMARY_NAV  = ['about', 'careers', 'contact']

export default function Header({ pages, activePageId, onNavigate, onSearch }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery]           = useState('')
  const inputRef                    = useRef(null)

  useEffect(() => {
    if (!searchOpen) return
    inputRef.current?.focus()
    const onKey = (e) => { if (e.key === 'Escape') { setSearchOpen(false); setQuery('') } }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [searchOpen])

  const servicePages = pages.filter(p => SERVICE_PAGES.includes(p.id))
  const primaryPages = pages.filter(p => PRIMARY_NAV.includes(p.id))

  function go(e, id) {
    if (e) e.preventDefault()
    onNavigate(id)
    setMobileOpen(false)
  }

  function submitSearch(e) {
    e.preventDefault()
    const term = query.trim()
    if (!term) return
    onSearch?.(term)
    setSearchOpen(false)
    setQuery('')
  }

  return (
    <header
      id="main-header"
      data-height-onload="80"
      data-height-loaded="true"
      data-fixed-height-onload="0"
      className="et-fixed-header"
      style={{ top: 0 }}
    >
      <div className="container clearfix et_menu_container">
        <div className="logo_container">
          <span className="logo_helper" />
          <a href={idToPath('home')} onClick={(e) => go(e, 'home')}>
            <img
              src={LOGO_URL}
              width="200"
              height="149"
              alt="RainbowCons"
              id="logo"
              data-height-percentage="54"
              data-actual-width="200"
              data-actual-height="149"
            />
          </a>
        </div>

        <div id="et-top-navigation" data-height="66" data-fixed-height="40" style={{ paddingLeft: '137px', position: 'relative' }}>
          <nav id="top-menu-nav" className={searchOpen ? styles.navHidden : styles.navVisible}>
            <ul id="top-menu" className="nav">
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
                <li
                  key={p.id}
                  className={`menu-item menu-item-type-post_type menu-item-object-page${activePageId === p.id ? ' current-menu-item current_page_item' : ''}`}
                >
                  <a href={idToPath(p.id)} onClick={(e) => go(e, p.id)}>{p.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div id="et_top_search" className={searchOpen ? styles.navHidden : styles.navVisible}>
            <button
              type="button"
              className={styles.searchToggle}
              aria-label="Search"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen(true)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>

          <div
            className={`${styles.searchOverlay} ${searchOpen ? styles.searchOverlayOpen : ''}`}
            aria-hidden={!searchOpen}
          >
            <form className={styles.searchForm} role="search" onSubmit={submitSearch}>
              <svg className={styles.searchFormIcon} width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={inputRef}
                type="search"
                className={styles.searchInput}
                placeholder="Search the site…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                tabIndex={searchOpen ? 0 : -1}
              />
              <button
                type="button"
                className={styles.searchClose}
                aria-label="Close search"
                onClick={() => { setSearchOpen(false); setQuery('') }}
                tabIndex={searchOpen ? 0 : -1}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </form>
          </div>

          <div id="et_mobile_nav_menu" className={searchOpen ? styles.navHidden : styles.navVisible}>
            <div className={`mobile_nav ${mobileOpen ? 'opened' : 'closed'}`}>
              <span className="select_page">Select Page</span>
              <span
                className="mobile_menu_bar mobile_menu_bar_toggle"
                role="button"
                tabIndex={0}
                onClick={() => setMobileOpen(o => !o)}
                onKeyDown={(e) => e.key === 'Enter' && setMobileOpen(o => !o)}
              />
              {mobileOpen && (
                <ul id="mobile_menu" className="et_mobile_menu">
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children et_first_mobile_item">
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
              )}
            </div>
          </div>
        </div>
      </div>

    </header>
  )
}
