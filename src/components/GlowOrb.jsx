// Purely decorative ambient light — a soft blurred gradient blob for depth on dark sections.
export function GlowOrb({ className = '' }) {
  return <div aria-hidden className={`pointer-events-none absolute rounded-full bg-gradient-to-br from-accent to-savings opacity-20 blur-3xl ${className}`} />
}
