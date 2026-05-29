import { useCallback, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { DEFAULT_PAGES } from '../data/pages'

export function idToPath(id) {
  if (!id || id === 'home') return '/'
  if (id === 'not-found') return '/404'
  return `/${id}`
}

export function pathToId(pathname) {
  const clean = (pathname || '/').replace(/\/+$/, '') || '/'
  if (clean === '/') return 'home'
  if (clean === '/404') return 'not-found'
  return clean.slice(1)
}

export function usePages() {
  const [pages, setPages] = useState(DEFAULT_PAGES)
  const routerNavigate = useNavigate()
  const location = useLocation()

  const activePageId = pathToId(location.pathname)
  const currentPage = useMemo(
    () => pages.find((p) => p.id === activePageId) || pages.find((p) => p.type === 'not-found') || pages[0],
    [pages, activePageId],
  )

  const navigate = useCallback((id) => {
    routerNavigate(idToPath(id))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [routerNavigate])

  const addPage = useCallback((page) => {
    setPages((prev) => [...prev, page])
    routerNavigate(idToPath(page.id))
  }, [routerNavigate])

  const removePage = useCallback((id) => {
    if (DEFAULT_PAGES.find((p) => p.id === id)) return
    setPages((prev) => prev.filter((p) => p.id !== id))
    if (activePageId === id) routerNavigate('/')
  }, [activePageId, routerNavigate])

  return { pages, currentPage, activePageId, navigate, addPage, removePage }
}
