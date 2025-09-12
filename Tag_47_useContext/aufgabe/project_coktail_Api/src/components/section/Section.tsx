import type { ElementType } from "react"

// Helper zum Kombinieren von Klassen
function classNames(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ")
}

// Vordefinierte Abstände
const sectionPadding = {
  none: "py-0",
  small: "py-8",
  medium: "py-14 md:py-16",
  large: "py-20 md:py-28",
}

type TextAlignment = "left" | "center" | "right"

type SectionProps<T extends ElementType> = {
  as?: T
  id?: string
  className?: string
  contentClassName?: string

  // Layout
  padding?: keyof typeof sectionPadding
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full"
  fullHeight?: boolean
  scrollSnap?: boolean
  withRoundedCorners?: boolean
  withShadow?: boolean

  // Hintergrund
  backgroundColor?: string
  backgroundImageUrl?: string
  backgroundImageClass?: string
  overlayClass?: string
  gradientOverlayClass?: string

  // Inhalt
  kickerText?: React.ReactNode
  headline?: React.ReactNode
  subHeadline?: React.ReactNode
  textAlignment?: TextAlignment
  actionElements?: React.ReactNode

  children?: React.ReactNode
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children">

function mapAlignment(alignment: TextAlignment = "left") {
  switch (alignment) {
    case "center":
      return { text: "text-center", items: "items-center", justify: "justify-center" }
    case "right":
      return { text: "text-right", items: "items-end", justify: "justify-end" }
    default:
      return { text: "text-left", items: "items-start", justify: "justify-start" }
  }
}

export function Section<T extends ElementType = "section">({
  as,
  id,
  className,
  contentClassName,
  padding = "large",
  maxWidth = "xl",
  fullHeight = false,
  scrollSnap = false,
  withRoundedCorners = false,
  withShadow = false,
  backgroundColor,
  backgroundImageUrl,
  backgroundImageClass = "bg-cover bg-center",
  overlayClass,
  gradientOverlayClass,
  kickerText,
  headline,
  subHeadline,
  textAlignment = "left",
  actionElements,
  children,
  ...rest
}: SectionProps<T>) {
  const Tag = (as || "section") as ElementType
  const alignment = mapAlignment(textAlignment)

  return (
    <Tag
      id={id}
      className={classNames(
        "relative w-full",
        sectionPadding[padding],
        scrollSnap && "snap-start",
        fullHeight && "min-h-screen",
        withRoundedCorners && "rounded-3xl overflow-hidden",
        withShadow && "shadow-xl",
        backgroundColor,
        backgroundImageUrl && backgroundImageClass,
        className
      )}
      style={backgroundImageUrl ? { backgroundImage: `url(${backgroundImageUrl})` } : undefined}
      {...(rest as any)}>
      {(overlayClass || gradientOverlayClass) && (
        <div className="pointer-events-none absolute inset-0">
          {overlayClass && <div className={classNames("absolute inset-0", overlayClass)} />}
          {gradientOverlayClass && <div className={classNames("absolute inset-0", gradientOverlayClass)} />}
        </div>
      )}

      <div
        className={classNames(
          "relative mx-auto px-5 sm:px-6 md:px-8",
          maxWidth === "full"
            ? "max-w-none"
            : maxWidth === "3xl"
            ? "max-w-7xl"
            : maxWidth === "2xl"
            ? "max-w-6xl"
            : maxWidth === "xl"
            ? "max-w-5xl"
            : maxWidth === "lg"
            ? "max-w-4xl"
            : maxWidth === "md"
            ? "max-w-3xl"
            : "max-w-2xl",
          contentClassName
        )}>
        {(kickerText || headline || subHeadline || actionElements) && (
          <header className={classNames("mb-8 md:mb-12 flex flex-col gap-3", alignment.items)}>
            {kickerText && (
              <p className={classNames("uppercase tracking-[0.2em] text-xs opacity-70", alignment.text)}>
                {kickerText}
              </p>
            )}
            {headline && (
              <h2 className={classNames("text-3xl md:text-5xl font-semibold leading-tight", alignment.text)}>
                {headline}
              </h2>
            )}
            {subHeadline && (
              <p className={classNames("text-base md:text-lg text-balance opacity-90", alignment.text)}>
                {subHeadline}
              </p>
            )}
            {actionElements && (
              <div className={classNames("mt-2 flex gap-3 flex-wrap", alignment.justify)}>{actionElements}</div>
            )}
          </header>
        )}

        {children}
      </div>
    </Tag>
  )
}
