import React from "react"

interface ScoreItemProps {
  name: string
  points: number
  icon: string
}

export default function ScoreItem({ name, points, icon }: ScoreItemProps) {
  return (
    <>
      <div>
        <p>Name {name}</p>
        <span>{points}</span>
        <div>Icon: {icon}</div>
      </div>
    </>
  )
}
