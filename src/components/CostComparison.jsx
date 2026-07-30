import { useEffect, useRef, useState } from 'react'
import { cost } from '../data/content'
import { CountUp } from './CountUp'
import { Highlight } from './Highlight'
import { Reveal } from './Reveal'

const fmt = (n) => `$${n.toLocaleString('en-US')}`

const fullPct = 100
const pathwayPct = Math.round((cost.pathwayTotal / cost.fullCost) * 100)

export function CostComparison() {
  return (
    <div>
      {/* Hero figure */}
      <div className="text-center">
        <p className="font-mono uppercase tracking-widest text-[10px] text-savings">Total Savings</p>
        <p className="mt-3 font-serif tracking-tight text-6xl md:text-8xl leading-none text-neutral-900">
          <CountUp value={cost.savingUsd} prefix="$" />
        </p>
        <p className="mt-4 text-neutral-600">
          up to <Highlight>&asymp;{cost.allInSavingPct}% lower</Highlight> all-in, with living costs
        </p>
      </div>

      {/* Emphasis bar comparison: full program (context, gray) vs pathway (accent, blue) */}
      <div className="mt-14 space-y-6">
        <BarRow label="Full Program: Illinois Tech only" value={fmt(cost.fullCost)} pct={fullPct} tone="neutral" />
        <BarRow label="1+1 Pathway: India + Chicago" value={fmt(cost.pathwayTotal)} pct={pathwayPct} tone="accent" />
      </div>

      {/* Side-by-side firm-number comparison */}
      <div className="mt-14 grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-stretch">
        <Reveal className="rounded-2xl border-[0.5px] border-neutral-200 bg-white p-6 md:p-8">
          <p className="font-mono uppercase tracking-widest text-[10px] text-neutral-500">Full Program</p>
          <h3 className="mt-1 font-serif text-xl tracking-tight text-neutral-900">Illinois Tech Only</h3>
          <div className="mt-6 space-y-3 text-sm">
            <LineItem label={`${cost.fullCredits} credits × $${cost.perCredit}`} value={fmt(cost.fullCost)} />
          </div>
          <div className="mt-8 border-t-[0.5px] border-neutral-200 pt-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">Total</p>
            <p className="mt-1 font-serif text-3xl tracking-tight text-neutral-900">{fmt(cost.fullCost)}</p>
          </div>
        </Reveal>

        <div className="hidden md:flex items-center justify-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border-[0.5px] border-neutral-200 bg-white font-mono text-[10px] uppercase tracking-widest text-neutral-400">
            vs
          </div>
        </div>

        <Reveal delay={100} className="relative rounded-2xl border-[1.5px] border-accent bg-accent-muted/20 p-6 md:p-8">
          <span className="absolute -top-3 right-6 rounded-full bg-savings px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-ink shadow-[0_4px_12px_rgb(0,0,0,0.15)]">
            Save {fmt(cost.savingUsd)}
          </span>
          <p className="font-mono uppercase tracking-widest text-[10px] text-accent">1+1 Pathway</p>
          <h3 className="mt-1 font-serif text-xl tracking-tight text-neutral-900">India + Chicago</h3>
          <div className="mt-6 space-y-3 text-sm">
            <LineItem label={`Illinois Tech · ${cost.usPortionCredits} credits × $${cost.perCredit}`} value={fmt(cost.usPortionCost)} />
            <LineItem label={`Mahindra University · ${cost.indiaPortionCredits} credits`} value={`≈ ${fmt(cost.indiaPortionUsd)}`} />
          </div>
          <div className="mt-8 border-t-[0.5px] border-accent/25 pt-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent">Total</p>
            <p className="mt-1 font-serif text-3xl tracking-tight text-neutral-900">&asymp; {fmt(cost.pathwayTotal)}</p>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

function LineItem({ label, value }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <span className="text-neutral-600">{label}</span>
      <span className="font-mono tabular-nums text-neutral-900">{value}</span>
    </div>
  )
}

function BarRow({ label, value, pct, tone }) {
  const ref = useRef(null)
  const [filled, setFilled] = useState(false)
  const barColor = tone === 'accent' ? 'bg-accent' : 'bg-neutral-300'

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFilled(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      <div className="flex items-baseline justify-between text-sm">
        <span className="text-neutral-600">{label}</span>
        <span className="font-mono tabular-nums font-semibold text-neutral-900">{value}</span>
      </div>
      <div className="mt-2 h-4 w-full rounded-full bg-neutral-100">
        <div
          className={`h-4 rounded-full transition-[width] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${barColor}`}
          style={{ width: filled ? `${pct}%` : '0%' }}
        />
      </div>
    </div>
  )
}
