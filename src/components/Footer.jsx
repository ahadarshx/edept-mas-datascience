import { Link } from 'react-router-dom'
import { Globe, Mail, MessageCircle } from 'lucide-react'
import { EdeptLogo, PartnerLogo } from './Logo'
import { nav, contact } from '../data/content'

export function Footer() {
  return (
    <footer className="bg-ink text-neutral-400 border-t-[0.5px] border-neutral-800">
      <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-[2fr_1fr_1fr] gap-x-12 gap-y-10">
        <div>
          <EdeptLogo className="h-7" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            edept designs and delivers global hybrid Master&rsquo;s pathways in partnership with leading universities.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="rounded-lg bg-white px-3 py-2">
              <PartnerLogo name="illinois-tech" className="h-7" />
            </div>
            <div className="rounded-lg bg-white px-3 py-2">
              <PartnerLogo name="mahindra" className="h-7" />
            </div>
          </div>
        </div>

        <div>
          <p className="font-mono uppercase tracking-widest text-[10px] text-neutral-500">Program</p>
          <ul className="mt-4 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-neutral-50 transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono uppercase tracking-widest text-[10px] text-neutral-500">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={contact.siteUrl} className="flex items-center gap-2 hover:text-neutral-50 transition-colors">
                <Globe size={14} /> {contact.site}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-neutral-50 transition-colors">
                <Mail size={14} /> {contact.email}
              </a>
            </li>
            <li>
              <Link to="/contact" className="flex items-center gap-2 hover:text-neutral-50 transition-colors">
                <MessageCircle size={14} /> Talk to a Counsellor
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t-[0.5px] border-neutral-800">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-neutral-600">
          <p>&copy; {new Date().getFullYear()} edept. All rights reserved.</p>
          <p className="max-w-2xl">
            University names, logos, and rankings are used to describe an active academic partnership and remain subject to written brand approval from Illinois Institute of Technology and Mahindra University.
          </p>
        </div>
      </div>
    </footer>
  )
}
