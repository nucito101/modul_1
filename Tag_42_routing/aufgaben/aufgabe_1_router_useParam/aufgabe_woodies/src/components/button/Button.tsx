import React from "react"

type buttonProps = {
  text: string
}

export default function Button(props: buttonProps) {
  return (
    <>
      <button className="px-6 py-3.5 rounded-sm bg-[#DAA520] text-white cursor-pointer">{props.text}</button>
    </>
  )
}
