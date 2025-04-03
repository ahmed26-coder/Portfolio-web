import React from "react";
import Image from "next/image";

export default function Motions() {
  return (
    <div className="relative flex items-center rounded-full justify-center shadow-2xl shadow-blue-500">
      <div className="absolute w-[220px] h-[220px] sm:w-[270px] sm:h-[270px] rounded-full border-4 border-dashed border-black dark:border-white animate-spin-slow"></div>

      <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] rounded-full overflow-hidden flex items-center justify-center">
        <Image
          className="w-full h-full object-cover rounded-full"
          src="/me.jpg"
          alt="Profile Image"
          width={250}
          height={250}
          priority={true}
        />
      </div>
    </div>
  );
}
