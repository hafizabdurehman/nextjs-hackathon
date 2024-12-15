import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full flex flex-col md:flex-row px-4 md:px-10 md:mx-16 pl-4 md:pl-0 text-[#2A254B]">
      {/* Left Side */}
      <div className="w-full md:w-[760px] h-auto md:h-[584px] bg-[#2A254B] my-0 md:my-10">
        <div className="p-4 md:p-14 text-white">
          <p className="text-[24px] md:text-[32px] md:pr-48">
            The furniture brand for the future, with timeless designs
          </p>
          <button className="bg-[#F9F9F926] py-[12px] px-[24px] md:py-[16px] md:px-[32px] text-sm md:text-base my-4 md:my-10">
            View collection
          </button>
          <p className="text-base md:text-lg mt-10 md:mt-36 md:pr-5">
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors, and a beautiful way
            to display things digitally using modern web technologies.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden md:flex items-start mt-10">
        <Image
          src={"/images/hero-right.svg"}
          alt="hero"
          height={584}
          width={520}
        />
      </div>
    </div>
  );
};

export default Hero;
