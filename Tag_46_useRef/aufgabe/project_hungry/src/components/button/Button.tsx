import React from "react"
import { Link } from "react-router"

type Variant = "filled" | "outline"
type Size = "small" | "normal"

type CommonProps = {
  variant?: Variant
  size?: Size
  fullWidth?: boolean
  fullIcon?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  className?: string
  children?: React.ReactNode
  disabled?: boolean
}

type ButtonAsButton = CommonProps & {
  to?: never
  href?: never
  newTab?: never
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"]
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"]
}

type ButtonAsRouterLink = CommonProps & {
  to: string
  href?: never
  newTab?: never
}

type ButtonAsExternal = CommonProps & {
  href: string
  newTab?: boolean
  to?: never
}

export type ButtonProps = ButtonAsButton | ButtonAsRouterLink | ButtonAsExternal

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

const variants: Record<Variant, string> = {
  filled: "text-white focus-visible:ring-black",
  outline: "border text-black focus-visible:ring-black",
}

const sizes: Record<Size, string> = {
  small: "h-9 px-3 text-sm",
  normal: "h-11 px-4 text-base",
}

export default function Button(props: ButtonProps) {
  const {
    variant = "filled",
    size = "normal",
    fullWidth,
    fullIcon,
    leftIcon,
    rightIcon,
    className,
    children,
    disabled,
    ...rest
  } = props as ButtonProps & Record<string, unknown>

  const content = (
    <>
      {leftIcon && <span className={cx(fullIcon && "text-lg leading-none")}>{leftIcon}</span>}
      {!fullIcon && children}
      {rightIcon && <span className={cx(fullIcon && "text-lg leading-none")}>{rightIcon}</span>}
    </>
  )

  const classes = cx(
    base,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    fullIcon && "aspect-square !px-0",
    className
  )

  // React Router Link
  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {content}
      </Link>
    )
  }

  // Externes <a>
  if ("href" in props && props.href) {
    const newTab = "newTab" in props ? props.newTab : undefined
    return (
      <a href={props.href} className={classes} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {content}
      </a>
    )
  }

  // Normaler <button>
  return (
    <button
      type={("type" in rest ? (rest.type as any) : "button") || "button"}
      className={classes}
      disabled={disabled}
      onClick={("onClick" in rest ? (rest.onClick as any) : undefined) as any}>
      {content}
    </button>
  )
}
