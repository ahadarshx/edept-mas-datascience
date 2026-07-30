import { Plane } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const PATH_D = 'M 40 120 Q 400 20 760 120'

// A flight-path style connector: the dashed line draws itself in, and the
// plane travels start-to-end along it, once, the first time it scrolls
// into view. Desktop only — an arced path reads as noise at phone widths.
export function JourneyPath() {
  const [ref, visible] = useInView(0.4)

  return (
    <div ref={ref} className="relative mx-auto mb-4 hidden max-w-3xl md:block">
      <svg viewBox="0 0 800 150" className="h-auto w-full overflow-visible">
        <path d={PATH_D} fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="2 10" strokeLinecap="round" className="text-neutral-300" />
        <path
          d={PATH_D}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-accent"
          style={{
            strokeDasharray: 1200,
            strokeDashoffset: visible ? 0 : 1200,
            transition: 'stroke-dashoffset 1.8s cubic-bezier(0.16,1,0.3,1)',
          }}
        />
        <circle cx="40" cy="120" r="6" className="fill-accent" />
        <circle cx="760" cy="120" r="6" className="fill-savings" />
      </svg>

      <div
        className="absolute left-0 top-0 text-accent transition-opacity duration-300"
        style={{
          offsetPath: `path('${PATH_D}')`,
          offsetRotate: 'auto',
          offsetDistance: visible ? '100%' : '0%',
          transition: 'offset-distance 1.8s cubic-bezier(0.16,1,0.3,1)',
          opacity: visible ? 1 : 0,
        }}
      >
        <Plane size={18} className="-translate-x-1/2 -translate-y-1/2 rotate-45" />
      </div>

      <div className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-widest text-neutral-500">
        <span>Hyderabad, India</span>
        <span>Chicago, USA</span>
      </div>
    </div>
  )
}
