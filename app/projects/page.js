"use client";
import { ProjectLayout } from "../components/ProjectLayout";
import { useRouter } from "next/navigation";
import projects from "./projectData";

export default function ProjectPage({ params }) {
  const router = useRouter();
  console.log(router);

  return (
    <>
      <div id="projects" className="w-full">
        <div className="max-w-[1240px] mx-auto px-5 py-16">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Projects
          </p>
          <h2 className="py-4">What I&apos;ve Built</h2>
          <div className="grid md:grid-cols-2 gap-8">

            {projects.map(project => (
              <ProjectLayout
              title={project.title}
              backgroundImg={project.image}
              projectUrl={`/projects/${project.slug}`}
              tech={project.mainTechnology.join(" / ")}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}


{/* <ProjectLayout
title="Quiz Whizz"
backgroundImg="/images/projects/quiz-whizz.jpg"
projectUrl={`/projects/quiz-whizz`}
// projectUrl='/quiz-whizz'
tech="React JS"
/>
<ProjectLayout
title="NKS Fresh e-commerce"
backgroundImg="/images/projects/nks-fresh.jpg"
projectUrl={`/projects/nks-fresh`}
// projectUrl={`/projects`}
tech="React JS"
/>
<ProjectLayout
title="Bar-pretender"
backgroundImg="/images/projects/bar-pretender.jpg"
projectUrl={`/projects/bar-pretender`}
// projectUrl='/bar-pretender'
tech="React JS"
/> */}
