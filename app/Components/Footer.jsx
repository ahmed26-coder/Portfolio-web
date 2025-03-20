const Footer = () => {
  return (
    <div className="px-[5%] w-full sm:px-[15%] flex flex-col sm:flex-row justify-between py-[4%] sm:py-[1%] bg-gray-100 dark:bg-black text-left">
      <small className="dark:text-[#FFFFFF]/40 text-[#999999]">
        &copy;2024 <span className="text-black dark:text-white text-base font-bold">Chanvanda · Version 2.0</span> . Version 1.0
      </small>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 mt-2 sm:mt-0">
        <small className="text-black dark:text-white text-base font-bold">
          <span className="dark:text-[#FFFFFF]/40 text-[#999999] font-normal">Made by </span>Ahmad Adham
        </small>
        <small className="text-[#FABC9B] text-base cursor-pointer transition-all duration-300 ease-in-out hover:scale-110">Life is love</small>
      </div>
    </div>
  );
};

export default Footer;
