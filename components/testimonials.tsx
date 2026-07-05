import { SectionHeading } from '@/components/section-heading'
import { Stagger, StaggerItem } from '@/components/motion'

const testimonials = [
  {
    quote:
      'The rare restaurant where silence between courses feels intentional. Every plate arrived like a well-kept secret.',
    author: 'The Gastronome Review',
    role: 'Restaurant of the Year, 2025',
  },
  {
    quote:
      'Marchand cooks with a restraint most chefs spend a career searching for. The wagyu course alone justifies the pilgrimage.',
    author: 'Isabelle Fontaine',
    role: 'Food Critic, Le Journal',
  },
  {
    quote:
      'We came for an anniversary and left having redefined what a dinner can be. The sommelier read the table like a novel.',
    author: 'James and Anna Whitfield',
    role: 'Guests since 2018',
  },
]

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
      <SectionHeading eyebrow="Voices" title="What our guests carry home" />

      <Stagger className="mt-20 grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <StaggerItem key={testimonial.author}>
            <figure className="flex h-full flex-col justify-between gap-10 border border-border bg-card p-10 transition-colors duration-500 hover:border-primary/40">
              <blockquote className="font-serif text-xl font-light italic leading-relaxed text-foreground text-pretty">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption>
                <p className="text-sm font-medium text-foreground">
                  {testimonial.author}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {testimonial.role}
                </p>
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
