import { useCallback, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header                from './components/Header/Header'
import Footer                from './components/Footer/Footer'
import HomePage              from './pages/HomePage/HomePage'
import AboutPage             from './pages/AboutPage/AboutPage'
import CareersPage           from './pages/CareersPage/CareersPage'
import ContactPage           from './pages/ContactPage/ContactPage'
import OracleAppsPage        from './pages/OracleAppsPage/OracleAppsPage'
import OracleIntegrationPage from './pages/OracleIntegrationPage/OracleIntegrationPage'
import OracleEbsPage         from './pages/OracleEbsPage/OracleEbsPage'
import NotFoundPage          from './pages/NotFoundPage/NotFoundPage'
import GenericPage           from './pages/GenericPage/GenericPage'
import { usePages, idToPath } from './hooks/usePages'

export default function App() {
  const { pages, activePageId, navigate } = usePages()
  const [searchTerm, setSearchTerm] = useState('')
  const location = useLocation()

  const handleSearch = useCallback((rawQuery) => {
    const query = String(rawQuery || '').trim().toLowerCase()
    if (!query) return

    const match = pages.find((p) => {
      if (p.type === 'not-found') return false
      const hayLabel = (p.label || '').toLowerCase()
      const hayKeywords = (p.keywords || []).map((k) => k.toLowerCase())
      return hayLabel.includes(query) || hayKeywords.some((k) => k.includes(query) || query.includes(k))
    })

    setSearchTerm(rawQuery)
    navigate(match ? match.id : 'not-found')
  }, [pages, navigate])

  const goHome = useCallback(() => {
    setSearchTerm('')
    navigate('home')
  }, [navigate])

  const homePage     = pages.find((p) => p.id === 'home')
  const contactPage  = pages.find((p) => p.id === 'contact')

  return (
    <div id="page-container" style={{ paddingTop: '80px', overflowY: 'hidden' }} className="et-animated-content">
      <div id="et-boc" className="et-boc">
        <Header
          pages={pages}
          activePageId={activePageId}
          onNavigate={navigate}
          onSearch={handleSearch}
        />

        <div id="et-main-area">
          <div id="main-content" key={location.pathname}>
            <Routes>
              <Route path="/" element={<HomePage content={homePage?.content} onNavigate={navigate} />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact" element={<ContactPage content={contactPage?.content} />} />
              <Route path="/oracle-apps-cloud" element={<OracleAppsPage />} />
              <Route path="/oracle-integration-cloud" element={<OracleIntegrationPage />} />
              <Route path="/oracle-ebusiness-suite" element={<OracleEbsPage />} />
              {pages
                .filter((p) => !['home','about','careers','contact','oracle-apps-cloud','oracle-integration-cloud','oracle-ebusiness-suite'].includes(p.id) && p.type !== 'not-found')
                .map((p) => (
                  <Route key={p.id} path={idToPath(p.id)} element={<GenericPage content={p.content} />} />
                ))}
              <Route path="*" element={<NotFoundPage searchTerm={searchTerm} onGoHome={goHome} />} />
            </Routes>
          </div>

          <Footer pages={pages} onNavigate={navigate} />
        </div>
      </div>
    </div>
  )
}
