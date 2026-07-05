import { Reveal } from '@/components/motion'

export function Chef() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <div className="order-2 flex flex-col gap-10 lg:order-1">
            <Reveal>
              <div className="flex items-center gap-4">
                <span aria-hidden="true" className="h-px w-8 bg-primary/60" />
                <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
                  The Chef
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <blockquote className="font-serif text-3xl font-light italic leading-snug text-balance md:text-4xl lg:text-5xl">
                &ldquo;A dish should say in three bites what a paragraph cannot.
                Everything else is decoration.&rdquo;
              </blockquote>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-col gap-6 text-base leading-relaxed text-muted-foreground">
                <p className="text-pretty">
                  Chef Élise Marchand trained in Lyon and Copenhagen before
                  returning to open Lumière. Her cooking is built on memory —
                  the orchards of her childhood, the smoke of her
                  grandmother&apos;s kitchen — refined through two decades of
                  discipline.
                </p>
                <p className="text-pretty">
                  Each menu is written the week it is served. Producers are
                  named, seasons are obeyed, and no dish returns twice in the
                  same year.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div>
                <p className="font-serif text-2xl text-foreground">Élise Marchand</p>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Chef &amp; Founder
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal className="order-1 lg:order-2" delay={0.15}>
            <div className="relative">
              <img
                src="/images/chef-portrait.png"
                alt="Portrait of Chef Élise Marchand in the Lumière kitchen"
                className="aspect-[4/5] w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute -left-6 -top-6 -z-10 hidden h-full w-full border border-primary/20 lg:block"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
