'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { Stagger, StaggerItem } from '@/components/motion'

const dishes = [
  {
    name: 'Hokkaido Scallop',
    description: 'Saffron velouté, sea fennel, gold leaf',
    image: '/images/dish-scallops.png',
    course: 'First Movement',
  },
  {
    name: 'A5 Wagyu',
    description: 'Black truffle, smoked jus, charred allium',
    image: '/images/dish-wagyu.png',
    course: 'The Centre',
  },
  {
    name: 'Noir Sphère',
    description: 'Single-origin chocolate, raspberry, gold dust',
    image: '/images/dish-dessert.png',
    course: 'Final Note',
  },
]

export function SignatureDishes() {
  return (
    <section id="menu" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
      <SectionHeading
        eyebrow="Signature Dishes"
        title="Compositions of the season"
        description="Three moments from the current menu — each written for this season alone, and retired when it passes."
      />

      <Stagger className="mt-20 grid gap-10 md:grid-cols-3 md:gap-8">
        {dishes.map((dish) => (
          <StaggerItem key={dish.name}>
            <motion.article whileHover="hover" initial="rest" animate="rest" className="group">
              <div className="relative overflow-hidden">
                <motion.img
                  src={dish.image}
                  alt={`${dish.name} — ${dish.description}`}
                  className="aspect-[3/4] w-full object-cover"
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.06 },
                  }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <p className="absolute left-5 top-5 text-[10px] font-medium uppercase tracking-[0.3em] text-foreground/80">
                  {dish.course}
                </p>
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-4 border-b border-border pb-5">
                <div>
                  <h3 className="font-serif text-2xl font-light text-foreground transition-colors duration-300 group-hover:text-primary">
                    {dish.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {dish.description}
                  </p>
                </div>
              </div>
            </motion.article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
