"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
const CloseIcon = React.memo(({ closeModal }) => (
  <IoClose
    className="absolute top-[15%] right-[15%] text-white text-4xl cursor-pointer"
    onClick={(e) => {
      e.stopPropagation();
      closeModal();
    }}
  />
));

export default function Motions() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <div
      className="relative flex items-center rounded-full justify-center shadow-2xl shadow-blue-500"
      onClick={() => setIsModalOpen(true)}
       data-aos="zoom-in"
    >
      <div className="absolute w-[220px] h-[220px] sm:w-[270px] sm:h-[270px] rounded-full border-4 border-dashed border-black dark:border-white animate-spin-slow"></div>

      <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] rounded-full overflow-hidden flex items-center justify-center group cursor-pointer">
        <Image
          className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
          src="/me.jpg"
          alt="Profile Image"
          width={250}
          height={250}
          priority={true}
        />
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-md flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <CloseIcon closeModal={closeModal} />
          <div
            className="w-[80%] h-[45%] sm:w-[25%] sm:h-[50%] flex items-center justify-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              className="w-full h-full object-cover rounded-full"
              src="/me.jpg"
              alt="Profile Image"
              width={500}
              height={500}
              priority={false}
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  );
}
