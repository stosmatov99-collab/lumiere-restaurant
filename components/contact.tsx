import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal, Stagger, StaggerItem } from '@/components/motion'

const details = [
  {
    icon: MapPin,
    label: 'Address',
    lines: ['12 Rue de la Lanterne', 'Old Quarter, District I'],
  },
  {
    icon: Clock,
    label: 'Hours',
    lines: ['Tuesday — Saturday', 'One seating, 7:00 PM'],
  },
  {
    icon: Phone,
    label: 'Telephone',
    lines: ['+1 (555) 014-2011'],
    href: 'tel:+15550142011',
  },
  {
    icon: Mail,
    label: 'Email',
    lines: ['reservations@lumiere.restaurant'],
    href: 'mailto:reservations@lumiere.restaurant',
  },
]

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Find your way to us"
            description="Tucked behind the lantern gates of the Old Quarter — look for the single warm light above the door."
            align="left"
          />

          <Stagger className="mt-14 grid gap-10 sm:grid-cols-2" staggerDelay={0.1}>
            {details.map((detail) => (
              <StaggerItem key={detail.label}>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <detail.icon className="size-4 text-primary" aria-hidden="true" />
                    <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                      {detail.label}
                    </h3>
                  </div>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="text-base leading-relaxed text-foreground transition-colors hover:text-primary"
                    >
                      {detail.lines.join(', ')}
                    </a>
                  ) : (
                    <p className="text-base leading-relaxed text-foreground">
                      {detail.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal delay={0.2}>
          <div className="relative h-80 w-full overflow-hidden border border-border lg:h-full lg:min-h-[28rem]">
            <iframe
              title="Map to Lumière restaurant"
              src="https://www.openstreetmap.org/export/embed.html?bbox=2.3288%2C48.8566%2C2.3488%2C48.8666&layer=mapnik"
              className="size-full grayscale invert-[0.9] hue-rotate-180 contrast-[0.85]"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 border border-primary/10" aria-hidden="true" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
