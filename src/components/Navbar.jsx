import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { EdeptLogo } from './Logo'
import { Button } from './Button'
import { nav } from '../data/content'

export function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `relative text-sm transition-colors duration-300 hover:text-accent after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100 ${
      isActive ? 'text-accent font-medium after:scale-x-100' : 'text-neutral-600'
    }`

  return (
    <header className="sticky top-0 z-50 border-b-[0.5px] border-neutral-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-2">
          <EdeptLogo className="h-6" />
        </NavLink>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button to="/contact" variant="primary" className="!py-2.5 !px-5 text-xs">
            Talk to a Counsellor
          </Button>
        </div>

        <button
          className="text-neutral-900 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden flex flex-col gap-1 border-t-[0.5px] border-neutral-200 px-6 py-4">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-2 text-sm ${isActive ? 'text-accent font-medium' : 'text-neutral-600'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button to="/contact" variant="primary" className="mt-3 w-full" onClick={() => setOpen(false)}>
            Talk to a Counsellor
          </Button>
        </nav>
      )}
    </header>
  )
}
