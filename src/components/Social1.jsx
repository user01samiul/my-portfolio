import React from "react";

function Social1({ ext }) {
  return (
    <div
      className={`social1 ${ext} shadow-sm ease-in duration-100 active:scale-[0.99] cursor-pointer flex flex-col items-center relative rounded-[25px] socialBox bg-[rgb(0,118,178,0.07)] hover:bg-[rgb(0,118,178,0.14)] active:bg-[rgb(0,118,178,0.14)]`}
    >
      <div className="image w-full flex mt-6 justify-center">
        <img
          className="lg:h-[50px] lg:w-[50px] h-[40px]  w-[40px]"
          src="linkedin.png"
          alt="linkedin"
        />
      </div>
      <div className="text w-full">
        <p className=" text-center mt-1 mb-0 lg:text-base text-sm p-0 leading-tight">
          LinkedIn
        </p>
        <p className="text-center lg:text-sm text-xs leading-none text-[rgb(0,0,0,0.65)] m-0 p-0 ">
          @samiul123
        </p>
      </div>

      <button className="absolute  lg:h-[33px] h-[27px] rounded-[5px] lg:px-3 px-2 bg-[#0076B2] text-white font-semibold lg:text-sm text-xs  lg:bottom-4 bottom-3 mx-auto hover:bg-[#1b5877] active:bg-[#1b5877]">
        Visit profile
      </button>
    </div>
  );
}

export default Social1;
