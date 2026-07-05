'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-svh items-end overflow-hidden"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0" aria-hidden="true">
        <img
          src="/images/hero-dining-room.png"
          alt=""
          className="size-full scale-105 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-40 lg:px-10 lg:pb-32"
      >
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-primary"
        >
          Michelin-Starred Fine Dining — Est. 2011
        </motion.p>

        <h1 className="max-w-4xl font-serif text-6xl font-light leading-[0.95] text-foreground text-balance md:text-8xl lg:text-9xl">
          {['Where light', 'meets flavour'].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.8 + i * 0.15, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease }}
          className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground text-pretty"
        >
          An intimate dining room of twelve tables, a kitchen guided by the
          seasons, and an evening you will carry with you long after the last
          course.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease }}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="#reservations"
            className="bg-primary px-10 py-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-opacity duration-300 hover:opacity-85"
          >
            Reserve a Table
          </Link>
          <Link
            href="#menu"
            className="border border-foreground/25 px-10 py-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
          >
            View the Menu
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        aria-hidden="true"
        className="absolute bottom-10 right-10 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.4, ease: 'easeInOut' }}
          className="h-16 w-px bg-gradient-to-b from-transparent via-primary to-transparent"
        />
      </motion.div>
    </section>
  )
}
