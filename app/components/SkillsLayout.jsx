import Image from 'next/image';

export default function SkillsLayout ({src, name}) {
  return (
      <div className="py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">
            <Image
              src={`/images/skills/${src}`}
              alt={name}
              width={64}
              height={64}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3>{name}</h3>
          </div>
        </div>
      </div>
  );
};
