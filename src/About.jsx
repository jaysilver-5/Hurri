import React from 'react';
import NextIcon from './public/NextIcon.svg';
import Business from './public/business.jpg';

const About = () => {
  return (
    <div className="min-h-screen items-center bg-primary flex w-full p-12">
      <div className="w-full flex flex-col gap-y-12">
        <h1 className="text-white xl:text-[48px] lg:text-[45px] md:text-[38px] text-[20px] font-semibold">
          We Deliver More than Parcels
        </h1>

        <section className="xl:flex-row lg:flex-row md:flex-col gap-y-4 flex-col flex  w-full gap-x-12 justify-between">
          <div className="w-full h-[22.5rem] flex flex-col">
            <img
              src={Business}
              alt="Hungry"
              className="w-full h-36 rounded-t-lg"
            />
            <div className="flex-grow flex flex-col justify-between bg-[#17181A] rounded-b-lg p-4">
              <div>
                <h1 className="text-white text-[28px] font-semibold">
                  Hungry?
                </h1>
                <p className="text-[14px] text-[#b1b1b1]">
                  We’ve got you covered with GFood
                </p>
              </div>

              <div className="flex gap-x-1 items-center">
                <h1 className="text-semibold text-white">Learn more</h1>
                <img
                  src={NextIcon}
                  alt="next-icon"
                  width={26}
                  height={20}
                />
              </div>
            </div>
          </div>

          <div className="w-full h-[22.5rem] flex flex-col">
            <img
              src={Business}
              alt="Hungry"
              className="w-full h-36 rounded-t-lg"
            />
            <div className="flex-grow flex flex-col justify-between bg-[#17181A] rounded-b-lg p-4">
              <div>
                <h1 className="text-white text-[28px] font-semibold">
                  Hungry?
                </h1>
                <p className="text-[14px] text-[#b1b1b1]">
                  We’ve got you covered with GFood
                </p>
              </div>

              <div className="flex gap-x-1 items-center">
                <h1 className="text-semibold text-white">Learn more</h1>
                <img
                  src={NextIcon}
                  alt="next-icon"
                  width={26}
                  height={20}
                />
              </div>
            </div>
          </div>

          <div className="w-full h-[22.5rem] flex flex-col">
            <img
              src={Business}
              alt="Hungry"
              className="w-full h-36 rounded-t-lg"
            />
            <div className="flex-grow flex flex-col justify-between bg-[#17181A] rounded-b-lg p-4">
              <div>
                <h1 className="text-white text-[28px] font-semibold">
                  Hungry?
                </h1>
                <p className="text-[14px] text-[#b1b1b1]">
                  We’ve got you covered with GFood
                </p>
              </div>

              <div className="flex gap-x-1 items-center">
                <h1 className="text-semibold text-white">Learn more</h1>
                <img
                  src={NextIcon}
                  alt="next-icon"
                  width={26}
                  height={20}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
