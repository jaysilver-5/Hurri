import React from 'react';
import NextIcon from './public/NextIcon.svg';
import AppleStore from './public/apple.svg';
import Image3 from './public/image3.jpg';
import PlayStore from './public/playstore.svg';

const Download = () => {
  return (
    <div className="xl:h-[90vh] w-full xl:pt-0 lg:pt-0 md:pt-8 pt-8 lg:h-[90vh] md:min-h-[90vh] min-h-[90vh] xl:flex-row lg:flex-row md:flex-col flex-col flex justify-between md:justify-center lg:justify-center xl:justify-center items-center bg-[#17181A]">
      <div className="flex-1 w-full pl-16 flex flex-col">
        <div className="w-full">
          <h1 className="text-white text-start xl:text-[40px] lg:text-[35px] text-[30px] font-extrabold">
            Our App has moved from Great to Extraordinary!
          </h1>
          <p className="text-white text-[20px] text-start">
            We&apos;ve turned our app into something extraordinary to serve you
            exceptionally well.
          </p>
          <div className="flex gap-x-1 mt-2 items-center">
            <h1 className="font-bold text-white">Learn more</h1>
            <img src={NextIcon} alt="next-icon" width={26} height={20} />
          </div>

          <div className="flex gap-x-4 mt-4">
            <img
              src={AppleStore}
              className="text-white text-[28px] px-1 h-7 md:h-12 lg:h-[3.2rem] xl:h-[3.2rem] md:w-24 lg:w-28 xl:w-28 rounded-md border border-[#fff] w-20"
            />

            <img
              src={PlayStore}
              className="text-white text-[28px] px-1 h-7 md:h-12 lg:h-[3.2rem] xl:h-[3.2rem] md:w-24 lg:w-28 xl:w-28 rounded-md border border-[#fff] w-20"
            />
          </div>
        </div>
      </div>

      <img
        className="flex-1 xl:w-[600px] p-4 xl:p-0 lg:p-0 md:p-0 mt-8 lg:mt-0 md:mt-8 xl:mt-0 xl:h-full lg:w-[600px] w-[600px] lg:h-full md:h-[300px] h-[250px] md:w-[550px]"
        src={Image3}
        alt="image"
      />
    </div>
  );
};

export default Download;
