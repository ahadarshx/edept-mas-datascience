import { Mail, Globe } from 'lucide-react'
import { Section, Eyebrow } from '../components/Section'
import { Button } from '../components/Button'
import { contact } from '../data/content'

const mailto = `mailto:${contact.email}?subject=${encodeURIComponent('MAS in Data Science: Enquiry')}`

export function Contact() {
  return (
    <Section className="text-center">
      <Eyebrow>Get in Touch</Eyebrow>
      <h1 className="mt-3 mx-auto max-w-xl font-serif tracking-tight text-balance text-4xl md:text-5xl leading-[1.1] text-neutral-900">
        Talk to an edept counsellor
      </h1>
      <p className="mt-4 mx-auto max-w-md text-neutral-600 leading-relaxed">
        Ask about eligibility, the {contact.intake} intake, or exactly how much you&rsquo;ll save with the 1+1 pathway.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button to="/apply" variant="savings">
          Apply Now
        </Button>
        <Button href={mailto} variant="outline">
          <Mail size={16} /> Email {contact.email}
        </Button>
      </div>
      <p className="mt-4 text-sm text-neutral-500">
        <a href={contact.siteUrl} className="inline-flex items-center gap-1.5 hover:text-accent">
          <Globe size={13} /> {contact.site}
        </a>
      </p>

      <div className="mt-16 inline-flex flex-col items-center gap-3">
        <div className="rounded-xl border-[0.5px] border-neutral-200 p-3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105">
          <img src="images/misc/qr-edept.png" alt={`QR code to ${contact.site}`} width="180" height="180" />
        </div>
        <p className="font-mono uppercase tracking-widest text-[10px] text-neutral-500">Scan to Apply</p>
      </div>
    </Section>
  )
}
