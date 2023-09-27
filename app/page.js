"use client"; 
import AboutPage from "./about/page";
import Featured from "./components/Featured";
import Nav from "./components/Nav"
import { SkillsPage } from "./skills/page";
import { SocialPage } from "./social/page";
export default function Home() {

  return (
    <>
    <Nav />
    <Featured />
    <AboutPage />
    <SkillsPage />
    <SocialPage />
    </>
  )
}
