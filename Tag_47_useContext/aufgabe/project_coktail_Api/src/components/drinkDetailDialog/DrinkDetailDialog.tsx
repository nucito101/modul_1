import { useEffect, useRef } from "react"
import { useCocktails } from "../../context/CocktailsContext"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardMedia, type CardProps } from "../card/Card"

type CardDialogProps = CardProps & {
  open: boolean
  onClose: () => void
}

export default function DrinkDetailDialog({ open, onClose, ...rest }: CardDialogProps) {
  const { detail, detailLoading, detailError } = useCocktails()
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  if (!open) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 focus:outline-none backdrop-blur-sm focus:ring-0 flex items-center justify-center bg-black/30 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={detail?.name ?? "Drink-Details"}
      onMouseDown={(e) => {
        if (e.target === overlayRef.current) onClose()
      }}>
      <Card
        variant="elevated"
        shadow="xl"
        radius="2xl"
        padding="lg"
        bordered
        onMouseDown={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg! bg-border! max-h-none1 sm:max-h-none! max-h-[80vh]! overflow-y-auto scrollbar-none"
        {...rest}>
        <button
          onClick={onClose}
          aria-label="Dialog schließen"
          className="absolute right-3 top-3 rounded-md p-2 text-white text-md cursor-pointer z-10">
          ✕
        </button>

        {detailLoading && <p className="text-sm text-neutral-600">Lade Details…</p>}
        {detailError && <p className="text-sm text-red-600">{detailError}</p>}

        {!detailLoading && !detailError && detail && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[240px,1fr] border-red-600">
            <CardMedia
              src={detail.thumbnail ?? ""}
              alt={detail.name}
              ratio="16/9"
              rounded
              className="shadow object-top! object-cover!"
            />

            <div className="space-y-4 text-text">
              <CardHeader
                title={detail.name}
                description={
                  <CardDescription className="text-accent!">
                    Kategorie: <b>{detail.category ?? "—"}</b> · Alkohol: <b>{detail.alcoholic ?? "—"}</b>
                  </CardDescription>
                }
              />

              <CardContent>
                <h4 className="mb-1 font-semibold">Glas</h4>
                <p className="text-sm text-accent">{detail.glass ?? "—"}</p>
              </CardContent>

              <CardContent>
                <h4 className="mb-1 font-semibold">Zutaten</h4>
                <ul className="list-inside list-disc text-sm text-accent">
                  {detail.ingredients.map((it, i) => (
                    <li key={i}>
                      {it.ingredient}
                      {it.measure ? ` — ${it.measure}` : ""}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter divider>
                <h4 className="mb-1 font-semibold">Zubereitung</h4>
                <p className="whitespace-pre-wrap text-sm text-accent">{detail.instructions ?? "—"}</p>
              </CardFooter>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}
