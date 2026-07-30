import { ChevronDown } from 'lucide-react'
import { Reveal } from './Reveal'

export function FAQAccordion({ faqs }) {
  return (
    <div className="divide-y-[0.5px] divide-neutral-200 border-y-[0.5px] border-neutral-200">
      {faqs.map((item, i) => (
        <Reveal key={item.q} delay={i * 60} className="!duration-500">
          <details className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-accent">
              {item.q}
              <ChevronDown size={18} className="shrink-0 text-accent transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <p className="mt-3 max-w-2xl text-neutral-600 leading-relaxed">{item.a}</p>
          </details>
        </Reveal>
      ))}
    </div>
  )
}
