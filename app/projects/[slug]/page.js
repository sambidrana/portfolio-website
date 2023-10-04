"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Nav from "@/app/components/Nav";
import projects from "../projectData";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import AboutPage from "@/app/about/page";

export default function ProjectId() {
  const pathname = usePathname();

  const slug = pathname.split("/").pop(); // Extract slug from pathname

  const [project, setProject] = useState();

  useEffect(() => {
    const matchedProject = projects.find((p) => p.slug === slug);
    setProject(matchedProject);
  }, [slug]);

  if (!project) {
    return <div>Loading...</div>; // Or any other loading state
  }

  return (
    <>
      <Nav />

      <div className="w-full md:h-auto py-16 ">
        <div className=" relative z-[-100] border w-full mt-11  bg-black/60">
          <Image
            className=" w-full h-[50vh] opacity-50 "
            src={project.image}
            alt={project.title}
            width={500}
            height={500}
          />
          <div className="max-w-[1240px] p-4 w-full text-white absolute top-[40%] ">
            <h2 className="py-2 tracking-widest ">{project.title}</h2>
            {/* Add skills in data */}
            <h3>{project.mainTechnology.join(" / ")}</h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto px-8 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-3 py-2">
            <h2 className="tracking-widest text-[#5651e5]">Overview</h2>
            <p className="py-8">{project.body}</p>
            <a href={project.gitLink} target="_blank" rel="noreferrer">
              <button className="px-8 py-3 mt-4 mr-8">Code</button>
            </a>
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noreferrer">
                <button className="px-8 py-3 mt-4">Demo</button>
              </a>
            )}
          </div>

          <div className="col-span-4 md:col-span-2 shadow-xl shadow-gray-400 rounded-xl py-4">
            <div className="p-2">
              <p className="text-center font-bold pb-4">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-2">
                {project.technologies.map((tech, index) => (
                  <p
                    key={index}
                    className="text-gray-600 p-2 flex items-center"
                  >
                    <RiRadioButtonFill className="pr-1" /> {tech}
                  </p>
                ))}
              </div>
            </div>
          </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer hover:scale-105 duration-300 ease-in hover:text-[#5651e5] ">Back</p>
        </Link>
        </div>
      </div>
    </>
  );
}
