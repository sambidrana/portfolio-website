"use client"; 
import AboutPage from "./about/page";
import Featured from "./components/Featured";
import Nav from "./components/Nav"
import Contact from "./contact/page";
import ProjectPage from "./projects/page";
import SkillsPage from "./skills/page";

export default function Home() {

  return (
    <>
    <Nav />
    <Featured />
    <AboutPage />
    <SkillsPage />
    <ProjectPage />
    <Contact />

    </>
  )
}
