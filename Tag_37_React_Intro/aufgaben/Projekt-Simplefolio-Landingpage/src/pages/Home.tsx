import React from "react"
import Navbar from "../components/navbar/Navbar"
import Button from "../components/button/Button"
import Projectcard from "../components/projektcard/Projectcard"
import Sectiontitle from "../components/sectiontitle/Sectiontitle"
import Skills from "../components/skills/Skills"

export default function Home() {
  const cardContent = [
    {
      title: "Project 1",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, dolor!",
      stack: ["JavaScript", "React", "Sass"],
    },
    {
      title: "Project 2",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, dolor!",
      stack: ["JavaScript", "React", "Sass"],
    },
    {
      title: "Project 3",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, dolor!",
      stack: ["JavaScript", "React", "Sass"],
    },
  ]

  const skillsContent = ["HTML", "CSS", "JavaScript", "React", "SASS", "Tailwind CSS", "Git", "UX/UI"]
  return (
    <>
      <Navbar />
      <header>
        <div className="pt-15 pb-5 text-center">
          <h1 className="mb-3 text-4xl sm:text-5xl font-bold">
            Hi, I am <span className="text-accent-soft">John Smith.</span>
          </h1>
          <p className="mt-7 mb-5 text-xl font-semibold">A Front End Developer.</p>
          <p className="mx-auto max-w-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nisi fuga nihil nobis blanditiis, deleniti
            corrupti dolorem praesentium tempora quo libero illum cupiditate, ipsum est enim aliquid? Aperiam, accusamus
            veritatis!
          </p>
        </div>
      </header>
      <main>
        <Button content="resume" href="#" />
        <Sectiontitle id="Project" title="Projects" />
        <div className="grid md:grid-cols-3 gap-6 px-5 mt-10">
          {cardContent.map((card, index) => (
            <Projectcard key={index} title={card.title} description={card.description} stack={card.stack} />
          ))}
        </div>

        <Sectiontitle id="Skills" title="Skills" />
        <div className="flex justify-center flex-wrap gap-7 mx-auto my-6 max-w-xl">
          {skillsContent.map((skill, index) => (
            <Skills key={index} label={skill} />
          ))}
        </div>
      </main>
      <footer>
        <Sectiontitle id="Contact" title="Contact" />
        <Button content="email me" href="mailto:John.smith@example" />
        <p className="text-center my-12">Created by John Smith</p>
      </footer>
    </>
  )
}
