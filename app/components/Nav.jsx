import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Nav() {
  const [toggleNav, setToggleNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

  const navToggle = () => {
    setToggleNav((currentState) => !currentState);
    // console.log(toggleNav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 40) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <nav
      className={
        shadow
          ? `fixed w-full h-20 shadow-xl  z-100  bg-[#ecf0f3] transition-opacity duration-700 ease-out`
          : `fixed w-full h-20 z-100`
      }
    >
      {/* {!toggleNav && ( */}
      <div className=" px-2 w-full h-full flex gap-4 items-center justify-between 2xl:px-16 ">
        <div>
          <Link href={"/#featured"}>
            <Image
              src="/images/logo.png"
              alt="Sambid Rana"
              width="125"
              height="50"
            />
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex">
            <Link href={"/#about"}>
              <li className="ml-10 text-sm uppercase hover:border-b hover:scale-110 duration-300">
                About
              </li>
            </Link>
            <Link href={"/#skills"}>
              <li className="ml-10 text-sm uppercase hover:border-b hover:scale-110 duration-300">
                Skills
              </li>
            </Link>
            <Link href={"/#projects"}>
              <li className="ml-10 text-sm uppercase hover:border-b hover:scale-110 duration-300">
                Projects
              </li>
            </Link>
            <Link href={"/#contact"}>
              <li className="ml-10 text-sm uppercase hover:border-b hover:scale-110 duration-300">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={navToggle} className="md:hidden">
            {!toggleNav ? <AiOutlineMenu size={25} /> : ""}
          </div>
        </div>
      </div>
      {/* )} */}

      {/* {toggleNav && ( */}
      <div
        className={`fixed left-0 top-0 w-full h-screen bg-black/70 transition-opacity duration-500 ease-in  ${
          toggleNav ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-3">
          <div className="">
            <div className="flex w-full items-center justify-between">
              <Link href={"/#featured"}>
                <Image src="/images/logo.png" width="150" height="35" alt="" />
              </Link>
              <div
                onClick={navToggle}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase ">
              <Link href={"/#about"}>
                <li
                  onClick={() => setToggleNav(false)}
                  className="py-4 text-sm"
                >
                  About
                </li>
              </Link>
              <Link href={"/#skills"}>
                <li
                  onClick={() => setToggleNav(false)}
                  className="py-4 text-sm"
                >
                  Skills
                </li>
              </Link>
              <Link href={"/#projects"}>
                <li
                  onClick={() => setToggleNav(false)}
                  className="py-4 text-sm"
                >
                  Project
                </li>
              </Link>
              <Link href={"/#contact"}>
                <li
                  onClick={() => setToggleNav(false)}
                  className="py-4 text-sm"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's connect
              </p>
              <div className="flex items-center justify-between my-4 m-auto w-[80%] ">
                <a
                  href="https://www.linkedin.com/in/sambidsjbrana"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                    <FaLinkedinIn />
                    <span className="tooltip">LinkedIn</span>
                  </div>
                </a>
                <a
                  href="https://github.com/sambidrana"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                    <FaGithub />
                    <span className="tooltip">GitHub</span>
                  </div>
                </a>
                <a href="/#contact" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                    <AiOutlineMail />
                    <span className="tooltip">Send Mail</span>
                  </div>
                </a>

                <div class="relative group inline-block">
                  <a
                    href="/resume/Sambid_RANA_Resume.pdf"
                    download
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                      <BsFillPersonLinesFill />
                      <span className="tooltip">Download Resume</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </nav>
  );
}

