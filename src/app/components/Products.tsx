// import React from 'react'
// import Image from 'next/image'

// const Products = () => {
//   return (
//     <div className='w-[1440px] h-[744px] text-[#2A254B] p-20  '>
//         <div className=''>
//             <div className='text-[32px] '>Our popular products</div>
//             <div className='flex gap-4'>
//                 {/* 1 */}
//                 <div className='space-y-4'>
//                     <Image
//                     src={"images/Product-1.svg"}
//                     alt='sofa'
//                     height={375}
//                     width={630}
//                     />
//                     <p className='text-xl'>The Poplar suede sofa</p>
//                     <p className='text-lg'>£980</p>
//                 </div>

//                 {/* 2 */}
//                 <div className='space-y-4'>
//                 <Image
//                     src={"/images/Product-2.svg"}
//                     alt='chair'
//                     height={375}
//                     width={305}
//                     />
//                 <p className='text-xl'>The Dandy chair</p>
//                 <p className='text-lg'>£250</p>
//                 </div>

//                 {/* 3 */}
//                 <div className='space-y-4'>
//                 <Image
//                     src={"/images/Product-3.png"}
//                     alt='sofa'
//                     height={375}
//                     width={305}
//                     />
//                 <p className='text-xl'>The Dandy chair</p>
//                 <p className='text-lg'>£250</p>
//                 </div>
//             </div>
//         </div>

//           {/* button */}
//           <div className="flex justify-center items-center my-12">
//         <button className="py-[16px] px-[32px] text-base bg-[#F9F9F9] text-balck">
//           View collection
//         </button>
//         </div>

//     </div>
//   )
// }

// export default Products

import React from "react";
import Image from "next/image";

const Products = () => {
  return (
    <div className="w-full md:w-[1440px] h-auto text-[#2A254B] p-4 md:p-20 ">
      <div>
        <div className="text-2xl md:text-[32px] font-semibold text-left mb-6">
          Our popular products
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center md:items-start">
          {/* 1 */}
          <div className="space-y-4">
            <Image
              src={"images/Product-1.svg"}
              alt="sofa"
              height={375}
              width={630}
              className="w-full h-auto"
            />
            <p className="text-lg md:text-xl">The Poplar suede sofa</p>
            <p className="text-base md:text-lg">£980</p>
          </div>

          {/* 2 */}
          <div className="space-y-4">
            <Image
              src={"/images/Product-2.svg"}
              alt="chair"
              height={375}
              width={305}
              className="w-full h-auto"
            />
            <p className="text-lg md:text-xl">The Dandy chair</p>
            <p className="text-base md:text-lg">£250</p>
          </div>

          {/* 3 */}
          <div className="space-y-4">
            <Image
              src={"/images/Product-3.png"}
              alt="sofa"
              height={375}
              width={305}
              className="w-full  h-[375px]"
            />
            <p className="text-lg md:text-xl">The Dandy chair</p>
            <p className="text-base md:text-lg">£250</p>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center items-center my-6 md:my-12">
        <button className="py-[12px] px-[24px] md:py-[16px] md:px-[32px] text-sm md:text-base bg-[#F9F9F9] text-black rounded-md">
          View collection
        </button>
      </div>
    </div>
  );
};

export default Products;
