import { Reveal } from './Reveal'

export function Timeline({ steps, icons = [] }) {
  return (
    <ol className="space-y-0">
      {steps.map((step, i) => {
        const Icon = icons[i]
        return (
          <li key={step.title} className="relative pl-12 pb-10 last:pb-0">
            {i !== steps.length - 1 && (
              <span className="absolute left-[15px] top-8 bottom-0 w-px bg-neutral-200" />
            )}
            <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white transition-transform duration-300 hover:scale-110">
              {Icon ? <Icon size={15} /> : <span className="font-mono text-xs">{i + 1}</span>}
            </span>
            <Reveal delay={i * 60} className="!duration-500">
              <h3 className="font-serif text-lg tracking-tight text-neutral-900">{step.title}</h3>
              <p className="mt-1 text-sm text-neutral-600 leading-relaxed max-w-xl">{step.body}</p>
            </Reveal>
          </li>
        )
      })}
    </ol>
  )
}
