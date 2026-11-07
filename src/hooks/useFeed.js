import { useEffect, useState } from 'react'
import { SAMPLE_FEED } from '../data.js'

// API: CISA Known Exploited Vulnerabilities catalog (public JSON, no key needed)
const URL = 'https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json'

export default function useFeed() {
  const [state, setState] = useState({ items: SAMPLE_FEED, live: false, loading: true })
  useEffect(() => {
    let cancelled = false
    fetch(URL)
      .then((r) => { if (!r.ok) throw new Error(r.status); return r.json() })
      .then((d) => {
        if (cancelled) return
        const items = [...d.vulnerabilities].sort((a, b) => b.dateAdded.localeCompare(a.dateAdded)).slice(0, 30)
        setState({ items, live: true, loading: false })
      })
      .catch(() => !cancelled && setState((s) => ({ ...s, loading: false })))
    return () => { cancelled = true }
  }, [])
  return state
}
