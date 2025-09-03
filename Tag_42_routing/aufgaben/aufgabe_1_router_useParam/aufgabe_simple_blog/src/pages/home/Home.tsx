import React from "react"
import Button from "../../components/button/Button"

export default function Home() {
  return (
    <>
      <h1>Welcome to my simple Blog</h1>
      <Button text="Go to articles" to="/blog" />
    </>
  )
}
