import React from "react"

type ProjectCardPlaceholder = {
  title: string
  description: string
  stack?: string[]
}

export default function Projectcard({ title, description, stack = [] }: ProjectCardPlaceholder) {
  return (
    <>
      <div className="bg-(--color-card) p-6 text-center max-w-md m-auto">
        <h3 className="mb-2 font-bold text-accent text-xl tracking-wide">{title}</h3>
        <p className="mb-3">{description}</p>
        <p className="font-bold text-accent tracking-wide">{stack.join(", ")}</p>
      </div>
    </>
  )
}
