import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.22,1.12,0.36,1)] hover:scale-[1.03] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60'

const variants = {
  primary: 'bg-accent text-white hover:bg-accent/90 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16),0_0_20px_4px_rgba(18,83,159,0.3)]',
  savings: 'bg-savings text-ink hover:bg-savings/90 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16),0_0_20px_4px_rgba(237,161,48,0.35)]',
  outline:
    'border-[0.5px] border-neutral-300 text-neutral-900 hover:border-neutral-500',
  ghost: 'text-neutral-900 hover:opacity-70',
}

export function Button({ to, href, variant = 'primary', className = '', children, ...props }) {
  const classes = `${base} ${variants[variant]} ${className}`
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
