import { useEffect, useRef, useState } from 'react'
import { Reveal } from './Reveal'

const IMAGES = [
  'images/chicago/business-district.jpg',
  'images/chicago/industry.jpg',
  'images/chicago/academic.jpg',
  'images/chicago/transit.jpg',
  'images/illinois-tech/16.jpg',
]

// Desktop: a wide, even split — sticky heading + landscape photo on the
// left, compact numbered points on the right (no tall scroll-pacing). Each
// point's own IntersectionObserver reports itself active once it crosses
// the viewport's vertical center, crossfading the left photo to match.
// Mobile: a horizontal snap-scroll card carousel instead of a vertical
// stack, since a side-by-side split has no room on a phone screen.
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
    <>
      {/* Desktop: wide even split */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-x-16">
        <div className="md:sticky md:top-24 md:h-fit">
          {heading}
          <div className="relative mt-8 aspect-[3/2] overflow-hidden rounded-2xl">
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

        <div className="divide-y-[0.5px] divide-neutral-200">
          {points.map((p, i) => {
            const Icon = icons[i]
            return (
              <div key={p.title} ref={(el) => (refs.current[i] = el)} className="py-7 first:pt-0 last:pb-0">
                <Reveal>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xl tracking-tight text-neutral-300">0{i + 1}</span>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-muted/40 text-accent">
                      <Icon size={18} strokeWidth={1.75} />
                    </span>
                    <h3 className="font-serif text-xl tracking-tight text-neutral-900">{p.title}</h3>
                  </div>
                  <p className="mt-2 pl-[3.25rem] text-neutral-600 leading-relaxed">{p.body}</p>
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>

      {/* Mobile: swipeable card carousel */}
      <div className="md:hidden">
        {heading}
        <div className="mt-8 -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {points.map((p, i) => {
            const Icon = icons[i]
            return (
              <div key={p.title} className="w-[82%] shrink-0 snap-center overflow-hidden rounded-2xl border-[0.5px] border-neutral-200 bg-white">
                <div className="aspect-[3/2] overflow-hidden">
                  <img src={IMAGES[i]} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <span className="font-mono text-lg tracking-tight text-neutral-300">0{i + 1}</span>
                  <div className="mt-2 flex items-center gap-2.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-muted/40 text-accent">
                      <Icon size={15} strokeWidth={1.75} />
                    </span>
                    <h3 className="font-serif text-lg tracking-tight text-neutral-900">{p.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{p.body}</p>
                </div>
              </div>
            )
          })}
        </div>
        <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-widest text-neutral-400">Swipe to explore &rarr;</p>
      </div>
    </>
  )
}
