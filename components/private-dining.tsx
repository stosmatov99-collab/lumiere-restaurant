import Link from 'next/link'
import { Reveal } from '@/components/motion'

const features = [
  'A dedicated chef de cuisine and service team for the evening',
  'Bespoke menus written in consultation with Chef Marchand',
  'Cellar access with private sommelier pairings',
  'Seats up to fourteen guests at a single walnut table',
]

export function PrivateDining() {
  return (
    <section
      id="private-dining"
      className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40"
    >
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="flex flex-col gap-8">
          <Reveal>
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-8 bg-primary/60" />
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
                Private Dining
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl font-light leading-[1.1] text-balance md:text-5xl lg:text-6xl">
              The Salon Doré
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
              Behind the dining room, a single private salon — candlelit,
              soundproofed, and entirely yours. For anniversaries, quiet
              negotiations, or evenings that deserve their own room.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <ul className="flex flex-col gap-4 border-t border-border pt-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-px w-5 shrink-0 bg-primary"
                  />
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.4}>
            <Link
              href="#contact"
              className="inline-block w-fit border border-primary/50 px-10 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              Enquire About the Salon
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative">
            <img
              src="/images/private-dining.png"
              alt="The Salon Doré private dining room set for twelve guests under candlelight"
              className="aspect-[4/5] w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -left-6 -z-10 hidden h-full w-full border border-primary/20 lg:block"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
