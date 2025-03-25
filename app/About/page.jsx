import { IoBookmarkOutline } from "react-icons/io5";
import { DataSkills } from "../Components/Constent";
import Motion from "../Components/Motion";
import Image from "next/image";
import { useMemo } from "react";

const page = () => {
  const skills = useMemo(() => DataSkills, []);

  return (
    <div className="w-full max-w-[1200px] mx-auto px-5 sm:mt-[7%] mt-[20%]">
      <div className="flex flex-col sm:flex-row items-center gap-10">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-bold dark:text-white text-[#111111] mt-5 sm:mt-10">
            Hello! I&#39;m Ahmad Adham <Motion />
          </h1>
          <h1 className="text-4xl font-bold dark:text-[#FFFFFF]/60 text-[#666666] mt-3">
            Front-end Developer | React & Next.js Expert
          </h1>
          <p className="text-[#666666] text-xl dark:text-[#FFFFFF]/60 mt-5">
            As a passionate Front-end Developer, I am eager to create visually
            captivating and user-friendly designs. I may be at the beginning of
            my journey, but I am dedicated to learning, growing, and building
            amazing experiences. Let&#39;s collaborate and make something great
            together!
          </p>
        </div>

        <Image
          className="rounded-full w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] object-cover"
          src="/me.jpg"
          alt="Profile Image"
          width={250}
          height={250}
          priority={true}
        />
      </div>

      <div className="flex justify-center sm:justify-start mt-8">
        <a className="w-full sm:w-auto justify-center cursor-pointer flex items-center gap-2 border-2 py-1 px-6 text-lg border-[#AEB1B7] rounded-md" href="/AhmadAdhamCV.pdf" download>
          <IoBookmarkOutline className="text-[#AEB1B7] font-bold text-lg" />Download Cv
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
