import Link from 'next/link'
import { SectionHeading } from '@/components/section-heading'
import { Reveal, Stagger, StaggerItem } from '@/components/motion'

const courses = [
  {
    number: 'I',
    name: 'Amuse-Bouche',
    detail: 'Oyster leaf, cultured cream, caviar',
  },
  {
    number: 'II',
    name: 'The Garden',
    detail: 'Heritage beets, aged goat curd, hazelnut praline',
  },
  {
    number: 'III',
    name: 'From the Coast',
    detail: 'Hokkaido scallop, saffron velouté, sea fennel',
  },
  {
    number: 'IV',
    name: 'The Forest',
    detail: 'Wild mushroom consommé, chestnut, black garlic',
  },
  {
    number: 'V',
    name: 'The Centre',
    detail: 'A5 wagyu, black truffle, smoked jus',
  },
  {
    number: 'VI',
    name: 'Between Courses',
    detail: 'Champagne granité, elderflower, white peach',
  },
  {
    number: 'VII',
    name: 'Noir Sphère',
    detail: 'Single-origin chocolate, raspberry, gold dust',
  },
]

export function TastingMenu() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-4xl px-6 py-28 lg:py-40">
        <SectionHeading
          eyebrow="Seasonal Tasting Menu"
          title="Seven courses, one evening"
          description="Our autumn menu, served nightly to the entire room. Wine pairings are composed course by course by our sommelier."
        />

        <Stagger className="mt-20 flex flex-col" staggerDelay={0.08}>
          {courses.map((course) => (
            <StaggerItem key={course.number}>
              <div className="group flex items-baseline gap-6 border-b border-border py-7 transition-colors duration-300 md:gap-10">
                <span className="w-8 shrink-0 font-serif text-lg italic text-primary/70">
                  {course.number}
                </span>
                <div className="flex flex-1 flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
                  <h3 className="font-serif text-2xl font-light text-foreground transition-colors duration-300 group-hover:text-primary">
                    {course.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-right">
                    {course.detail}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.2} className="mt-16 flex flex-col items-center gap-6 text-center">
          <p className="text-sm text-muted-foreground">
            Tasting menu 195 &mdash; Wine pairing 120
          </p>
          <Link
            href="#reservations"
            className="border border-primary/50 px-10 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            Reserve Your Evening
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
