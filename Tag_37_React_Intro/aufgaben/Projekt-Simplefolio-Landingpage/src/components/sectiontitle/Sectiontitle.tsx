import React from "react"

type sectionPlacehoder = {
  title: string
  id: string
}

export default function Sectiontitle({ id, title }: sectionPlacehoder) {
  return (
    <>
      <div className="grid place-items-center">
        <h2 id={id} className="uppercase mt-15 font-bold text-2xl text-center tracking-wider">
          {title}
        </h2>
      </div>
    </>
  )
}
