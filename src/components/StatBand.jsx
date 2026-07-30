import { CountUp } from './CountUp'
import { GlowOrb } from './GlowOrb'
import { Reveal } from './Reveal'

// Solid ink band (never a busy photo) so the numbers stay legible,
// directly answers the brochure's "stats unreadable over photos" note.
export function StatBand({ items, source }) {
  return (
    <div className="relative overflow-hidden bg-ink">
      <GlowOrb className="top-1/2 -left-24 h-72 w-72 -translate-y-1/2" />
      <div className="relative mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="grid gap-x-8 gap-y-10 text-center" style={{ gridTemplateColumns: `repeat(${Math.min(items.length, 4)}, minmax(0, 1fr))` }}>
          {items.map((item, i) => {
            const Icon = item.icon
            const numeric = parseInt(item.value, 10)
            const suffix = item.value.replace(/^[0-9]+/, '')
            return (
              <Reveal key={item.label} delay={i * 80}>
                {Icon && <Icon size={20} className="mx-auto mb-2 text-savings" />}
                <p className="font-serif text-4xl md:text-5xl tracking-tight text-neutral-50">
                  {Number.isNaN(numeric) ? item.value : <CountUp value={numeric} suffix={suffix} />}
                </p>
                <p className="mt-2 text-sm text-neutral-400 leading-snug">{item.label}</p>
                {item.sub && <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-neutral-600">{item.sub}</p>}
              </Reveal>
            )
          })}
        </div>
        {source && <p className="mt-10 text-center font-mono text-[10px] uppercase tracking-widest text-neutral-500">{source}</p>}
      </div>
    </div>
  )
}
