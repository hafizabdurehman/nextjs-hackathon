import React from "react";

const ClubBenefits = () => {
  return (
    <div className="w-full h-auto bg-[#F9F9F9] p-4 md:p-20 text-[#2A254B]">
      <div className="w-full md:w-[1273px] h-auto md:h-[364px] bg-white mt-10 md:py-20">
        <div className="space-y-4 text-[#2A254B]">
          {/* Heading */}
          <div className="flex justify-center items-center">
            <p className="text-2xl md:text-4xl font-semibold text-center">
              Join the club and get the benefits
            </p>
          </div>

          {/* Description */}
          <div className="flex justify-center items-center">
            <p className="text-sm md:text-base text-center">
              Sign up for our newsletter and receive exclusive offers on new
              ranges, sales, pop-up stores, and more.
            </p>
          </div>

          {/* Input and Button */}
          <div className="flex flex-col md:flex-row justify-center items-center py-6 md:py-12 gap-4">
            {/* Input Field */}
            <div className="w-full md:w-[354px] h-[56px] bg-[#F9F9F9] p-3">
              <input
                type="text"
                placeholder="your@email.com"
                className="w-full h-full text-base p-2 border border-[#ddd] rounded-md"
              />
            </div>

            {/* Button */}
            <button className="w-full md:w-auto text-medium bg-[#2A254B] py-[12px] px-[32px] text-white rounded-md">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubBenefits;
