import React from "react"
import "./Hero.css"

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="content">
          <h1>Workout with me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid commodi voluptates temporibus similique nam
            ullam perspiciatis recusandae pariatur architecto voluptas, perferendis iure velit, tempora possimus et ut
            consequatur ipsum maxime accusantium veniam repellat assumenda. Impedit, iusto accusantium? Sapiente eius,
            at rerum quae tenetur molestias, consequatur sed, dicta dolorem voluptatibus itaque.
          </p>
          <a href="" className="btn-basic">
            Join Club now
          </a>
          <div>
            <p>As Featured in</p>
            <img src="/fitness_assets/logo.png" alt="" />
          </div>
          <img src="/fitness_assets/hero.png" alt="" />
        </div>
      </section>
    </>
  )
}
