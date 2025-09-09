import React from "react"
import Btn from "../btn/Btn"

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-10 grid-cols-[1fr_2fr] items-center">
        <div>
          <h1
            className="text-6xl font-extralight text-[#bdbdbdbd] flex
          flex-col uppercase">
            Project <span className="font-bold text-black capitalize">Lorum</span>
          </h1>
        </div>

        <div className="relative">
          <img className="w-full aspect-[4/5] object-cover" src="/Hero.jpg" alt="" />
          <div className="absolute bottom-0 left-0">
            <Btn text="View Project" linkref="#" variant="outline" />
          </div>
        </div>
      </div>
    </section>
  )
}
