import { ChevronDown } from 'lucide-react'
import { CountUp } from './CountUp'
import { cost } from '../data/content'

const fmt = (n) => `$${n.toLocaleString('en-US')}`

// Hovering expands the card to reveal the full fee breakdown, with a small
// bouncing chevron + label as the cue to invite the hover in the first place.
export function HeroSavingsCard({ className = '' }) {
  return (
    <div
      className={`group rounded-2xl bg-neutral-50/95 backdrop-blur shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.4)] ${className}`}
    >
      <div className="px-6 pt-5 pb-4">
        <p className="font-mono uppercase tracking-widest text-[10px] text-savings">You Save</p>
        <p className="mt-1 font-serif text-3xl tracking-tight text-neutral-900">
          <CountUp value={cost.savingUsd} prefix="$" />
        </p>
        <p className="text-xs text-neutral-500">vs. the full Illinois Tech program</p>
        <p className="mt-2 flex items-center gap-1 font-mono text-[9px] uppercase tracking-widest text-accent">
          Hover for full breakdown
          <ChevronDown size={11} className="animate-bounce transition-transform duration-300 group-hover:rotate-180" />
        </p>
      </div>

      <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:max-h-60 group-hover:opacity-100">
        <div className="space-y-2 border-t-[0.5px] border-neutral-200 px-6 py-4 font-mono text-xs tabular-nums">
          <Row label="Full program" value={fmt(cost.fullCost)} />
          <Row label="1+1: US portion" value={fmt(cost.usPortionCost)} />
          <Row label="1+1: India portion" value={`≈${fmt(cost.indiaPortionUsd)}`} />
          <Row label="1+1 total" value={`≈${fmt(cost.pathwayTotal)}`} strong />
        </div>
      </div>
    </div>
  )
}

function Row({ label, value, strong }) {
  return (
    <div className={`flex items-center justify-between ${strong ? 'font-semibold text-neutral-900' : 'text-neutral-500'}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  )
}
