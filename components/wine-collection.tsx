'use client'

import { motion } from 'framer-motion'
import { Reveal, Stagger, StaggerItem } from '@/components/motion'

const wines = [
  {
    region: 'Burgundy, France',
    name: 'Domaine de la Côte Dorée',
    vintage: '2009',
    note: 'Grand Cru — cellared since release',
  },
  {
    region: 'Piedmont, Italy',
    name: 'Barolo Riserva Lucerna',
    vintage: '2013',
    note: 'Single vineyard, 40-year-old vines',
  },
  {
    region: 'Mosel, Germany',
    name: 'Riesling Goldtröpfchen',
    vintage: '2017',
    note: 'Auslese — vertical of six vintages',
  },
  {
    region: 'Champagne, France',
    name: 'Blanc de Blancs Lumen',
    vintage: '2012',
    note: 'Late disgorged, house exclusive',
  },
]

export function WineCollection() {
  return (
    <section id="wine" className="relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/images/wine-cellar.png"
          alt=""
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <div className="flex flex-col gap-8">
            <Reveal>
              <div className="flex items-center gap-4">
                <span aria-hidden="true" className="h-px w-8 bg-primary/60" />
                <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
                  The Cellar
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-4xl font-light leading-[1.1] text-balance md:text-5xl lg:text-6xl">
                Eleven hundred bottles, kept in the dark
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
                Our cellar is curated by sommelier Tomas Ferreira around small
                growers, old vines, and patience. Every pairing is poured with
                a story — ask, and he will tell it.
              </p>
            </Reveal>
          </div>

          <Stagger className="flex flex-col" staggerDelay={0.1}>
            {wines.map((wine) => (
              <StaggerItem key={wine.name}>
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group cursor-default border-b border-foreground/15 py-7"
                >
                  <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-primary">
                    {wine.region}
                  </p>
                  <div className="mt-2 flex items-baseline justify-between gap-6">
                    <h3 className="font-serif text-2xl font-light text-foreground transition-colors duration-300 group-hover:text-primary md:text-3xl">
                      {wine.name}
                    </h3>
                    <span className="font-serif text-xl italic text-muted-foreground">
                      {wine.vintage}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground">{wine.note}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
