import React from "react"
import { Link } from "react-router"

type ButtonVariant = "filled" | "outline" | "text" | "textWhite"

type ButtonProps = {
  text: string
  linkref: string
  variant?: ButtonVariant
}

export default function Btn({ text, linkref, variant = "filled" }: ButtonProps) {
  const base = "px-10 py-5 uppercase flex items-center justify-center text-xs w-fit text-center transition-colors"

  const styles: Record<ButtonVariant, string> = {
    filled: "bg-[#333333] text-white ",
    outline: " text-[#333333] bg-white",
    text: "text-[#333333]",
    textWhite: "text-white",
  }

  return (
    <Link to={linkref} className={`${base} ${styles[variant]}`}>
      {text}
      <img
        className={`ml-2 h-3 w-3 ${variant === "filled" || variant === "textWhite" ? "invert" : ""}`}
        src="/icon_arrow.svg"
        alt=""
      />
    </Link>
  )
}
