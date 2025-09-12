export default function CardSkeleton() {
  return (
    <div className="animate-pulse rounded-xl border p-4 border-border-80">
      <div className="aspect-square w-full rounded-lg bg-gray-200" />
      <div className="mt-3 h-4 w-3/4 rounded bg-gray-200" />
      <div className="mt-2 h-3 w-1/2 rounded bg-gray-200" />
    </div>
  )
}
