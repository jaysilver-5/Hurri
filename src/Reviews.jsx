import React from 'react';
import { BsTwitter } from 'react-icons/bs';

const Reviews = () => {
  return (
    <div className="min-h-screen py-8 flex flex-col border-none md:flex-col xl:flex-row lg:flex-row w-full justify-between items-center bg-[#0E0E0F] px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="w-full">
        <h1 className="text-white leading-10 text-start xl:text-[40px] lg:text-[32] md:text-[32px] text-[20px] font-extrabold">
          What customers are saying
        </h1>

        <div className="w-full gap-y-4 xl:flex-row lg:flew-row md:flex-col flex-col flex gap-x-10 justify-between mt-6 xl:mt-12 lg:mt-12 md:mt-12">
          <div className="w-full border flex flex-col justify-between border-lightgray p-4 h-48 rounded-md">
            <p className="text-white">
              Hurri is the most reliable delivery service in Nigeria.
            </p>
            <div className="flex items-center gap-x-1">
              <div className="bg-[#1DA1F2] flex items-center justify-center w-12 h-12 rounded-full">
                <BsTwitter className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">Joshua Udo</p>
                <p className="text-[#01B487]">@udojoshua3</p>
              </div>
            </div>
          </div>
          <div className="w-full border flex flex-col justify-between border-lightgray p-4 h-48 rounded-md">
            <p className="text-white">
              Hurri. Been reliable during this lockdown
            </p>
            <div className="flex items-center gap-x-1">
              <div className="bg-[#1DA1F2] flex items-center justify-center w-12 h-12 rounded-full">
                <BsTwitter className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">
                  John U. Udo
                </p>
                <p className="text-[#01B487]">@johnuudo</p>
              </div>
            </div>
          </div>
          <div className="w-full border flex flex-col justify-between border-lightgray p-2 xl:p-4 lg:p-4 md:p-4 h-48 rounded-md">
            <p className="text-white">
              Hurri. Been reliable during this lockdown
            </p>
            <div className="flex items-center gap-x-1">
              <div className="bg-[#1DA1F2] flex items-center justify-center w-12 h-12 rounded-full">
                <BsTwitter className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">
                  @ehigiedestiny
                </p>
                <p className="text-[#01B487]">@ehigiedestiny</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
