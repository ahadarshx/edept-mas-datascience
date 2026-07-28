import { useState } from 'react'
import { BrainCircuit, BarChart3, Cpu, Sparkles, Database, TrendingUp, RefreshCw, Briefcase } from 'lucide-react'
import { careerRoles, careerIndustries } from '../data/content'
import { Reveal } from './Reveal'

const ROLE_ICONS = {
  'Data Scientist': BrainCircuit,
  'Senior Data Analyst': BarChart3,
  'Machine Learning Engineer': Cpu,
  'AI Engineer': Sparkles,
  'Data Engineer': Database,
  'Product & Growth Analyst': TrendingUp,
  'Digital Transformation Analyst': RefreshCw,
  'Business Analytics Manager': Briefcase,
}

const SPRING = 'cubic-bezier(0.22,1.12,0.36,1)'

export function CareerOutcomes() {
  const [active, setActive] = useState('all')

  return (
    <div className="bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal>
          <p className="font-mono uppercase tracking-widest text-[10px] text-savings">Careers &amp; Industries</p>
          <h2 className="mt-3 font-serif tracking-tight text-balance text-3xl md:text-4xl leading-[1.1] text-neutral-50">
            Where this degree takes you
          </h2>
          <p className="mt-4 max-w-lg text-neutral-400 leading-relaxed">
            Pick an industry to see which roles it typically hires for, or browse every role a Data Science graduate is qualified for.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-8 flex flex-wrap gap-2">
          <button
            onClick={() => setActive('all')}
            style={{ transitionTimingFunction: SPRING }}
            className={`rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-widest transition-all duration-300 ${
              active === 'all' ? 'bg-accent text-white' : 'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-neutral-200'
            }`}
          >
            All Roles
          </button>
          {careerIndustries.map((ind) => (
            <button
              key={ind.key}
              onClick={() => setActive(ind.key)}
              style={{ transitionTimingFunction: SPRING }}
              className={`rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-widest transition-all duration-300 ${
                active === ind.key ? 'bg-accent text-white' : 'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-neutral-200'
              }`}
            >
              {ind.label}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {careerRoles.map((r, i) => {
            const Icon = ROLE_ICONS[r.role]
            const dimmed = active !== 'all' && !r.industries.includes(active)
            const matched = active !== 'all' && r.industries.includes(active)
            return (
              <Reveal key={r.role} delay={i * 40}>
                <div
                  style={{ transitionTimingFunction: SPRING }}
                  className={`h-full rounded-xl border-[0.5px] p-5 transition-all duration-500 ${
                    dimmed
                      ? 'border-white/5 bg-white/[0.02] opacity-30'
                      : matched
                        ? 'border-accent/60 bg-white/[0.06] opacity-100 shadow-[0_0_28px_4px_rgba(18,83,159,0.25)]'
                        : 'border-white/10 bg-white/[0.04] opacity-100 hover:border-white/25 hover:bg-white/[0.07]'
                  }`}
                >
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${matched ? 'bg-accent text-white' : 'bg-white/10 text-neutral-300'}`}>
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 font-serif text-lg tracking-tight text-neutral-50">{r.role}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-400">{r.blurb}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </div>
  )
}
