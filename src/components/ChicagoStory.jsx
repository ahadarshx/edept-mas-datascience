import { useEffect, useRef, useState } from 'react'

const IMAGES = [
  'images/chicago/business-district.jpg',
  'images/chicago/industry.jpg',
  'images/chicago/academic.jpg',
  'images/chicago/transit.jpg',
  'images/illinois-tech/16.jpg',
]

// Desktop: a wide, even split. The left column (heading + a short landscape
// photo) stays vertically centered in the viewport while sticky. On the
// right, only the point closest to the viewport's center is at full
// opacity — the rest dim — so exactly one point has focus at a time,
// crossfading the left photo to match. No numbers or divider lines, just
// icon + text. Mobile: a horizontal snap-scroll card carousel instead,
// since a side-by-side split has no room on a phone screen.
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
      {/* Desktop: wide even split. Left column centers itself in the viewport
          while sticky, with a shorter photo. Right column keeps only the
          in-focus point at full opacity as you scroll, the rest dimmed. */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-x-16">
        <div className="md:sticky md:top-24 md:flex md:min-h-[calc(100vh-6rem)] md:flex-col md:justify-center">
          {heading}
          <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl">
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

        <div>
          {points.map((p, i) => {
            const Icon = icons[i]
            const isActive = active === i
            return (
              <div key={p.title} ref={(el) => (refs.current[i] = el)} className="flex min-h-[40vh] flex-col justify-center">
                <div className={`transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-30'}`}>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-muted/40 text-accent">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 font-serif text-2xl tracking-tight text-neutral-900">{p.title}</h3>
                  <p className="mt-2 max-w-sm text-neutral-600 leading-relaxed">{p.body}</p>
                </div>
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
