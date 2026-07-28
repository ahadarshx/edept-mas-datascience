import { MessageCircle } from 'lucide-react'
import { Button } from './Button'
import { Reveal } from './Reveal'
import { contact } from '../data/content'

export function CTASection() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 grid md:grid-cols-[2fr_1fr] gap-x-12 gap-y-10 items-center">
        <Reveal>
          <p className="font-mono uppercase tracking-widest text-[10px] text-savings">
            Next Intake · {contact.intake}
          </p>
          <h2 className="mt-3 font-serif tracking-tight text-balance text-3xl md:text-4xl leading-[1.1] text-neutral-50">
            Ready to save on your U.S. Master&rsquo;s degree?
          </h2>
          <p className="mt-4 max-w-lg text-neutral-400 leading-relaxed">
            Talk to an edept counsellor about eligibility, the application timeline, and exactly how much you&rsquo;ll save with the 1+1 pathway.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/apply" variant="savings">
              Apply Now
            </Button>
            <Button href={`mailto:${contact.email}`} variant="outline" className="!text-neutral-50 !border-neutral-700 hover:!border-neutral-500">
              <MessageCircle size={16} /> Talk to a Counsellor
            </Button>
          </div>
          <p className="mt-6 text-sm text-neutral-500">
            {contact.site} &nbsp;·&nbsp; {contact.email}
          </p>
        </Reveal>

        <Reveal delay={150} className="flex flex-col items-center gap-3 justify-self-center md:justify-self-end">
          <div className="rounded-xl bg-white p-3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105">
            <img src="images/misc/qr-edept.png" alt={`QR code to ${contact.site}`} width="140" height="140" />
          </div>
          <p className="font-mono uppercase tracking-widest text-[10px] text-neutral-500">Scan to apply</p>
        </Reveal>
      </div>
    </section>
  )
}
