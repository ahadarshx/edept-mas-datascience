import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const max = scrollHeight - clientHeight
      setPct(max > 0 ? (scrollTop / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 z-[60] h-[2px] w-full bg-transparent">
      <div className="h-full bg-savings transition-[width] duration-150 ease-linear" style={{ width: `${pct}%` }} />
    </div>
  )
}
