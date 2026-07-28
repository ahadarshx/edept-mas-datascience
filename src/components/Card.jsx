export function Card({ className = '', children }) {
  return (
    <div
      className={`h-full rounded-xl border-[0.5px] border-neutral-200 bg-white p-6 transition-all duration-500 ease-[cubic-bezier(0.22,1.12,0.36,1)] hover:-translate-y-1 hover:rotate-1 hover:scale-[1.02] hover:border-neutral-400 hover:shadow-[0_16px_40px_rgb(0,0,0,0.08),0_0_24px_6px_rgba(18,83,159,0.07)] ${className}`}
    >
      {children}
    </div>
  )
}

export function PointCard({ title, body, icon: Icon }) {
  return (
    <Card className="flex flex-col">
      {Icon && (
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-muted/40 text-accent">
          <Icon size={18} strokeWidth={1.75} />
        </div>
      )}
      <h3 className="font-serif text-lg tracking-tight text-neutral-900">{title}</h3>
      <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{body}</p>
    </Card>
  )
}
