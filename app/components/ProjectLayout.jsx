import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ProjectLayout = ({title, backgroundImg, tech, projectUrl, params}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#6e69f2] to-[#709dff] transition-scale duration-300 hover:scale-105 ">
      <Image
        className="p-2 group-hover:opacity-10  "
        src={backgroundImg}
        alt="/"
        width={600}
        height={500}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        <Link href={projectUrl}>
        {/* <Link href={`/projects/${params.id}`}> */}
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};
