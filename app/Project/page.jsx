import { DataProjects } from "../Components/Constent";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useMemo } from "react";

const Page = () => {
  const projects = useMemo(() => DataProjects, []);

  return (
    <div className="pr-[5%] pl-[5%] sm:pl-[0%]">
      <h2 className="text-3xl font-bold mt-10">Projects</h2>
      <div className="grid grid-cols-1 my-10 sm:grid-cols-2 gap-10">
        {projects.map((pero) => (
          <article
            key={pero.id}
            className="bg-[#F4F5F5] dark:bg-[#141414] border-2 border-[#000000]/8 rounded-lg"
          >
            <div>
              <Image
                className="rounded-t-lg w-full"
                src={pero.img}
                width={500}
                height={300}
                alt={pero.title}
                priority
              />
            </div>
            <div className="p-5">
              <h2 className="text-2xl font-bold">{pero.title}</h2>
              <div className="flex gap-5 items-center mt-4">
                <p className="text-[#999999] hidden sm:block">{pero.dish}</p>
                <p className=" bg-[#999999] text-black font-medium py-[1px] px-4 rounded-full">{pero.technique}</p>
                <p className=" bg-[#999999] text-black font-medium py-[1px] px-4 rounded-full">{pero.language}</p>
              </div>
              <div className="flex justify-between mt-5 px-[2%] sm:px-[10%]">
                <a
                  className="text-base sm:text-lg flex items-center gap-1 border-2 rounded-md py-1 px-5"
                  href={pero.git}
                  target="_blank"
                  aria-label="github code"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-3xl" />
                  GitHub
                </a>
                <a
                  className="text-base sm:text-lg border-2 rounded-md py-1 px-5"
                  href={pero.live}
                  aria-label="live dome"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Page;
