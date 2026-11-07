import { useState } from 'react'
import { SERVICES, PLANS } from './data.js'
import Header from './components/Header.jsx'
import Feed from './components/Feed.jsx'
import AuthForm from './components/AuthForm.jsx'
import Modal from './components/Modal.jsx'

export default function App() {
  const [auth, setAuth] = useState(false)
  const [mode, setMode] = useState('login')
  const [sent, setSent] = useState(false)
  const open = (m) => { setMode(m); setAuth(true) }

  return (
    <div id="top">
      <Header onAuth={open} />
      <main>
        <section className="max-w-6xl mx-auto px-4 pt-14 pb-10 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-[1.02]">Attackers only need one open door. We close all of them.</h1>
            <p className="mute text-lg mt-5 max-w-xl">Bastion Secure tests, monitors and defends your business so a breach never becomes a headline. Start with a free security review.</p>
            <div className="flex flex-wrap gap-3 mt-7"><a href="#contact" className="btn">Book a free review</a><a href="#services" className="ghost">See our services</a></div>
          </div>
          <div id="feed"><h2 className="disp text-xl font-bold mb-2">Vulnerabilities being exploited right now</h2><Feed /></div>
        </section>

        <section id="services" className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-3xl sm:text-4xl font-bold max-w-2xl">Four ways we protect you</h2>
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {SERVICES.map(([t, d, p]) => (
              <article key={t} className="card p-6 flex gap-4">
                <svg width="40" height="40" viewBox="0 0 24 24" className="shrink-0" fill="none" stroke="var(--sig)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={p} /></svg>
                <div><h3 className="text-xl font-bold">{t}</h3><p className="mute mt-1">{d}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section id="plans" className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-3xl sm:text-4xl font-bold">Plans</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {PLANS.map(([n, w, pr, per, fs], i) => (
              <article key={n} className="card p-6" style={i === 1 ? { borderColor: 'var(--sig)', borderWidth: 2 } : {}}>
                <h3 className="text-xl font-bold">{n}</h3><p className="mute">{w}</p>
                <p className="disp text-4xl font-extrabold mt-4">{pr}<span className="text-base mute font-normal"> {per}</span></p>
                <ul className="mt-4 grid gap-2">{fs.map((x) => <li key={x} className="flex gap-2"><span style={{ color: 'var(--ok)' }}>✓</span>{x}</li>)}</ul>
                <button className={(i === 1 ? 'btn' : 'ghost') + ' w-full mt-6'} onClick={() => open('register')}>Choose {n}</button>
              </article>
            ))}
          </div>
        </section>

        <section id="auth" className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Your client portal</h2>
            <p className="mute mt-4 max-w-md">Log in to see scan reports, open tickets and download compliance evidence. New client? Create an account and watch the password meter.</p>
          </div>
          <div className="card p-5"><AuthForm mode={mode} setMode={setMode} /></div>
        </section>

        <section id="contact" className="max-w-3xl mx-auto px-4 py-14">
          <h2 className="text-3xl sm:text-4xl font-bold">Book a free security review</h2>
          <form className="card p-5 mt-6 grid gap-3" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
            <input required className="field" placeholder="Company name" aria-label="Company name" />
            <input required type="email" className="field" placeholder="Work email" aria-label="Work email" />
            <textarea className="field" rows="3" placeholder="What are you most worried about?" aria-label="Message" />
            <button className="btn">Request review</button>
            {sent && <p role="status" className="font-semibold" style={{ color: 'var(--ok)' }}>Request received. An analyst will reply within one business day. (Demo only.)</p>}
          </form>
        </section>
      </main>
      <footer className="border-t py-8 text-center mute text-sm" style={{ borderColor: 'var(--line)' }}>© 2026 Bastion Secure. Incident hotline: +1 555 0100</footer>
      {auth && <Modal mode={mode} setMode={setMode} close={() => setAuth(false)} />}
    </div>
  )
}
