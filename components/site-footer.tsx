'use client'

import Link from 'next/link'
import { useState, type FormEvent } from 'react'

const social = [
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'X', href: '#' },
]

const nav = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Wine', href: '#wine' },
  { label: 'Private Dining', href: '#private-dining' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export function SiteFooter() {
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-14 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="flex flex-col gap-6">
            <p className="font-serif text-3xl font-medium tracking-[0.25em] text-foreground">
              LUMIÈRE
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground text-pretty">
              A Michelin-starred dining room in the Old Quarter. Twelve tables,
              one seating, and a menu written by the season.
            </p>
            <div className="flex gap-6">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-col gap-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Explore
            </h3>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Newsletter
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Seasonal menus, cellar releases, and salon evenings. Once a
              month, nothing more.
            </p>
            {subscribed ? (
              <p className="font-serif text-lg italic text-foreground">
                Welcome to the list.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Email address"
                  className="border border-input bg-background px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-fit border border-primary/50 px-6 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row">
          <p>&copy; {new Date().getFullYear()} Lumière. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">12 Rue de la Lanterne &mdash; Old Quarter</p>
        </div>
      </div>
    </footer>
  )
}
