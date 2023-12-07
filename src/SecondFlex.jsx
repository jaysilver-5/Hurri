import React from 'react';
import Image2 from './public/image2.jpg';

const SecondFlex = () => {
  return (
    <div className="min-h-screen flex-col-reverse p-4 md:flex-col-reverse xl:flex-row lg:flex-row flex w-full justify-between items-center bg-primary sm:px-4 md:px-8 lg:px-12 xl:px-16">
      <img
        className="flex-1 rounded-md xl:w-[600px] xl:h-[400px] lg:w-[370px] w-[350px] lg:h-[400px] md:h-[340px] h-[300px] md:w-[300px]"
        src={Image2}
        alt="image"
      />

      <div className="flex-1 flex flex-col items-end">
        <div>
          <h1 className="text-white text-start lg:text[35] md:text[35px] text-[30px] xl:text-[40px] font-extrabold">
            Quality riders
            <br />
            ready to deliver
          </h1>
          <p className="text-white lg:text-[16px] text-[14px] xl:text-[16px]">
            Experience the future of delivery – fast, safe, and seamless.
          </p>
          <button className="bg-[#633A93] font-semibold mt-4 xl:mt-8 lg:text-[14px] md:text-[14px] text-[14px] xl:text-[16px] rounded-md flex justify-center items-center p-2 xl:p-4">
            Let&apos;s Help You Deliver!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondFlex;
