import { useInView } from '../hooks/useInView'

// Fades + lifts content into place the first time it scrolls into view.
export function Reveal({ children, className = '', delay = 0 }) {
  const [ref, visible] = useInView(0.15)

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  )
}
