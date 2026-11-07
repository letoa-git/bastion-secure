import { useEffect } from 'react'
import AuthForm from './AuthForm.jsx'

export default function Modal({ mode, setMode, close }) {
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && close()
    document.addEventListener('keydown', k)
    return () => document.removeEventListener('keydown', k)
  }, [close])
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4" style={{ background: 'rgba(8,14,28,.6)' }} onMouseDown={(e) => e.target === e.currentTarget && close()}>
      <div className="card w-full max-w-md p-5 max-h-full overflow-y-auto" role="dialog" aria-modal="true" aria-label="Account">
        <AuthForm mode={mode} setMode={setMode} onClose={close} />
      </div>
    </div>
  )
}
