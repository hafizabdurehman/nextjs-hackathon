import React from "react";
import Image from "next/image";

const Ceremics = () => {
  return (
    <div className="w-full px-4 md:px-20 p-10 text-[#2A254B]">
      <div className="text-[32px] my-5 text-[#2A254B]">New ceramics</div>
      <div className="text-[#2A254B] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* 1 */}
        <div className="space-y-4">
          <Image
            src={"/images/ceremic1.svg"}
            alt="dandy-chair"
            height={375}
            width={305}
          />
          <p className="text-xl">The Dandy chair</p>
          <p className="text-base">£250</p>
        </div>

        {/* 2 */}
        <div className="space-y-4">
          <Image
            src={"/images/ceremic2.svg"}
            alt="Rustic Vase Set"
            height={375}
            width={305}
          />
          <p className="text-xl">Rustic Vase Set</p>
          <p className="text-base">£155</p>
        </div>

        {/* 3 */}
        <div className="space-y-4">
          <Image
            src={"/images/ceremic3.svg"}
            alt="The Silky Vase"
            height={375}
            width={305}
          />
          <p className="text-xl">The Silky Vase</p>
          <p className="text-base">£125</p>
        </div>

        {/* 4 */}
        <div className="space-y-4">
          <Image
            src={"/images/ceremic4.svg"}
            alt="dandy-chair"
            height={375}
            width={305}
          />
          <p className="text-xl">The Lucy Lamp</p>
          <p className="text-base">£399</p>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center items-center mt-10">
        <button className="py-[16px] px-[32px] text-base bg-[#F9F9F9]">
          View collection
        </button>
      </div>
    </div>
  );
};

export default Ceremics;
