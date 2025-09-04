import React from "react"

type AmountProps = {
  amount: string
  setAmount: React.Dispatch<React.SetStateAction<string>>
}

export default function AmountField({ amount, setAmount }: AmountProps) {
  return (
    <input
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      placeholder="Gib einen Geldbetrag ein"
      className="w-[80%] rounded-md bg-white px-4 py-2 text-slate-900 border border-black/40 shadow-sm"
    />
  )
}
