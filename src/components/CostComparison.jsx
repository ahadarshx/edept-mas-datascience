import { useEffect, useRef, useState } from 'react'
import { cost } from '../data/content'
import { CountUp } from './CountUp'
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
          up to &asymp;{cost.allInSavingPct}% lower, all-in with living costs
        </p>
      </div>

      {/* Emphasis bar comparison: full program (context, gray) vs pathway (accent, blue) */}
      <div className="mt-14 space-y-6">
        <BarRow label="Full Program: Illinois Tech only" value={fmt(cost.fullCost)} pct={fullPct} tone="neutral" />
        <BarRow label="1+1 Pathway: India + Chicago" value={fmt(cost.pathwayTotal)} pct={pathwayPct} tone="accent" />
      </div>

      {/* Detail breakdown table */}
      <Reveal className="mt-14 overflow-x-auto rounded-xl border-[0.5px] border-neutral-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-[0.5px] border-neutral-200 text-left text-neutral-500">
              <th className="px-5 py-3 font-normal">Tuition, firm numbers</th>
              <th className="px-5 py-3 font-normal font-mono text-xs">Credits</th>
              <th className="px-5 py-3 font-normal font-mono text-xs text-right">Cost</th>
            </tr>
          </thead>
          <tbody className="[&>tr]:border-b-[0.5px] [&>tr]:border-neutral-100 last:[&>tr]:border-0">
            <tr className="transition-colors duration-300 hover:bg-neutral-50">
              <td className="px-5 py-3 text-neutral-900">Full program at Illinois Tech</td>
              <td className="px-5 py-3 font-mono tabular-nums text-neutral-600">
                {cost.fullCredits} &times; ${cost.perCredit}
              </td>
              <td className="px-5 py-3 font-mono tabular-nums text-right text-neutral-900">{fmt(cost.fullCost)}</td>
            </tr>
            <tr className="transition-colors duration-300 hover:bg-neutral-50">
              <td className="px-5 py-3 text-neutral-900">1+1: US portion (Illinois Tech)</td>
              <td className="px-5 py-3 font-mono tabular-nums text-neutral-600">
                {cost.usPortionCredits} &times; ${cost.perCredit}
              </td>
              <td className="px-5 py-3 font-mono tabular-nums text-right text-neutral-900">{fmt(cost.usPortionCost)}</td>
            </tr>
            <tr className="transition-colors duration-300 hover:bg-neutral-50">
              <td className="px-5 py-3 text-neutral-900">1+1: India portion ({cost.indiaPortionCredits} credits)</td>
              <td className="px-5 py-3 font-mono tabular-nums text-neutral-600">Mahindra University</td>
              <td className="px-5 py-3 font-mono tabular-nums text-right text-neutral-900">&asymp; {fmt(cost.indiaPortionUsd)}</td>
            </tr>
            <tr className="bg-accent-muted/30">
              <td className="px-5 py-3 font-semibold text-neutral-900">1+1 total</td>
              <td className="px-5 py-3" />
              <td className="px-5 py-3 font-mono tabular-nums text-right font-semibold text-neutral-900">
                &asymp; {fmt(cost.pathwayTotal)}
              </td>
            </tr>
          </tbody>
        </table>
      </Reveal>

      <p className="mt-6 text-sm text-neutral-500 max-w-2xl">
        The lever is those {cost.indiaPortionCredits} credits: at Illinois Tech they&rsquo;d cost {cost.indiaPortionCredits} &times; ${cost.perCredit} ={' '}
        {fmt(cost.indiaPortionCredits * cost.perCredit)}, but done with Mahindra University in India they cost approximately {fmt(cost.indiaPortionUsd)}.
        Living expenses on the USA track run approximately {cost.livingCostRange}.
      </p>
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
