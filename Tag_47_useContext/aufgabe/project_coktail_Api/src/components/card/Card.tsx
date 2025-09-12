import * as React from "react"

/** kleine Helper-Funktion für Klassenverkettung */
function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ")
}

type Variant = "elevated" | "outline" | "ghost"
type Padding = "none" | "sm" | "md" | "lg"
type Radius = "none" | "md" | "lg" | "xl" | "2xl"

export type CardProps = {
  variant?: Variant
  interactive?: boolean
  shadow?: "sm" | "md" | "lg" | "xl" | "none"
  padding?: Padding
  radius?: Radius
  bordered?: boolean
  fullWidth?: boolean
  className?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
  children?: React.ReactNode
  "aria-label"?: string
} & Omit<React.HTMLAttributes<HTMLDivElement>, "onClick">

const variantBase = "bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100"

function getVariant(variant: Variant, bordered: boolean | undefined, shadow: CardProps["shadow"]) {
  const commonBorder = bordered ? "ring-1 ring-neutral-200 dark:ring-neutral-800" : ""
  switch (variant) {
    case "elevated":
      return cx(
        commonBorder,
        shadow === "none"
          ? ""
          : shadow === "sm"
          ? "shadow-sm"
          : shadow === "lg"
          ? "shadow-lg"
          : shadow === "xl"
          ? "shadow-xl"
          : "shadow-md"
      )
    case "outline":
      return "ring-1 ring-neutral-200 dark:ring-neutral-800"
    case "ghost":
    default:
      return cx(commonBorder, "bg-transparent dark:bg-transparent")
  }
}

function getPadding(padding: Padding) {
  switch (padding) {
    case "none":
      return "p-0"
    case "sm":
      return "p-3"
    case "lg":
      return "p-6"
    case "md":
    default:
      return "p-4"
  }
}

function getRadius(radius: Radius) {
  switch (radius) {
    case "none":
      return "rounded-none"
    case "md":
      return "rounded-md"
    case "lg":
      return "rounded-lg"
    case "2xl":
      return "rounded-2xl"
    case "xl":
    default:
      return "rounded-xl"
  }
}

function getInteractive(interactive: boolean | undefined) {
  if (!interactive) return ""
  return cx(
    "transition-shadow hover:shadow-lg focus-visible:shadow-lg",
    "cursor-pointer",
    "outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
  )
}

/** Root Card */
export function Card({
  variant = "elevated",
  interactive,
  shadow = "md",
  padding = "md",
  radius = "xl",
  bordered,
  fullWidth,
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      {...rest}
      className={cx(
        "relative",
        variant !== "ghost" ? variantBase : "",
        getVariant(variant, bordered, shadow),
        getPadding(padding),
        getRadius(radius),
        fullWidth ? "w-full" : "",
        getInteractive(interactive),
        className
      )}>
      {children}
    </div>
  )
}

/* -------------------- Subcomponents -------------------- */

export type CardHeaderProps = {
  badge?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  align?: "start" | "center" | "end"
  className?: string
  children?: React.ReactNode
}

export function CardHeader({ badge, title, description, align = "start", className, children }: CardHeaderProps) {
  return (
    <div
      className={cx(
        "mb-3 flex items-start gap-3",
        align === "center" && "text-center flex-col items-center",
        align === "end" && "text-right flex-col items-end",
        className
      )}>
      {badge ? <div className="order-2 ml-auto">{badge}</div> : null}
      {children ? (
        children
      ) : (
        <div className="space-y-1">
          {title ? <h3 className="text-lg font-semibold leading-tight">{title}</h3> : null}
          {description ? <p className="text-sm text-neutral-600 dark:text-neutral-400">{description}</p> : null}
        </div>
      )}
    </div>
  )
}

export type CardMediaProps = {
  src: string
  alt: string
  ratio?: "16/9" | "4/3" | "1/1" | "3/2" | "auto"
  rounded?: boolean
  className?: string
  overlay?: React.ReactNode
}

export function CardMedia({ src, alt, ratio = "16/9", rounded = true, className, overlay }: CardMediaProps) {
  const aspect =
    ratio === "auto"
      ? ""
      : ratio === "1/1"
      ? "aspect-square"
      : ratio === "4/3"
      ? "aspect-[4/3]"
      : ratio === "3/2"
      ? "aspect-[3/2]"
      : "aspect-video"

  return (
    <div className={cx("relative w-full overflow-hidden", rounded && "rounded-lg", aspect, className)}>
      <img src={src} alt={alt} className={cx("h-full w-full object-cover")} />
      {overlay ? <div className="absolute inset-0">{overlay}</div> : null}
    </div>
  )
}

export type CardContentProps = {
  className?: string
  children?: React.ReactNode
  dense?: boolean
}

export function CardContent({ className, children, dense }: CardContentProps) {
  return <div className={cx("mt-3", dense ? "text-sm leading-relaxed" : "leading-relaxed", className)}>{children}</div>
}

export type CardActionsProps = {
  className?: string

  align?: "start" | "center" | "end" | "between"
  children?: React.ReactNode

  topGap?: "none" | "sm" | "md"
}

export function CardActions({ className, align = "start", children, topGap = "md" }: CardActionsProps) {
  return (
    <div
      className={cx(
        topGap === "md" ? "mt-4" : topGap === "sm" ? "mt-2" : "",
        "flex gap-2",
        align === "center" && "justify-center",
        align === "end" && "justify-end",
        align === "between" && "justify-between",
        className
      )}>
      {children}
    </div>
  )
}

export type CardFooterProps = {
  className?: string
  children?: React.ReactNode
  divider?: boolean
}

export function CardFooter({ className, children, divider }: CardFooterProps) {
  return (
    <div className={cx(divider ? "mt-4 border-t border-neutral-200 dark:border-neutral-800 pt-3" : "mt-3", className)}>
      {children}
    </div>
  )
}

/* Convenience: Titel/Beschreibung/Bagde als einzelne Bausteine */

export function CardTitle({ className, children }: { className?: string; children?: React.ReactNode }) {
  return <h3 className={cx("text-lg font-semibold leading-tight", className)}>{children}</h3>
}

export function CardDescription({ className, children }: { className?: string; children?: React.ReactNode }) {
  return <p className={cx("text-sm text-neutral-600 dark:text-neutral-400", className)}>{children}</p>
}

export function CardBadge({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full border border-neutral-200 dark:border-neutral-700 px-2 py-0.5 text-xs",
        "bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300",
        className
      )}>
      {children}
    </span>
  )
}
