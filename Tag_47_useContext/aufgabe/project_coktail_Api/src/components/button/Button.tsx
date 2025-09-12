import React, { forwardRef } from "react"
import { Link } from "react-router"

type Variant = "solid" | "outline" | "ghost"
type Size = "xs" | "sm" | "md" | "lg"
type Color = "primary" | "neutral" | "danger"

export type ButtonProps = {
  variant?: Variant
  size?: Size
  color?: Color
  rounded?: "md" | "full"
  fullWidth?: boolean
  loading?: boolean
  disabled?: boolean
  icon?: React.ReactNode
  iconRight?: React.ReactNode
  iconOnly?: boolean // wenn true: bitte aria-label setzen
  className?: string
  children?: React.ReactNode
  // Routing/Links
  to?: string // React Router
  href?: string // externer Link
  newTab?: boolean
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"]
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"]
  "aria-label"?: string
} & Omit<React.HTMLAttributes<HTMLButtonElement>, "onClick">

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap select-none transition-[color,background,opacity,box-shadow,transform] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none"

const sizeMap: Record<Size, string> = {
  xs: "text-xs h-8 px-3",
  sm: "text-sm h-9 px-3.5",
  md: "text-base h-11 px-4",
  lg: "text-lg h-12 px-5",
}

const roundedMap = {
  md: "rounded-xl",
  full: "rounded-full",
}

const palette: Record<Color, { solid: string; outline: string; ghost: string }> = {
  primary: {
    solid:
      "bg-blue-600 text-white hover:bg-blue-500 focus-visible:ring-blue-400 dark:bg-blue-500 dark:hover:bg-blue-400",
    outline:
      "border border-blue-600 text-blue-700 hover:bg-blue-50 dark:text-blue-300 dark:border-blue-400 dark:hover:bg-blue-400/10",
    ghost: "text-blue-700 hover:bg-blue-50 dark:text-blue-300 dark:hover:bg-blue-400/10",
  },
  neutral: {
    solid: "bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300",
    outline:
      "border border-gray-300 text-gray-900 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-100 dark:hover:bg-gray-700",
    ghost: "text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800",
  },
  danger: {
    solid: "bg-red-600 text-white hover:bg-red-500 focus-visible:ring-red-400",
    outline: "border border-red-600 text-red-700 hover:bg-red-50",
    ghost: "text-red-700 hover:bg-red-50",
  },
}

function variantClasses(variant: Variant, color: Color) {
  return palette[color][variant]
}

function Spinner() {
  return (
    <svg className="animate-spin size-4 shrink-0" viewBox="0 0 24 24" role="img" aria-label="Lädt">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.25" />
      <path d="M22 12a10 10 0 0 1-10 10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = "solid",
      color = "primary",
      size = "md",
      rounded = "md",
      fullWidth,
      loading,
      disabled,
      icon,
      iconRight,
      iconOnly,
      className,
      children,
      to,
      href,
      newTab,
      onClick,
      type = "button",
      ...rest
    },
    ref
  ) => {
    const content = (
      <span className={cx("inline-flex items-center gap-2", iconOnly && "p-0")}>
        {loading && <Spinner />}
        {icon && <span className={cx("[&>svg]:size-5", size === "xs" && "[&>svg]:size-4")}>{icon}</span>}
        {!iconOnly && <span className="truncate">{children}</span>}
        {iconRight && <span className={cx("[&>svg]:size-5", size === "xs" && "[&>svg]:size-4")}>{iconRight}</span>}
      </span>
    )

    const classes = cx(
      base,
      sizeMap[size],
      roundedMap[rounded],
      variantClasses(variant, color),
      fullWidth && "w-full",
      iconOnly && "!px-0 w-11 h-11",
      loading && "cursor-progress",
      className
    )

    const commonProps = {
      ref: ref as any,
      className: classes,
      "aria-disabled": disabled || loading ? true : undefined,
      ...rest,
    }

    // React Router Link
    if (to) {
      return (
        <Link to={to} {...(commonProps as any)} onClick={onClick as any}>
          {content}
        </Link>
      )
    }

    // Externer Link
    if (href) {
      return (
        <a
          href={href}
          target={newTab ? "_blank" : undefined}
          rel={newTab ? "noopener noreferrer" : undefined}
          {...(commonProps as any)}
          onClick={onClick as any}>
          {content}
        </a>
      )
    }

    // Standard Button
    return (
      <button disabled={disabled || loading} onClick={onClick} type={type} {...(commonProps as any)}>
        {content}
      </button>
    )
  }
)
Button.displayName = "Button"
