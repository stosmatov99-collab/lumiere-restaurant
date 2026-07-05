import { Reveal } from '@/components/motion'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <div className="relative">
            <img
              src="/images/about-interior.png"
              alt="A velvet armchair beside a candlelit marble table in the Lumière dining room"
              className="aspect-[4/5] w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -right-6 -z-10 hidden h-full w-full border border-primary/20 lg:block"
            />
          </div>
        </Reveal>

        <div className="flex flex-col gap-8">
          <Reveal>
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-8 bg-primary/60" />
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
                About Lumière
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl font-light leading-[1.1] text-balance md:text-5xl lg:text-6xl">
              A room built for slow evenings
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col gap-6 text-base leading-relaxed text-muted-foreground">
              <p className="text-pretty">
                Lumière began with a simple conviction: that a meal, given
                enough care, becomes a form of light. Since 2011 we have kept
                twelve tables, one seating each evening, and a kitchen that
                answers only to the seasons.
              </p>
              <p className="text-pretty">
                Our philosophy is restraint. Nothing on the plate that does not
                belong there. Nothing in the room that competes with the
                conversation. Walnut, linen, candlelight — and the quiet
                confidence of a service team that anticipates rather than
                interrupts.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <dl className="mt-4 grid grid-cols-3 gap-8 border-t border-border pt-8">
              {[
                { value: '12', label: 'Tables' },
                { value: '01', label: 'Michelin Star' },
                { value: '14', label: 'Years' },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-serif text-4xl font-light text-primary md:text-5xl">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
