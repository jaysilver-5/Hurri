import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-screen p-4 flex items-center justify-center bg-[#141516]">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-white text-center font-bold text-[28px] md:text-[42px] lg:text-[48px] xl:text-[52px]">
          Simplify your life
          <br /> with stress-free delivery.
        </h1>
        <p className="text-white text-center text-[15px] lg:text-[15px] xl:text-[20px]">
          Reliability - dependable, trustworthy, consistent, and professional
        </p>
        <button className="bg-[#633A93] font-semibold mt-4 xl:mt-8 lg:text-[14px] md:text-[14px] text-[14px] xl:text-[16px] rounded-md flex justify-center items-center p-2 xl:p-4">
          Let&apos;s Help You Deliver
        </button>
        <p className="text-lightgray text-[10px] mt-0 xl:mt-2 md:text-[10px] lg:text-[10px] xl:text-[12px]">
          Currently Serving Benin City, Nigeria.
        </p>
      </div>
    </div>
  );
};

export default Banner;
