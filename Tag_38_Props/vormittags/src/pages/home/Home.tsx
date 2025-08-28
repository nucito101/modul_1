import React from "react"
import "./Home.css"
import Header from "../../components/header/Header"
import Hero from "../../components/hero/Hero"
import Start from "../../components/start/Start"
import WorkoutIntro from "../../components/workoutintro/WorkoutIntro"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Start />
      <WorkoutIntro
        title="Home Workout"
        text="ich bin einfach ein Text"
        urlImg="https://www.health.com/thmb/uAudLh5JvgxTKclRXM-zkpwik-Y=/724x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1352616555-a1dff5ad111c49bdbeaf78eb2823320d.jpg"
      />

      <WorkoutIntro
        title="Super Strong Workout"
        text="ich bin auch einfach ein Text"
        urlImg="https://res.cloudinary.com/peloton-cycle/image/fetch/f_auto,c_limit,w_3840,q_90/https://images.ctfassets.net/6ilvqec50fal/7zF662NnTltRmgKnQCwEw5/78325b5f6197afca7e7294b6c8bb5c42/SHOT_20_06398_GUIDE.jpg"
        reverse={true}
      />
    </>
  )
}
