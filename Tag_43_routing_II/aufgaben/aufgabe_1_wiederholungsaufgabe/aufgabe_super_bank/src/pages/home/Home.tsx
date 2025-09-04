import { useState } from "react"
import CardVisual from "../../components/cardVisuals/CardVisual"
import AmountField from "../../components/amount/Amount"
import Function from "../../components/function/Function"

export default function Bank() {
  const [balance, setBalance] = useState<number>(0)
  const [amount, setAmount] = useState<string>("")

  const deposit = () => {
    const money = Number(amount)
    if (isNaN(money) || money <= 0) return
    setBalance((prev) => prev + money)
    setAmount("")
  }

  const withdraw = () => {
    const money = Number(amount)
    if (isNaN(money) || money <= 0) return
    setBalance((prev) => prev - money)
    setAmount("")
  }

  return (
    <>
      <CardVisual balance={balance} />
      <h1 className="text-white text-3xl font-black tracking-wide uppercase mb-10">Super Bank</h1>
      <section className="w-full max-w-md bg-[#84d3f6] text-slate-900 rounded-xl p-6 text-center border border-black/20 shadow-[0_6px_0_#00000040]">
        <h2 className="font-semibold">Dein Girokonto</h2>
        <div className="text-4xl font-extrabold my-2">{`${balance}€`}</div>

        <div className="mx-auto max-w-sm">
          <AmountField amount={amount} setAmount={setAmount} />
        </div>
        <div className="mt-3">
          <Function onDeposit={deposit} onWithdraw={withdraw} />
        </div>
      </section>
    </>
  )
}
