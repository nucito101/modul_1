import { useEffect } from "react"

export function ScrollTo(id: string, behavior: ScrollBehavior = "smooth") {
  useEffect(() => {
    const placeholder = document.getElementById(id)
    if (placeholder) {
      placeholder.scrollIntoView({ behavior, block: "start" })
    }
  }, [id])
}
