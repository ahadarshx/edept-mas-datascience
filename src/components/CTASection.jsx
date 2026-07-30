import { MessageCircle } from 'lucide-react'
import { Button } from './Button'
import { BrochureButton } from './BrochureButton'
import { GlowOrb } from './GlowOrb'
import { Reveal } from './Reveal'
import { contact } from '../data/content'

const whatsappUrl = `https://wa.me/${contact.whatsapp}`

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <GlowOrb className="-top-32 left-1/2 h-80 w-80 -translate-x-1/2" />
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono uppercase tracking-widest text-[10px] text-savings">
            Next Intake · {contact.intake}
          </p>
          <h2 className="mt-3 font-serif tracking-tight text-balance text-3xl md:text-4xl leading-[1.1] text-neutral-50">
            Ready to start your U.S. Master&rsquo;s journey?
          </h2>
          <p className="mt-4 mx-auto max-w-lg text-neutral-400 leading-relaxed">
            Talk to an edept counsellor about eligibility, the application timeline, and exactly how much you&rsquo;ll save with the 1+1 pathway.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/apply" variant="savings">
              Apply Now
            </Button>
            <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="outline" className="!text-neutral-50 !border-neutral-700 hover:!border-neutral-500">
              <MessageCircle size={16} /> Talk to a Counsellor
            </Button>
            <BrochureButton variant="outline" className="!text-neutral-50 !border-neutral-700 hover:!border-neutral-500" />
          </div>
          <p className="mt-6 text-sm text-neutral-500">
            {contact.site} &nbsp;·&nbsp; {contact.email}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
