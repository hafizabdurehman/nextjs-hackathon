import React from "react";
import Image from "next/image";

const Touch = () => {
  return (
    <div className="w-full md:w-[1440px] h-[603px] flex flex-col md:flex-row text-[#2A254B]">
      <div className="w-full md:w-[720px] h-auto p-4 md:p-32 text-[#2A254B]">
        <div className="space-y-6">
          <p className="text-xl md:text-2xl font-semibold">
            From a studio in London to a global brand with over 400 outlets
          </p>
          <p className="text-sm md:text-base">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
          </p>
          <p className="text-sm md:text-base">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique became the hotbed
            for the London interior design community.
          </p>
        </div>

        {/* Button */}
        <div className="flex items-center mt-8 md:mt-32">
          <button className="py-[12px] px-[24px] md:py-[16px] md:px-[32px] text-sm md:text-base bg-[#F9F9F9] text-black rounded-md">
            Get in touch
          </button>
        </div>
      </div>

      <div className="w-full md:w-[720px] flex justify-center">
        <Image
          src={"/images/touch.svg"}
          alt="img"
          height={603}
          width={720}
          className="w-full h-[603px]"
        />
      </div>
    </div>
  );
};

export default Touch;
