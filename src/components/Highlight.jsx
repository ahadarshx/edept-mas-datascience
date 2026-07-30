// A soft highlighter-marker effect (pale color block behind dark text) rather
// than bold/colored type — reads the same over dark photo or light backgrounds.
export function Highlight({ children, color = 'yellow' }) {
  const bg = color === 'blue' ? 'bg-accent-muted' : 'bg-savings-muted'
  return <mark className={`rounded px-1.5 py-0.5 ${bg} text-ink`}>{children}</mark>
}
