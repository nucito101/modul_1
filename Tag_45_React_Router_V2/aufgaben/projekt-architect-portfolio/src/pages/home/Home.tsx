import Contact from "../../components/contact/Contact"
import AboutSection from "../../components/aboutSection/AboutSection"
import MainFocusSection from "../../components/mainFocusSection/MainFocusSection"
import Hero from "../../components/hero/Hero"
import ProjectSection from "../../components/projectSection/ProjectSection"

export default function Home() {
  return (
    <>
      <div className="w-[80%] m-auto">
        <Hero />
        <AboutSection />
        <MainFocusSection />
        <ProjectSection />
        <Contact />
      </div>
    </>
  )
}
