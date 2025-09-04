type Mood = "sad" | "shocked" | "happy" | "blissful" | "lovestruck" | "excited" | "ko"

export type SpriteInfo = { mood: Mood; color?: string }

export function getSprite(balance: number): SpriteInfo {
  if (balance < 0) return { mood: "ko" }
  if (balance === 0) return { mood: "shocked" }
  if (balance > 0 && balance < 500) return { mood: "happy" }
  if (balance >= 500 && balance < 1500) return { mood: "blissful" }
  if (balance >= 1500 && balance < 5000) return { mood: "lovestruck" }
  return { mood: "excited" }
}
