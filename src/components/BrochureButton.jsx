import { useState } from 'react'
import { Download, X } from 'lucide-react'
import { Button } from './Button'
import { TextField } from './form/Field'

const BROCHURE_PATH = 'documents/mas-data-science-brochure.pdf'

export function BrochureButton({ variant = 'outline', className = '', children }) {
  const [open, setOpen] = useState(false)
  const [done, setDone] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: POST { name, email, whatsapp } to the CRM lead-capture endpoint once provided.
    setDone(true)
    const a = document.createElement('a')
    a.href = BROCHURE_PATH
    a.download = ''
    a.click()
  }

  return (
    <>
      <Button
        type="button"
        variant={variant}
        className={className}
        onClick={() => {
          setOpen(true)
          setDone(false)
        }}
      >
        <Download size={16} /> {children || 'Download Brochure'}
      </Button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/60 backdrop-blur-sm px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 md:p-8 shadow-[0_20px_60px_rgb(0,0,0,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-accent via-savings to-accent" />
            <button
              type="button"
              className="absolute right-4 top-4 text-neutral-400 transition-colors hover:text-neutral-900"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {done ? (
              <div className="py-6 text-center">
                <p className="font-serif text-2xl tracking-tight text-neutral-900">Your download has started</p>
                <p className="mt-2 text-sm text-neutral-500">
                  If it didn&rsquo;t start automatically,{' '}
                  <a href={BROCHURE_PATH} download className="text-accent underline">
                    click here
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <p className="font-mono uppercase tracking-widest text-[10px] text-accent">Program Brochure</p>
                <h3 className="mt-2 font-serif text-2xl tracking-tight text-neutral-900">Get the full brochure</h3>
                <p className="mt-2 text-sm text-neutral-500">Curriculum, costs, and admission timelines in one PDF.</p>

                <div className="mt-6 space-y-4">
                  <TextField name="name" label="Full Name" required placeholder="Your name" />
                  <TextField name="email" type="email" label="Email" required placeholder="you@example.com" />
                  <TextField name="whatsapp" label="WhatsApp Number" required placeholder="+91 98765 43210" />
                </div>

                <Button type="submit" variant="savings" className="mt-6 w-full justify-center">
                  Download Brochure
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
