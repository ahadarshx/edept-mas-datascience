import { useEffect, useRef, useState } from 'react'

// Animates a number from 0 to `value` once it scrolls into view. No deps,
// IntersectionObserver + requestAnimationFrame is plenty for a handful of stat tiles.
export function CountUp({ value, prefix = '', suffix = '', duration = 1400, className = '' }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - (1 - progress) ** 3
          setDisplay(Math.round(value * eased))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [value, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString('en-US')}
      {suffix}
    </span>
  )
}
