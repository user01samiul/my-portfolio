import React from "react";

function Social1({ ext }) {
  return (
    <div
      className={`social1 ${ext} shadow-sm ease-in duration-100 active:scale-[0.99] cursor-pointer flex flex-col items-center relative rounded-[25px] socialBox bg-[rgb(0,118,178,0.07)] hover:bg-[rgb(0,118,178,0.14)] active:bg-[rgb(0,118,178,0.14)]`}
    >
      <div className="image w-full flex mt-6 justify-center">
        <img className="h-[50px] w-[50px]" src="linkedin.png" alt="linkedin" />
      </div>
      <div className="text w-full">
        <p className=" text-center mt-1 mb-0 text-base p-0 leading-tight">
          LinkedIn
        </p>
        <p className="text-center text-sm leading-none text-[rgb(0,0,0,0.65)] m-0 p-0 ">
          @samiul123
        </p>
      </div>

      <button className="absolute  h-[33px] rounded-[5px] px-3 bg-[#0076B2] text-white font-semibold text-sm  bottom-4 mx-auto hover:bg-[#1b5877] active:bg-[#1b5877]">
        Visit profile
      </button>
    </div>
  );
}

export default Social1;
