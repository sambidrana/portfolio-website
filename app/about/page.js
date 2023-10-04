import Image from "next/image";

export default function AboutPage() {
  return (
    <div
      id="about"
      className="w-full  md:h-screen p-2 flex items-center justify-between py-16 "
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8">
        <div className="col-span-1 p-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 text-gray-600">Who I Am</h2>
          <p className="py-4 text-gray-600">
            As a dedicated software engineering graduate, I specialize in
            crafting user-centric digital applications from the ground up,
            encompassing both front-end and back-end development. With a
            profound understanding of web development technologies and an innate
            passion for innovation, I bring a unique blend of technical
            expertise and creative problem-solving. My commitment to effective
            client communication ensures that I not only meet but exceed
            expectations. Whether collaborating within a team or spearheading
            individual endeavors, I am consistently driven to deliver seamless,
            high-quality solutions.
          </p>
          <a href="/#projects">
            <p className="text-gray-900 underline hover:text-[#5651e5]">
              Check out some of my latest projects
            </p>
          </a>
        </div>
        <div className="w-full h-[550px] m-auto flex items-center justify-center p-2 ">
          <img className="w-[70%] hover:scale-105 ease-in duration-100" src={"/images/aboutProfile.webp"} alt="Profile" />
        </div>
      </div>
    </div>
  );
}
