'use client'

import { motion } from 'framer-motion'
import { useState, type FormEvent } from 'react'
import { Reveal } from '@/components/motion'

export function Reservation() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="reservations" className="relative overflow-hidden border-y border-border">
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/images/gallery-table.png"
          alt=""
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 py-28 text-center lg:py-40">
        <Reveal>
          <div className="mb-6 flex items-center justify-center gap-4">
            <span aria-hidden="true" className="h-px w-8 bg-primary/60" />
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
              Reservations
            </p>
            <span aria-hidden="true" className="h-px w-8 bg-primary/60" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-serif text-4xl font-light leading-[1.1] text-balance md:text-5xl lg:text-6xl">
            Your table is waiting
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
            One seating each evening, Tuesday through Saturday. Reservations
            open on the first of each month for the month following.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          {submitted ? (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto mt-12 max-w-md border border-primary/40 bg-card/60 px-8 py-6 font-serif text-xl italic text-foreground backdrop-blur-sm"
            >
              Thank you. Our reservations team will be in touch within the day.
            </motion.p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-12 flex max-w-xl flex-col gap-4 sm:flex-row"
            >
              <label htmlFor="reservation-email" className="sr-only">
                Email address
              </label>
              <input
                id="reservation-email"
                type="email"
                required
                placeholder="Your email address"
                className="flex-1 border border-input bg-card/60 px-6 py-4 text-sm text-foreground placeholder:text-muted-foreground backdrop-blur-sm focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary px-10 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-opacity duration-300 hover:opacity-85"
              >
                Request a Table
              </button>
            </form>
          )}
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Or call us directly &mdash;{' '}
            <a
              href="tel:+15550142011"
              className="text-primary transition-opacity hover:opacity-75"
            >
              +1 (555) 014-2011
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
