import { CalendarClock, ChevronDown } from 'lucide-react'
import { contact, admissionJourney } from '../data/content'

function weeksUntil(dateStr) {
  const diffMs = new Date(dateStr).getTime() - Date.now()
  return Math.max(0, Math.ceil(diffMs / (7 * 24 * 60 * 60 * 1000)))
}

export function IntakeCard() {
  const weeks = weeksUntil(contact.intakeTargetDate)

  return (
    <details className="group rounded-2xl bg-ink px-6 py-6 open:pb-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
        <div className="flex gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
            <CalendarClock size={18} />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <p className="font-mono uppercase tracking-widest text-[10px] text-savings">Next Intake</p>
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-savings opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-savings" />
              </span>
            </div>
            <p className="mt-1 font-serif text-2xl tracking-tight text-neutral-50">{contact.intake}</p>
            {weeks > 0 && <p className="mt-1 text-xs text-neutral-400">&asymp;{weeks} weeks away &middot; applications open now</p>}
          </div>
        </div>
        <ChevronDown size={18} className="mt-2 shrink-0 text-neutral-500 transition-transform duration-300 group-open:rotate-180" />
      </summary>

      <div className="mt-5 space-y-3 border-t-[0.5px] border-neutral-800 pt-5">
        <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">What happens next</p>
        {admissionJourney.slice(0, 3).map((step, i) => (
          <div key={step.title} className="flex gap-3 text-sm">
            <span className="font-mono text-accent">0{i + 1}</span>
            <span className="text-neutral-300">{step.title}</span>
          </div>
        ))}
      </div>
    </details>
  )
}
