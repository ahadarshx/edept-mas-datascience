import { Plane } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { tracks, cost, pgpName, degreeName } from '../data/content'

const TRACK_IMAGES = {
  india: 'images/mahindra-university/6.jpg',
  usa: 'images/illinois-tech/1.jpg',
}

// The pathway as a single travel document instead of two disconnected
// stops. The footer's credit bar (not the institutions/credits already
// named above) is the one thing worth adding beyond the two halves.
export function BoardingPass() {
  const [ref, visible] = useInView(0.4)
  const india = tracks.find((t) => t.key === 'india')
  const usa = tracks.find((t) => t.key === 'usa')
  const indiaPct = Math.round((cost.indiaPortionCredits / cost.fullCredits) * 100)

  return (
    <div ref={ref} className="mx-auto max-w-3xl">
      <div className="relative flex flex-col overflow-hidden rounded-2xl border-[0.5px] border-neutral-200 bg-white shadow-[0_20px_50px_rgb(0,0,0,0.08)] md:flex-row">
        <div className="flex-1 p-6 md:p-8">
          <div className="group mb-5 overflow-hidden rounded-xl">
            <img
              src={TRACK_IMAGES.india}
              alt={india.institution}
              className="h-32 w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 sm:h-36"
            />
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">Departure</p>
          <h3 className="mt-2 font-serif text-2xl tracking-tight text-neutral-900">Hyderabad, India</h3>
          <p className="mt-1 text-sm font-medium text-accent">{india.institution}</p>
          <p className="mt-4 font-mono text-xs text-neutral-500">{india.duration}</p>
        </div>

        <div className="relative flex items-center justify-center py-2 md:w-28 md:py-0">
          <span className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--bg-base)] md:-left-2 md:top-1/2 md:h-4 md:w-4 md:-translate-y-1/2 md:translate-x-0" />
          <span className="absolute bottom-0 left-1/2 h-4 w-4 -translate-x-1/2 translate-y-1/2 rounded-full bg-[var(--bg-base)] md:-right-2 md:left-auto md:top-1/2 md:bottom-auto md:h-4 md:w-4 md:-translate-y-1/2 md:translate-x-0" />
          <span className="h-full w-px border-l-2 border-dashed border-neutral-200 md:h-px md:w-full md:border-l-0 md:border-t-2" />
          <span className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white">
            <Plane size={16} className="rotate-90 md:rotate-0" />
          </span>
        </div>

        <div className="flex-1 p-6 text-right md:p-8">
          <div className="group mb-5 overflow-hidden rounded-xl">
            <img
              src={TRACK_IMAGES.usa}
              alt={usa.institution}
              className="h-32 w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 sm:h-36"
            />
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">Arrival</p>
          <h3 className="mt-2 font-serif text-2xl tracking-tight text-neutral-900">Chicago, USA</h3>
          <p className="mt-1 text-sm font-medium text-savings">{usa.institution}</p>
          <p className="mt-4 font-mono text-xs text-neutral-500">{usa.duration}</p>
        </div>
      </div>

      {/* Footer: the credit math animating in, plus the credentials line — the
          only things not already said in the two halves above. */}
      <div className="mt-[-1px] rounded-b-2xl border-[0.5px] border-t-0 border-dashed border-neutral-200 bg-neutral-50 px-6 py-5 sm:px-8">
        <div className="flex h-2 w-full overflow-hidden rounded-full bg-neutral-200">
          <div
            className="h-full bg-accent transition-[width] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ width: visible ? `${indiaPct}%` : '0%' }}
          />
          <div
            className="h-full bg-savings transition-[width] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ width: visible ? `${100 - indiaPct}%` : '0%', transitionDelay: visible ? '900ms' : '0ms' }}
          />
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
          <span>{cost.fullCredits} Total Credits</span>
          <span className="text-accent">
            {pgpName} + {degreeName}
          </span>
        </div>
      </div>
    </div>
  )
}
