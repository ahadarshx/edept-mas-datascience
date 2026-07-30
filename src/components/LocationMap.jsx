import { useState } from 'react'
import { tracks } from '../data/content'

// Percent positions of each campus on public/images/misc/world-map.svg
// (viewBox 595.95 x 313.53), found by overlaying a % grid over the
// rendered map and reading off the pin location by eye.
const MARKERS = [
  { key: 'india', x: 68, y: 47, color: 'accent' },
  { key: 'usa', x: 23, y: 27, color: 'savings' },
]

export function LocationMap() {
  const [active, setActive] = useState(null)
  const activeTrack = tracks.find((t) => t.key === active)

  return (
    <div>
      <div className="relative mx-auto w-full max-w-2xl" style={{ aspectRatio: '595.95 / 313.53' }}>
        <img
          src="images/misc/world-map.svg"
          alt="World map highlighting Mahindra University near Hyderabad, India and Illinois Institute of Technology in Chicago, USA"
          className="absolute inset-0 h-full w-full object-contain"
          draggable="false"
        />
        {MARKERS.map((m) => {
          const track = tracks.find((t) => t.key === m.key)
          const isActive = active === m.key
          const dot = m.color === 'accent' ? 'bg-accent' : 'bg-savings'
          return (
            <button
              key={m.key}
              type="button"
              onClick={() => setActive(isActive ? null : m.key)}
              className="group absolute -translate-x-1/2 -translate-y-full cursor-pointer p-1"
              style={{ left: `${m.x}%`, top: `${m.y}%` }}
            >
              <span
                className={`pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-white opacity-0 shadow-[0_4px_14px_rgb(0,0,0,0.2)] transition-opacity duration-200 group-hover:opacity-100 ${
                  isActive ? 'opacity-100' : ''
                } ${dot}`}
              >
                {track.institution}
              </span>
              <span className="relative flex h-4 w-4">
                <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${dot}`} />
                <span
                  className={`relative inline-flex h-4 w-4 rounded-full ring-[3px] ring-white transition-transform duration-300 group-hover:scale-125 ${
                    isActive ? 'scale-125' : ''
                  } ${dot}`}
                />
              </span>
            </button>
          )
        })}
      </div>

      <p className="mt-4 text-center text-sm text-neutral-500">
        {active ? 'Click again to close' : 'Click a marker to explore each campus'}
      </p>

      <div
        className={`mx-auto mt-4 max-w-xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          active ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {activeTrack && (
          <div className="rounded-xl border-[0.5px] border-neutral-200 bg-white p-6">
            <p className="font-mono uppercase tracking-widest text-[10px] text-accent">{activeTrack.label}</p>
            <h3 className="mt-2 font-serif text-2xl tracking-tight text-neutral-900">{activeTrack.institution}</h3>
            <p className="mt-1 text-sm font-medium text-savings">{activeTrack.duration}</p>
            <p className="mt-3 text-neutral-600 leading-relaxed">{activeTrack.body}</p>
          </div>
        )}
      </div>
    </div>
  )
}
