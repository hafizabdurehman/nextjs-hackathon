import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { CiMoneyCheck1 } from "react-icons/ci";
import { LuSprout } from "react-icons/lu";

const Brand = () => {
  return (
    <div className="w-full px-4 md:px-20 py-10 text-[#2A254B]">
      <div>
        {/* Title */}
        <div className="text-[#2A254B] text-xl md:text-2xl flex justify-center items-center mb-10">
          What makes our brand different
        </div>

        {/* Brand Features */}
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-8">
          {/* 1 */}
          <div className="text-[#2A254B] text-center md:text-left space-y-4">
            <FaTruckFast size={30} className="mx-auto md:mx-0" />
            <p className="text-lg md:text-xl">Next day as standard</p>
            <p className="text-sm md:text-base">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
          {/* 2 */}
          <div className="text-[#2A254B] text-center md:text-left space-y-4">
            <IoCheckmarkCircleOutline size={30} className="mx-auto md:mx-0" />
            <p className="text-lg md:text-xl">Made by true artisans</p>
            <p className="text-sm md:text-base">
              Handmade crafted goods made with real passion and craftsmanship
            </p>
          </div>
          {/* 3 */}
          <div className="text-[#2A254B] text-center md:text-left space-y-4">
            <CiMoneyCheck1 size={30} className="mx-auto md:mx-0" />
            <p className="text-lg md:text-xl">Unbeatable prices</p>
            <p className="text-sm md:text-base">
              For our materials and quality you won&apos;t find better prices
              anywhere
            </p>
          </div>
          {/* 4 */}
          <div className="text-[#2A254B] text-center md:text-left space-y-4">
            <LuSprout size={30} className="mx-auto md:mx-0" />
            <p className="text-lg md:text-xl">Recycled packaging</p>
            <p className="text-sm md:text-base">
              We use 100% recycled packaging to ensure our footprint is
              manageable
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
