import { useEffect, useRef, useState } from 'react'
import { Reveal } from './Reveal'

const IMAGES = [
  'images/chicago/business-district.jpg',
  'images/chicago/industry.jpg',
  'images/chicago/academic.jpg',
  'images/chicago/transit.jpg',
  'images/illinois-tech/16.jpg',
]

// A sticky left column (heading + a photo that crossfades by theme) next to
// a tall right column of numbered sections. Each section's own
// IntersectionObserver reports itself active once it crosses the vertical
// center of the viewport, driving which photo shows on the left.
export function ChicagoStory({ heading, points, icons }) {
  const [active, setActive] = useState(0)
  const refs = useRef([])

  useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return null
      const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setActive(i), {
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0,
      })
      observer.observe(el)
      return observer
    })
    return () => observers.forEach((o) => o && o.disconnect())
  }, [])

  return (
    <div className="grid gap-x-16 md:grid-cols-[minmax(0,340px)_1fr]">
      <div className="md:sticky md:top-24 md:h-fit">
        {heading}
        <div className="relative mt-8 hidden aspect-[4/5] overflow-hidden rounded-2xl md:block">
          {IMAGES.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                active === i ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
        </div>
      </div>

      <div className="mt-12 md:mt-0">
        {points.map((p, i) => {
          const Icon = icons[i]
          return (
            <div
              key={p.title}
              ref={(el) => (refs.current[i] = el)}
              className="flex flex-col justify-center py-10 md:min-h-[60vh] md:py-0"
            >
              <div className="mb-5 overflow-hidden rounded-xl aspect-[16/10] md:hidden">
                <img src={IMAGES[i]} alt="" className="h-full w-full object-cover" />
              </div>
              <Reveal>
                <p className="font-mono text-5xl tracking-tight text-neutral-200 md:text-6xl">0{i + 1}</p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-muted/40 text-accent">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <h3 className="font-serif text-2xl tracking-tight text-neutral-900">{p.title}</h3>
                </div>
                <p className="mt-3 max-w-md text-neutral-600 leading-relaxed">{p.body}</p>
              </Reveal>
            </div>
          )
        })}
      </div>
    </div>
  )
}
