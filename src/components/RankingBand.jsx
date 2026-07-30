import { illinoisTechRankings } from '../data/content'
import { CountUp } from './CountUp'
import { GlowOrb } from './GlowOrb'
import { Reveal } from './Reveal'

const rank = (r) => parseInt(r.replace('#', ''), 10)

export function RankingBand() {
  return (
    <div className="relative overflow-hidden bg-ink rounded-3xl px-6 py-14 md:py-16">
      <GlowOrb className="-top-20 -right-20 h-64 w-64" />
      <div className="relative grid sm:grid-cols-2 gap-x-8 gap-y-10 text-center max-w-2xl mx-auto">
        {illinoisTechRankings.headline.map((r, i) => (
          <Reveal key={r.label} delay={i * 100}>
            <p className="font-serif text-5xl md:text-6xl tracking-tight text-neutral-50">
              <CountUp value={rank(r.rank)} prefix="#" />
            </p>
            <p className="mt-3 text-sm text-neutral-300 leading-snug">{r.label}</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-neutral-500">{r.source}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 pt-10 border-t-[0.5px] border-neutral-800 grid sm:grid-cols-3 gap-x-6 gap-y-8 text-center max-w-3xl mx-auto">
        {illinoisTechRankings.supporting.map((r) => (
          <div key={r.label}>
            <p className="font-serif text-2xl tracking-tight text-neutral-400">{r.rank}</p>
            <p className="mt-2 text-xs text-neutral-500 leading-snug">{r.label}</p>
            <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-neutral-600">{r.source}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
