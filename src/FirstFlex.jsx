import React from 'react';
import Image1 from './public/image1.jpg';

const FirstFlex = () => {
  return (
    <div className="min-h-screen flex-col md:flex-col xl:flex-row lg:flex-row flex w-full xl:justify-between lg:justify-between justify-start items-center bg-primary px-4 md:px-6 lg:px-8 xl:px-16">
      <div className="xl:flex-1 mt-8 lg:flex-1 w-full">
        <h1 className="text-white xl:text-start text-center lg:text[35] md:text[35px] text-[30px] xl:text-[40px] font-extrabold">
          The best delivery drivers
          <br /> you have ever seen
        </h1>
        <p className="text-white xl:text-start text-center">
          Safety - secure,
          <br />
          protected, and risk-free
        </p>
      </div>

      <div className="mt-8 flex-1">
        <img
          className="rounded-md xl:w-[600px] xl:h-[400px] lg:w-[600px] lg:h-[400px] md:w-[700px]"
          src={Image1}
          alt="image"
        />
      </div>
    </div>
  );
};

export default FirstFlex;
