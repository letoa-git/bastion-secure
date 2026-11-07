import { useState } from 'react'
import { NAV } from '../data.js'
import Dropdown from './Dropdown.jsx'

export default function Header({ onAuth }) {
  const [menu, setMenu] = useState(false)
  const go = (m) => { setMenu(false); onAuth(m) }
  return (
    <header className="sticky top-0 z-50 border-b" style={{ background: 'var(--paper)', borderColor: 'var(--line)' }}>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#top" className="disp font-extrabold text-xl flex items-center gap-2">
          <svg width="26" height="26" viewBox="0 0 26 26"><path d="M13 2l9 3v7c0 6-4 10-9 12C8 22 4 18 4 12V5z" fill="var(--ink)" /><path d="M9 13l3 3 5-6" fill="none" stroke="var(--paper)" strokeWidth="2.2" /></svg>
          Bastion Secure
        </a>
        <nav className="hidden md:flex items-center gap-1">{NAV.map((n) => <Dropdown key={n.label} item={n} />)}</nav>
        <div className="hidden md:flex gap-2">
          <button className="ghost" onClick={() => go('login')}>Log in</button>
          <button className="btn" onClick={() => go('register')}>Create account</button>
        </div>
        <button className="md:hidden ghost" aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? 'Close' : 'Menu'}</button>
      </div>
      {menu && (
        <div className="md:hidden px-4 pb-4 grid gap-1">
          {NAV.map((n) => n.items ? (
            <div key={n.label}><p className="mute text-sm mt-2">{n.label}</p>
              {n.items.map(([t, h]) => <a key={t} href={h} onClick={() => setMenu(false)} className="block py-2">{t}</a>)}
            </div>
          ) : <a key={n.label} href={n.href} onClick={() => setMenu(false)} className="block py-2 font-semibold">{n.label}</a>)}
          <div className="flex gap-2 mt-2"><button className="ghost flex-1" onClick={() => go('login')}>Log in</button><button className="btn flex-1" onClick={() => go('register')}>Create account</button></div>
        </div>
      )}
    </header>
  )
}
