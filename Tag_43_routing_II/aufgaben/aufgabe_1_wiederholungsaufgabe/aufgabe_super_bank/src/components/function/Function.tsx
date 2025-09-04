type ActionProps = {
  onDeposit: () => void
  onWithdraw: () => void
}

export default function Function({ onDeposit, onWithdraw }: ActionProps) {
  const base =
    "rounded-md px-4 py-2 bg-[#9bd1f7] text-slate-900 font-semibold border border-black/40 shadow-sm active:translate-y-[1px]"
  return (
    <div className="flex gap-3 justify-center">
      <button onClick={onDeposit} className={base}>
        Einzahlen
      </button>
      <button onClick={onWithdraw} className={base}>
        Auszahlen
      </button>
    </div>
  )
}
