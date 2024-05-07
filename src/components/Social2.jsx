import React from "react";
import {motion} from "framer-motion"

function Social2({ icon, title, id, cardColor, btnColor, ext }) {

  return (
    <div

      className={`social2 shadow-sm ${cardColor} ${ext} ease-in duration-100 active:scale-[0.99] cursor-pointer  relative sm:rounded-[25px] rounded-xl socialBox lg:p-3 p-[9px] `}
    >
      <div>
        <img
          className="lg:h-[35px] lg:w-[35px] sm:h-[28px] sm:w-[28px] h-[20px] w-[20px]"
          src={icon}
          alt="x"
        />
      </div>
      <div>
        <p className=" mt-1 leading-tight mb-0 p-0 lg:text-base sm:text-sm text-[7px]">
          {title}
        </p>
        <p className="lg:text-sm sm:text-xs text-[6px] m-0 p-0 leading-none text-[rgb(0,0,0,0.65)] ">
          {id}
        </p>
      </div>
      <div className="w-full flex justify-center">
        <button
          className={`absolute ${btnColor} text-white lg:px-4 sm:px-3 px-2 lg:text-sm sm:text-xs text-[7px]  font-semibold rounded-full lg:bottom-3 sm:bottom-2 bottom-1.5 lg:h-[29px] sm:h-[24px] h-[14px]`}
        >
          Follow
        </button>
      </div>
    </div>
  );
}

export default Social2;
