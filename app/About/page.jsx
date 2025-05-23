import { IoBookmarkOutline } from "react-icons/io5";
import { DataSkills } from "../Components/Constent";
import Motion from "../Components/Motion";
import { useMemo } from "react";
import Motions from "../Components/Motions";
import Image from "next/image";

const page = () => {
  const skills = useMemo(() => DataSkills, []);

  return (
    <div className="w-full max-w-[1200px] mx-auto px-5 sm:mt-[7%] mt-[22%]">
      <div className=" flex flex-col lg:flex-row items-center gap-10">
        <div className="text-left">
          <h1 className="text-4xl gap-2 flex flex-col md:flex-row font-bold dark:text-white text-[#111111] mt-5 sm:mt-10">
            Hello! I&#39;m <span className=" items-center md:-mt-2">Ahmad Adham <Motion /></span>
          </h1>
          <h1 className=" text-3xl sm:text-4xl font-bold dark:text-[#FFFFFF]/60 text-[#666666] mt-3">
            Front-end Developer | React & Next.js Expert
          </h1>
          <p className="text-[#666666] text-xl lg:text-center dark:text-[#FFFFFF]/60 mt-5">
            As a passionate Front-end Developer, I am eager to create visually
            captivating and user-friendly designs. I may be at the beginning of
            my journey, but I am dedicated to learning, growing, and building
            amazing experiences. Let&#39;s collaborate and make something great
            together!
          </p>
        </div>
        <Motions />
      </div>

      <div className="flex justify-center sm:justify-start mt-10">
        <a
          className="w-full sm:w-auto justify-center cursor-pointer flex items-center gap-2 border-2 py-1 px-6 text-lg border-[#AEB1B7] rounded-md"
          href="/Ahmad Adham Shrara Cv.pdf"
          download
        >
          <IoBookmarkOutline className="text-[#AEB1B7] font-bold text-lg" />
          Download Cv
        </a>
      </div>

      <div className="border-2 border-gray-300 my-10 dark:border-[#FFFFFF]/6 rounded-lg p-5 sm:p-10">
        <h2 className="text-3xl font-bold text-center sm:text-left">
          User experiences
        </h2>
        <p className="text-[#999999] text-center sm:text-left">
          Programs, offices, and experiences that I use
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
          {skills.map((item) => (
            <article key={item.id} className="flex gap-4 items-center">
              <Image
                className="w-12 h-12 object-contain"
                src={item.img}
                alt={item.title}
                width={50}
                height={50}
                loading="lazy"
              />
              <div>
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p className="text-[#999999] dark:text-[#FFFFFF]/40">
                  Web Designer
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
