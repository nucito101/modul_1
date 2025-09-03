import React from "react"
import { Link } from "react-router"

type ButtonProps = {
  text: string
  to: string
}
export default function Button(props: ButtonProps) {
  return (
    <>
      <Link to={props.to}>{props.text}</Link>
    </>
  )
}
