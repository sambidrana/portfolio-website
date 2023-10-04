import projects from "./projectData";
import ProjectLayout from "../components/ProjectLayout";
export default function ProjectPage() {

  return (
    <>
      <div id="projects" className="w-full">
        <div className="max-w-[1240px] mx-auto px-5 py-16">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Projects
          </p>
          <h2 className="py-4">What I&apos;ve Built</h2>
          <div className="grid md:grid-cols-2 gap-8">

            {projects.map((project, index) => (
              <ProjectLayout
              key={index}
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



