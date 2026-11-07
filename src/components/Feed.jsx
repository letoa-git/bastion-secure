import { useState } from 'react'
import useFeed from '../hooks/useFeed.js'

export default function Feed() {
  const { items, live, loading } = useFeed()
  const [q, setQ] = useState('')
  const [onlyRansom, setOnlyRansom] = useState(false)

  const list = items.filter((v) =>
    (v.vendorProject + v.product + v.cveID + v.vulnerabilityName).toLowerCase().includes(q.toLowerCase()) &&
    (!onlyRansom || v.knownRansomwareCampaignUse === 'Known'))

  return (
    <div className="card p-4 md:p-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="live inline-block w-2.5 h-2.5 rounded-full" style={{ background: live ? 'var(--ok)' : 'var(--mute)' }} />
        <p className="font-semibold">{loading ? 'Loading feed…' : live ? 'Live: CISA Known Exploited Vulnerabilities' : 'Sample data (live request failed)'}</p>
      </div>
      <div className="flex flex-wrap gap-2 mb-3">
        <input className="field flex-1 min-w-[10rem]" placeholder="Search vendor, product or CVE" aria-label="Search vulnerabilities" value={q} onChange={(e) => setQ(e.target.value)} />
        <label className="ghost flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={onlyRansom} onChange={(e) => setOnlyRansom(e.target.checked)} />Used by ransomware</label>
      </div>
      <ul className="divide-y max-h-80 overflow-y-auto">
        {list.length === 0 && <li className="py-6 mute">No matches. Clear the search or the ransomware filter.</li>}
        {list.map((v) => (
          <li key={v.cveID} className="py-3 flex gap-3 justify-between" style={{ borderColor: 'var(--line)' }}>
            <div><p className="font-semibold">{v.vendorProject} {v.product}</p><p className="mute text-sm">{v.vulnerabilityName}</p></div>
            <div className="text-right shrink-0 text-sm">
              <p className="font-semibold">{v.cveID}</p><p className="mute">{v.dateAdded}</p>
              {v.knownRansomwareCampaignUse === 'Known' && <p className="font-semibold" style={{ color: 'var(--sig)' }}>Ransomware</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
