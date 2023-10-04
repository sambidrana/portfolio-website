import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Featured = () => {
  return (
    <div id="featured" className="w-full h-screen text-center ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
          {"From concept to code, let's make it happen!"}
          </p>
          <h1 className="py-4 text-gray-700">
          {"Hi, I'm"} <span className="text-[#5651e5]">Sambid</span>
          </h1>
          <h2 className="py-4 text-gray-700">Software Engineer</h2>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am a web developer with expertise in crafting outstanding digital
            interfaces on the front-end. Alongside building intuitive and
            responsive front-end applications, I possess a solid understanding
            of back-end technologies, enabling me to deliver comprehensive web
            solutions.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/sambidsjbrana"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200">
                <FaLinkedinIn />
                <span className="tooltip">LinkedIn</span>
              </div>
            </a>
            <a
              href="https://github.com/sambidrana"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200">
                <FaGithub />
                <span className="tooltip">GitHub</span>
              </div>
            </a>
            <a href="/#contact" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200">
                <AiOutlineMail />
                <span className="tooltip">Send Mail</span>
              </div>
            </a>

            <a href="/resume/Sambid_RANA_Resume.pdf" download rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200">
                <BsFillPersonLinesFill />
                <span className="tooltip">Download Resume</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
