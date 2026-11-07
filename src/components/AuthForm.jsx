import { useState } from 'react'

const LABELS = ['Too weak', 'Weak', 'Fair', 'Good', 'Strong']
function strength(p) {
  let s = 0
  if (p.length >= 8) s++
  if (p.length >= 12) s++
  if (/[A-Z]/.test(p) && /[a-z]/.test(p)) s++
  if (/\d/.test(p)) s++
  if (/[^A-Za-z0-9]/.test(p)) s++
  return Math.min(s, 4)
}

export default function AuthForm({ mode, setMode, onClose }) {
  const [f, setF] = useState({ name: '', email: '', pw: '', pw2: '' })
  const [err, setErr] = useState({})
  const [done, setDone] = useState(null)
  const reg = mode === 'register'
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const sc = strength(f.pw)

  const submit = (e) => {
    e.preventDefault()
    const x = {}
    if (reg && f.name.trim().length < 2) x.name = 'Enter your full name.'
    if (!/^\S+@\S+\.\S+$/.test(f.email)) x.email = 'Enter a valid email like name@company.com.'
    if (f.pw.length < 8) x.pw = 'Use at least 8 characters.'
    if (reg && f.pw !== f.pw2) x.pw2 = 'Passwords do not match.'
    setErr(x)
    // Demo only: connect this to your backend (e.g. POST /api/login) when you have one
    if (!Object.keys(x).length) setDone((reg ? 'Account created for ' : 'Logged in as ') + f.email + '. (Demo only: nothing is stored.)')
  }
  const Err = ({ k }) => err[k] ? <p role="alert" className="text-sm mt-1" style={{ color: 'var(--sig)' }}>{err[k]}</p> : null

  return (
    <form onSubmit={submit} noValidate className="grid gap-3">
      <div className="flex gap-1 p-1 rounded-xl" style={{ background: 'var(--paper)' }} role="tablist">
        {['login', 'register'].map((m) => (
          <button type="button" role="tab" aria-selected={mode === m} key={m} onClick={() => { setMode(m); setErr({}); setDone(null) }} className={'flex-1 py-2 rounded-lg font-semibold ' + (mode === m ? 'card' : 'mute')}>
            {m === 'login' ? 'Log in' : 'Create account'}
          </button>
        ))}
      </div>
      {reg && <div><label className="font-semibold text-sm" htmlFor="n">Full name</label><input id="n" className="field" value={f.name} onChange={set('name')} autoComplete="name" /><Err k="name" /></div>}
      <div><label className="font-semibold text-sm" htmlFor="e">Work email</label><input id="e" type="email" className="field" value={f.email} onChange={set('email')} autoComplete="email" /><Err k="email" /></div>
      <div>
        <label className="font-semibold text-sm" htmlFor="p">Password</label>
        <input id="p" type="password" className="field" value={f.pw} onChange={set('pw')} autoComplete={reg ? 'new-password' : 'current-password'} /><Err k="pw" />
        {reg && f.pw && (
          <div className="mt-2">
            <div className="flex gap-1">{[0, 1, 2, 3].map((i) => <span key={i} className="h-1.5 flex-1 rounded" style={{ background: i < sc ? (sc > 2 ? 'var(--ok)' : 'var(--sig)') : 'var(--line)' }} />)}</div>
            <p className="text-sm mute mt-1">Strength: {LABELS[sc]}</p>
          </div>
        )}
      </div>
      {reg && <div><label className="font-semibold text-sm" htmlFor="p2">Confirm password</label><input id="p2" type="password" className="field" value={f.pw2} onChange={set('pw2')} autoComplete="new-password" /><Err k="pw2" /></div>}
      <button className="btn mt-1">{reg ? 'Create account' : 'Log in'}</button>
      {done && <p role="status" className="text-sm font-semibold" style={{ color: 'var(--ok)' }}>{done}</p>}
      {onClose && <button type="button" className="mute text-sm underline" onClick={onClose}>Close</button>}
    </form>
  )
}
