import { Reveal } from '@/components/motion'
import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
  className?: string
}) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-5',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      <div className="flex items-center gap-4">
        <span aria-hidden="true" className="h-px w-8 bg-primary/60" />
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
          {eyebrow}
        </p>
        {align === 'center' && (
          <span aria-hidden="true" className="h-px w-8 bg-primary/60" />
        )}
      </div>
      <h2 className="font-serif text-4xl font-light leading-[1.1] text-balance md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'max-w-xl text-base leading-relaxed text-muted-foreground text-pretty',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}
