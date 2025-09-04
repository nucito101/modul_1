import React from "react"

type InputProps = {
  label: string
  value: number | ""
  onChange: (value: string) => void
}

export default function Input({ label, value, onChange }: InputProps) {
  return (
    <>
      <div className="flex flex-col items-center">
        <label className="font-medium">{label}</label>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="px-3 py-2 rounded-md text-black border border-grey-200"
        />
      </div>
    </>
  )
}
