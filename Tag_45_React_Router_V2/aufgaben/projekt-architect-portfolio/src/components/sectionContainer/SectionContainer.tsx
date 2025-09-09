import React from "react"

type SectionContainerProps = {
  text: string
}

export default function SectionContainer({ text }: SectionContainerProps) {
  return (
    <>
      <h3 className="font-extralight text-7xl text-[#bdbdbd] my-10">{text}</h3>
    </>
  )
}
