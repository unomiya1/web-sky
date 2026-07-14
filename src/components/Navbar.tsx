import { useState } from 'react'
import type { NavLink } from '../types/homepage'
import Logo from './Logo'

interface NavbarProps {
  links: NavLink[]
  bgColor?: string
  logoHref?: string
}

export default function Navbar({ links, bgColor, logoHref }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header style={bgColor ? { backgroundColor: bgColor } : undefined} className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href={logoHref ?? '#home'} className="shrink-0 transition-opacity hover:opacity-90">
          <Logo />
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {menuOpen ? (
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>

        <ul
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } absolute left-0 right-0 top-full flex-col gap-4 bg-black/80 px-6 py-6 backdrop-blur-sm lg:static lg:flex lg:flex-row lg:items-center lg:gap-8 lg:bg-transparent lg:p-0 lg:backdrop-blur-none xl:gap-10`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-semibold tracking-[0.2em] text-white transition-colors hover:text-sky-teal"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
