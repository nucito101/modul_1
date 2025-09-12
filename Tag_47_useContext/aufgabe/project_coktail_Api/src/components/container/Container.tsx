// src/components/layout/Container.tsx
import React, { forwardRef, type ElementType, type JSX } from "react"

function classNames(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}

/* ---------- Polymorphe Utilities ---------- */
type AsProp<T extends ElementType> = { as?: T }
type PropsToOmit<T extends ElementType, P> = keyof (AsProp<T> & P)
export type PolymorphicRef<T extends ElementType> = React.ComponentPropsWithRef<T>["ref"]
export type PolymorphicComponentProps<T extends ElementType, Props = {}> = React.PropsWithChildren<Props & AsProp<T>> &
  Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, Props>>

/* ---------- Design Tokens ---------- */
type ContainerWidth = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full"
type SpacingSize = "none" | "xs" | "sm" | "md" | "lg" | "xl"

const MAX_WIDTH_CLASSES: Record<Exclude<ContainerWidth, "none">, string> = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  "2xl": "max-w-screen-2xl",
  full: "max-w-full",
}

const PADDING_X_CLASSES: Record<SpacingSize, string> = {
  none: "px-0",
  xs: "px-2",
  sm: "px-4",
  md: "px-6",
  lg: "px-8",
  xl: "px-12",
}

const NEGATIVE_MARGIN_X_CLASSES: Record<SpacingSize, string | null> = {
  none: null,
  xs: "-mx-2",
  sm: "-mx-4",
  md: "-mx-6",
  lg: "-mx-8",
  xl: "-mx-12",
}

const PADDING_Y_CLASSES: Record<SpacingSize, string> = {
  none: "py-0",
  xs: "py-2",
  sm: "py-3",
  md: "py-6",
  lg: "py-10",
  xl: "py-16",
}

/* ---------- Öffentliche Props ---------- */
export type ContainerOwnProps = {
  /** maximale Breite des Containers */
  maxWidth?: ContainerWidth
  /** horizontales Padding */
  paddingX?: SpacingSize
  /** vertikales Padding */
  paddingY?: SpacingSize
  /** Container-Inhalt horizontal zentrieren */
  center?: boolean
  /** Textausrichtung */
  textAlign?: "left" | "center" | "right"
  /** Inhalt über die Seitenränder hinausziehen */
  bleedX?: boolean
  /** Debug-Modus: zeigt Outline und Hintergrund */
  debug?: boolean
  /** zusätzliche Klassen */
  className?: string
}

export type ContainerProps<T extends ElementType = "div"> = PolymorphicComponentProps<T, ContainerOwnProps>

/* ---------- Implementierung ---------- */
function _Container(props: any, ref: React.Ref<any>) {
  const {
    as,
    maxWidth = "lg",
    paddingX = "md",
    paddingY = "none",
    center = true,
    textAlign = "left",
    bleedX = false,
    debug = false,
    className,
    children,
    ...rest
  } = props as ContainerProps<any>

  const Component = (as || "div") as ElementType
  const maxWidthClass = maxWidth === "none" ? null : MAX_WIDTH_CLASSES[maxWidth as Exclude<ContainerWidth, "none">]

  const classes = classNames(
    "w-full",
    center && maxWidth !== "full" && maxWidth !== "none" && "mx-auto",
    maxWidthClass,
    PADDING_X_CLASSES[paddingX],
    PADDING_Y_CLASSES[paddingY],
    textAlign === "center" ? "text-center" : textAlign === "right" ? "text-right" : "text-left",
    bleedX && NEGATIVE_MARGIN_X_CLASSES[paddingX],
    debug && "outline outline-1 outline-pink-500/60 bg-pink-50/20",
    className
  )

  return (
    <Component ref={ref} className={classes} {...rest}>
      {children}
    </Component>
  )
}

_Container.displayName = "Container"

/* ---------- Öffentliche generische Signatur + Cast ---------- */
type ContainerComponent = <T extends ElementType = "div">(
  props: ContainerProps<T> & { ref?: PolymorphicRef<T> }
) => JSX.Element | null

export const Container = forwardRef(_Container) as unknown as ContainerComponent
export default Container
