import React from "react";
import SkillsLayout from "../components/SkillsLayout";

export default function SkillsPage() {
  return (
    <>
      <div id="skills" className="w-full lg:h-screen p-2">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
          <p className="text-xl tracking-widest text-[#5651e5]">Skills</p>
          <h2 className="py-4">What I can do</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillsLayout src="html.png" name="HTML" />
            <SkillsLayout src="css.png" name="CSS" />
            <SkillsLayout src="javascript.png" name="JavaScript" />
            <SkillsLayout src="react.png" name="React" />
            <SkillsLayout src="nextjs.png" name="NextJS" />
            <SkillsLayout src="ruby.jpeg" name="Ruby" />
            <SkillsLayout src="rails.png" name="Ruby on Rails" />
            <SkillsLayout src="tailwind.png" name="Tailwind" />
            <SkillsLayout src="firebase.png" name="Firebase" />
            <SkillsLayout src="aws.png" name="AWS" />
            <SkillsLayout src="mongo.png" name="MongoDB" />
            <SkillsLayout src="github1.png" name="GitHub" />
            <SkillsLayout src="node.png" name="NodeJS" />
          </div>
        </div>
      </div>
    </>
  );
}
