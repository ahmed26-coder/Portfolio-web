import { FaCircle } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { DataProject } from "./Components/Constent";
import Motion from "./Components/Motion";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

export default function Home() {
  const projects = useMemo(() => DataProject, []);

  return (
    <>
      <div className="container mx-auto px-5 mt-[28%] sm:mt-[7%] max-w-[1200px]">
        <p className="py-1 px-5 rounded-full flex items-center w-fit gap-1 bg-[#09E37D]/16 text-[#088046] dark:text-[#12C971]">
          <FaCircle className="text-[10px]" />
          Available For Work
        </p>

        <h1 className="text-4xl font-bold dark:text-white text-[#111111] mt-5 sm:mt-10">
          Hello! I&#39;m Ahmad Adham <Motion />
        </h1>
        <h1 className="text-4xl font-bold dark:text-[#FFFFFF]/60 text-[#666666] mt-3">
          Front-end Developer | React & Next.js Expert
        </h1>

        <p className="flex items-center gap-1 text-[#A15830] dark:text-[#FABC9B] font-bold text-lg my-10">
          <IoLocationOutline />
          Egypt Cairo
        </p>

        <p className="text-[#666666] text-xl dark:text-[#FFFFFF]/60">
          As a passionate Front-end Developer, I am eager to create visually
          captivating and user-friendly designs.
          <br />
          I may be at the beginning of my journey, but I am dedicated to
          learning, growing, and building amazing experiences.
          <br />
          Let&#39;s collaborate and make something great together!
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-start gap-5 mt-10 w-full">
          <Link href="/About" className="w-full sm:w-auto">
            <button aria-label="About me page" className="w-full cursor-pointer text-black dark:text-white bg-[#AEB1B7]/32 py-2 px-6 rounded-md text-lg">
              About Me
            </button>
          </Link>
          <a className="w-full sm:w-auto justify-center cursor-pointer flex items-center gap-2 border-2 py-1 px-6 text-lg border-[#AEB1B7] rounded-md" href="/AhmadAdhamCV.pdf" download><IoBookmarkOutline className="text-[#AEB1B7] font-bold text-lg" />Download Cv</a>
        </div>

        <div className="flex justify-between items-center mt-16">
          <h2 className="text-3xl font-bold">Projects</h2>
          <Link href="/Project">
            <button aria-label="all project page" className="border-2 cursor-pointer border-[#999999] py-1 px-5 rounded-full flex items-center gap-2">
              All Projects <FaArrowRightLong className="text-[#999999]" />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 my-10">
          {projects.map((pero) => (
            <article
              key={pero.id}
              className="bg-[#F4F5F5] dark:bg-[#141414] border-2 border-[#000000]/8 rounded-lg"
            >
              <Image
                className="rounded-t-lg w-full"
                src={pero.img}
                width={500}
                height={350}
                alt={pero.title}
                priority
              />
              <div className="p-5">
                <div className="flex justify-between">
                  <p className="text-[#999999]">{pero.dish}</p>
                  <FaArrowRightLong className="text-[#999999]" />
                </div>
                <h2 className=" text-lg sm:text-2xl font-bold">{pero.title}</h2>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
