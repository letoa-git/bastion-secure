import { useEffect, useRef, useState } from 'react'

export default function Dropdown({ item }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const onClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('mousedown', onClick); document.removeEventListener('keydown', onKey) }
  }, [])

  if (!item.items) return <a href={item.href} className="px-3 py-2 rounded-lg hover:bg-black/5 font-semibold">{item.label}</a>

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button aria-expanded={open} aria-haspopup="true" onClick={() => setOpen(!open)} className="px-3 py-2 rounded-lg hover:bg-black/5 font-semibold flex items-center gap-1">
        {item.label}
        <svg width="12" height="12" viewBox="0 0 12 12" className={'transition-transform ' + (open ? 'rotate-180' : '')}><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
      </button>
      {open && (
        <ul className="absolute left-0 top-full pt-1 w-56 z-50">
          <div className="card p-2 shadow-lg">
            {item.items.map(([t, h]) => (
              <li key={t}><a href={h} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-black/5">{t}</a></li>
            ))}
          </div>
        </ul>
      )}
    </div>
  )
}
