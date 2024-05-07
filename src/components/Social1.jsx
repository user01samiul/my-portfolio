import { motion } from "framer-motion";
import React from "react";

function Social1({ ext }) {
  return (
    <div
      
      className={`social1 ${ext} shadow-sm ease-in duration-100 active:scale-[0.99] cursor-pointer flex flex-col items-center relative sm:rounded-[25px] rounded-xl socialBox bg-[rgb(0,118,178,0.07)] hover:bg-[rgb(0,118,178,0.14)] active:bg-[rgb(0,118,178,0.14)]`}
    >
      <div className="image w-full flex mt-6 justify-center">
        <img
          className="lg:h-[50px] lg:w-[50px] sm:h-[40px]  sm:w-[40px] h-[23px] w-[23px]"
          src="linkedin.png"
          alt="linkedin"
        />
      </div>
      <div className="text w-full">
        <p className=" text-center mt-1 mb-0 lg:text-base sm:text-sm p-0 leading-tight text-[7px]">
          LinkedIn
        </p>
        <p className="text-center lg:text-sm sm:text-xs text-[6px] leading-none text-[rgb(0,0,0,0.65)] m-0 p-0 ">
          @samiul123
        </p>
      </div>

      <button className="absolute  lg:h-[33px] sm:h-[27px] h-[18px] rounded-[5px] lg:px-3 sm:px-2 px-2 bg-[#0076B2] text-white font-semibold lg:text-sm sm:text-xs  lg:bottom-4 bottom-3 mx-auto hover:bg-[#1b5877] active:bg-[#1b5877] text-[7px]">
        Visit profile
      </button>
    </div>
  );
}

export default Social1;
