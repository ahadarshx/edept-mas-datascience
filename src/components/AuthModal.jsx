import { useState } from 'react'
import { createPortal } from 'react-dom'
import { LogIn, LogOut, CheckCircle2, X } from 'lucide-react'
import { Button } from './Button'

// TODO(backend): implement POST /api/auth/send-code
//   Request:  { email: string }
//   Response: 200 { ok: true }
//   Should rate-limit per email/IP and email a 6-digit code valid ~10 minutes.
// Mocked here with a simulated delay so the flow is demonstrable without a
// real inbox — swap this out for a real fetch() once the endpoint exists.
async function sendCode(email) {
  await new Promise((r) => setTimeout(r, 900))
  return { ok: true }
}

// TODO(backend): implement POST /api/auth/verify-code
//   Request:  { email: string, code: string }
//   Response: 200 { ok: true, token: string } on success
//             400 { ok: false, error: string } on wrong/expired code
// Mocked: any well-formed 6-digit code is accepted, and a fake token is
// returned. Replace with a real fetch() once the endpoint exists; the token
// returned should then be stored and sent with subsequent requests instead
// of the bare email this mock uses as a stand-in session identifier.
async function verifyCode(email, code) {
  await new Promise((r) => setTimeout(r, 700))
  if (!/^\d{6}$/.test(code)) return { ok: false, error: 'Enter the 6-digit code we sent you.' }
  return { ok: true, token: `mock-${Date.now()}` }
}

export function AuthModal({ session, onLogin, onLogout }) {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState('email')
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  // The modal owns its own lifecycle independent of `session` — it must stay
  // open on the "done" screen after a successful login until the user
  // dismisses it, rather than vanishing the instant `session` flips truthy
  // (which would skip the confirmation entirely) or leaving stale open/step
  // state that could resurface if the user later signs out.
  function close() {
    setOpen(false)
    setStep('email')
    setEmail('')
    setCode('')
    setError('')
  }

  async function handleSendCode(e) {
    e.preventDefault()
    setBusy(true)
    setError('')
    await sendCode(email)
    setBusy(false)
    setStep('code')
  }

  async function handleVerify(e) {
    e.preventDefault()
    setBusy(true)
    setError('')
    const res = await verifyCode(email, code)
    setBusy(false)
    if (!res.ok) {
      setError(res.error)
      return
    }
    onLogin(email)
    setStep('done')
  }

  return (
    <>
      {session ? (
        <div className="flex flex-wrap items-center gap-3 rounded-lg border-[0.5px] border-neutral-200 bg-white px-4 py-2.5 text-sm">
          <CheckCircle2 size={16} className="shrink-0 text-accent" />
          <span className="text-neutral-600">
            Signed in as <span className="font-medium text-neutral-900">{session}</span> &middot; progress is being saved
          </span>
          <button type="button" onClick={onLogout} className="ml-auto flex items-center gap-1 text-xs text-neutral-500 transition-colors hover:text-neutral-900">
            <LogOut size={13} /> Sign out
          </button>
        </div>
      ) : (
        <Button type="button" variant="outline" onClick={() => setOpen(true)}>
          <LogIn size={16} /> Sign In to Save Progress
        </Button>
      )}

      {open &&
        createPortal(
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/60 backdrop-blur-sm px-4" onClick={close}>
            <div
              className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 md:p-8 shadow-[0_20px_60px_rgb(0,0,0,0.3)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-accent via-savings to-accent" />
              <button
                type="button"
                className="absolute right-4 top-4 text-neutral-400 transition-colors hover:text-neutral-900"
                onClick={close}
                aria-label="Close"
              >
                <X size={18} />
              </button>

              {step === 'email' && (
                <form onSubmit={handleSendCode}>
                  <p className="font-mono uppercase tracking-widest text-[10px] text-accent">Save Your Progress</p>
                  <h3 className="mt-2 font-serif text-2xl tracking-tight text-neutral-900">Sign in to continue later</h3>
                  <p className="mt-2 text-sm text-neutral-500">
                    New here or returning, it&rsquo;s the same step: we&rsquo;ll email you a one-time code, no password needed.
                  </p>
                  <input
                    type="email"
                    required
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="mt-6 w-full rounded-lg border-[0.5px] border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-muted/60"
                  />
                  <Button type="submit" variant="savings" className="mt-6 w-full justify-center" disabled={busy}>
                    {busy ? 'Sending…' : 'Send Code'}
                  </Button>
                </form>
              )}

              {step === 'code' && (
                <form onSubmit={handleVerify}>
                  <p className="font-mono uppercase tracking-widest text-[10px] text-accent">Check Your Email</p>
                  <h3 className="mt-2 font-serif text-2xl tracking-tight text-neutral-900">Enter your code</h3>
                  <p className="mt-2 text-sm text-neutral-500">
                    We sent a 6-digit code to <span className="font-medium text-neutral-900">{email}</span>.
                  </p>
                  <input
                    type="text"
                    inputMode="numeric"
                    autoFocus
                    maxLength={6}
                    required
                    value={code}
                    onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
                    placeholder="123456"
                    className="mt-6 w-full rounded-lg border-[0.5px] border-neutral-300 bg-white px-4 py-2.5 text-center text-lg tracking-[0.4em] text-neutral-900 placeholder:tracking-[0.4em] placeholder:text-neutral-300 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-muted/60"
                  />
                  {error && <p className="mt-2 text-xs text-danger">{error}</p>}
                  <Button type="submit" variant="savings" className="mt-6 w-full justify-center" disabled={busy}>
                    {busy ? 'Verifying…' : 'Verify & Sign In'}
                  </Button>
                  <button type="button" onClick={() => setStep('email')} className="mt-3 w-full text-center text-xs text-neutral-500 hover:text-neutral-900">
                    Use a different email
                  </button>
                </form>
              )}

              {step === 'done' && (
                <div className="py-6 text-center">
                  <CheckCircle2 size={40} className="mx-auto text-accent" />
                  <p className="mt-4 font-serif text-2xl tracking-tight text-neutral-900">You&rsquo;re signed in</p>
                  <p className="mt-2 text-sm text-neutral-500">Your progress will now be saved as you go, so you can pick up right where you left off.</p>
                  <Button type="button" variant="primary" className="mt-6 w-full justify-center" onClick={close}>
                    Continue
                  </Button>
                </div>
              )}
            </div>
          </div>,
          document.body,
        )}
    </>
  )
}
