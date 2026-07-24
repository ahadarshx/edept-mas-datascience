import { useInView } from '../hooks/useInView'

export function Section({ id, className = '', containerClassName = '', children }) {
  const [ref, visible] = useInView(0.1)

  return (
    <section id={id} className={`py-16 md:py-32 ${className}`}>
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        } ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  )
}

export function Eyebrow({ children }) {
  return (
    <p className="font-mono uppercase tracking-widest text-[10px] text-accent">{children}</p>
  )
}

export function SectionHeading({ eyebrow, title, body, className = '' }) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 font-serif tracking-tight text-balance text-3xl md:text-4xl leading-[1.1] text-neutral-900">
        {title}
      </h2>
      {body && <p className="mt-4 text-neutral-600 leading-relaxed">{body}</p>}
    </div>
  )
}
