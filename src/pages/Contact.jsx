import { MessageCircle, Mail, Globe } from 'lucide-react'
import { Section, Eyebrow } from '../components/Section'
import { Button } from '../components/Button'
import { BrochureButton } from '../components/BrochureButton'
import { contact } from '../data/content'

const mailto = `mailto:${contact.email}?subject=${encodeURIComponent('MAS in Data Science: Enquiry')}`
const whatsappUrl = `https://wa.me/${contact.whatsapp}`

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
        <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="outline">
          <MessageCircle size={16} /> Chat on WhatsApp
        </Button>
        <BrochureButton variant="outline" />
      </div>
      <p className="mt-6 text-sm text-neutral-500 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
        <a href={mailto} className="inline-flex items-center gap-1.5 hover:text-accent">
          <Mail size={13} /> {contact.email}
        </a>
        <a href={contact.siteUrl} className="inline-flex items-center gap-1.5 hover:text-accent">
          <Globe size={13} /> {contact.site}
        </a>
      </p>
    </Section>
  )
}
