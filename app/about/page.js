import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full  md:h-screen p-2 flex items-center justify-between py-16 ">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8">
        <div className="col-span-1 p-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4 text-gray-600">Who I Am</h2>
          <p className="py-4 text-gray-600">
            As a software engineering graduate with a foundation in both
            front-end and back-end development, I am dedicated to crafting
            user-centric digital applications. My experience in managing and
            delivering vital IT projects showcases my efficiency and
            adaptability. This, combined with a deep technical knowledge in web
            development and a track record of effective client communication,
            empowers me to produce seamless solutions. Driven by innovation,
            adaptability, and impeccable communication skills, I am poised to
            contribute meaningfully to team projects and individual endeavors.
          </p>
          <p className="text-gray-700">Check out some of my latest projects</p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400  flex items-center justify-center p-2 hover:scale-105 ease-in duration-300 ">
            {/* <Image src={"/images/profile1.png"} alt="/" width={2525} height={2525} /> */}
            <img src={"/images/profile1.png"} alt="/"  />
        </div>
      </div>
    </div>
  );
}
