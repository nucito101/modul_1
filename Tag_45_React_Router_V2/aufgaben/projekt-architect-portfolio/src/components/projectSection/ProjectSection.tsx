import React from "react"
import SectionContainer from "../sectionContainer/SectionContainer"
import ProjectCard from "../projectCard/ProjectCard"
import Btn from "../btn/Btn"

export default function ProjectSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <SectionContainer text="Uur Orjects" />

      <div className="mt-6 grid gap-6 grid-cols-[1fr_1fr]">
        <ProjectCard src="/projects_01.png" title="Sample Project" />
        <ProjectCard src="/projects_02.png" title="Project Two" />
      </div>

      <div className="mt-6 grid gap-6 grid-cols-[1fr_2fr_1fr]">
        <ProjectCard src="/projects_03.png" title="Project Three" compact />
        <ProjectCard src="/projects_04.png" title="Project Four" />
        <ProjectCard src="/projects_05.png" title="Project Five" compact />
      </div>
      <div className="my-10 flex justify-end w-full">
        <Btn text="All projects" linkref="" variant="filled" />
      </div>
    </section>
  )
}
