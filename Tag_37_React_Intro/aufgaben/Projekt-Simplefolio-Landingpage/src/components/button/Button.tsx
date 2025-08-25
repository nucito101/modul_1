import React from "react"

type buttonplaceholder = {
  content: string
  href?: string
}

export default function Button({ content, href }: buttonplaceholder) {
  return (
    <>
      <div className="grid place-items-center">
        <button className="border border-accent-soft my-7 px-5 py-2 transition hover:-translate-y-[2px]">
          <a href={href}>{content}</a>
        </button>
      </div>
    </>
  )
}
