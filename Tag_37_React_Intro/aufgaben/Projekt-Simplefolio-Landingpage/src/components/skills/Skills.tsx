import React, { type SlotHTMLAttributes } from "react"

type skillLabel = {
  label: string
}

export default function Skills({ label }: skillLabel) {
  return (
    <>
      <p className="bg-card mx-3 px-5 py-3 text-sm text text-center w-fit">{label}</p>
    </>
  )
}
