type MenuItem = {
  category: string
  name: string
  price: string
  description?: string
}

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div>
      <div className="flex items-baseline gap-2">
        <h3 className="text-[15px] font-semibold tracking-wide text-gray-800">{item.name}</h3>

        <span className="mx-2 flex-1 border-b border-dotted border-gray-300 translate-y-[0.35em]" />

        <p className="whitespace-nowrap text-[13px] font-semibold text-gray-800">{item.price}</p>
      </div>

      {item.description ? (
        <p className="mt-1 text-[11px] leading-snug text-gray-500">{item.description}</p>
      ) : (
        <p className="mt-1 text-[11px] leading-snug text-gray-400 italic">&nbsp;</p>
      )}
    </div>
  )
}
