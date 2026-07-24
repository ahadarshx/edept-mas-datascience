import { useEffect, useRef, useState } from 'react'

// Fires once, the first time the element scrolls into view.
export function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}
