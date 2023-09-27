import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const SocialPage = () => {
  return (
    <div className="max-w-[1240px] h-screen flex items-center justify-center">
      <div className="relative w-[280px] h-[280px] flex items-center justify-center">
        <div className="relative w-[60px] h-[60px] bg-[#fff]">
          <div className="p-3 cursor-pointer hover:scale-x-110 ease-in duration-200">
            <FaGithub />
          </div>
          
        </div>
      </div>
    </div>
  );
};
