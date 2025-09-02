import React, { useState } from "react"

type Choices = "Rock" | "Paper" | "Scissor"

const choice: Choices[] = ["Rock", "Paper", "Scissor"]

const icon: Record<Choices, string> = {
  Rock: "✊",
  Paper: "✋",
  Scissor: "✌️",
}

function getCpuPick(): Choices {
  return choice[Math.floor(Math.random() * choice.length)]
}

function getResult(user: Choices, cpu: Choices): "win" | "lose" | "draw" {
  if (user === cpu) return "draw"
  if (
    (user === "Rock" && cpu === "Scissor") ||
    (user === "Paper" && cpu === "Rock") ||
    (user === "Scissor" && cpu === "Paper")
  ) {
    return "win"
  }
  return "lose"
}

export default function Game() {
  const [userPick, setUserPick] = useState<Choices | null>(null)
  const [cpuPick, setCpuPick] = useState<Choices | null>(null)
  const [result, setResult] = useState<"" | "win" | "lose" | "draw">("")

  function play(pick: Choices) {
    const cpu = getCpuPick()
    setUserPick(pick)
    setCpuPick(cpu)
    setResult(getResult(pick, cpu))
  }

  function reset() {
    setCpuPick(null)
    setUserPick(null)
    setResult("")
  }

  return (
    <>
      <section className="flex flex-col item-center justify-center leading-8">
        <div>
          <div className="flex flex-row item-center justify-center">
            <p>You choose:</p>
            <p className="mx-5">{userPick ? `${icon[userPick]} ${userPick}` : "-"}</p>
          </div>
          <div className="flex flex-row item-center justify-center">
            <p>CPU choose:</p>
            <p className="mx-5">{cpuPick ? `${icon[cpuPick]} ${cpuPick}` : "-"}</p>
          </div>
        </div>
        <div className="flex flex-row item-center justify-center">
          <p className="mr-3">Result:</p>
          {result == "draw" && <span className="mx-5">Draw</span>}
          {result == "win" && <span className="mx-5">Win</span>}
          {result == "lose" && <span className="mx-5">Lose</span>}
        </div>
        <div className="flex flex-row gap-10 mt-20">
          {choice.map((choose) => {
            return (
              <>
                <button className="cursor-pointer" key={choose} onClick={() => play(choose)}>
                  <span>{icon[choose]}</span>
                  <span>{choose}</span>
                </button>
              </>
            )
          })}
        </div>
        <div className="mt-20 text-center">
          <button className="cursor-pointer" onClick={reset}>
            RESET
          </button>
        </div>
      </section>
    </>
  )
}
