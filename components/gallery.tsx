'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { Stagger, StaggerItem } from '@/components/motion'

const images = [
  {
    src: '/images/gallery-plating.png',
    alt: 'A chef plating micro herbs with tweezers under warm light',
    className: 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto',
  },
  {
    src: '/images/gallery-table.png',
    alt: 'An overhead view of a candlelit fine dining table setting',
    className: 'aspect-square',
  },
  {
    src: '/images/gallery-bar.png',
    alt: 'The amber-lit cocktail bar with brass shelving',
    className: 'aspect-square',
  },
  {
    src: '/images/gallery-kitchen.png',
    alt: 'Chefs working over open flame in the Lumière kitchen',
    className: 'md:col-span-2 aspect-[2/1]',
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <SectionHeading
          eyebrow="Gallery"
          title="Evenings at Lumière"
          description="Fragments of the room, the kitchen, and the hours in between."
        />

        <Stagger className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-4" staggerDelay={0.1}>
          {images.map((image) => (
            <StaggerItem key={image.src} className={image.className}>
              <div className="group relative h-full w-full overflow-hidden">
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="size-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="pointer-events-none absolute inset-0 bg-background/20 transition-opacity duration-700 group-hover:opacity-0" />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
