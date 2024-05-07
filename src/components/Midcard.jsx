import { motion } from "framer-motion";
import React from "react";

function Midcard({ title, photoURL, details, btnColor, cardColor }) {
 
  return (
    <div

      className={`midCard lg:h-[187px] sm:h-[150px] h-[90px] shadow-sm  cursor-pointer active:scale-[0.99] ease-in duration-100 rounded-[25PX]  flex sm:p-4 p-3 ${cardColor}`}
    >
      <div className="midCardText relative">
        <h3 className="sm:text-[18px] lg:text-[22px] text-[10px]">{title}</h3>
        <p className="mid-card-text-span lg:text-base sm:text-xs  m-0 p-0 text-[#909090]">
          {details}
        </p>
        <br />
        <button
          className={`lg:h-[35px] sm:h-[30px] h-[16px] flex items-center justify-center  absolute lg:bottom-4 bottom-0 rounded-full sm:px-3 px-2 text-white active:scale-[0.995] text-sm ${btnColor}`}
        >
          <span className="lg:text-sm sm:text-xs text-[5px]">Show details</span>
        </button>
      </div>
      <div className="midCardPhoto  flex justify-end items-center">
        <img
          className="lg:h-[85px] lg:w-[85px] sm:w-[60px] sm:h-[60px] rounded-md
          w-[40px] h-[40px]
          "
          src={photoURL}
          alt={photoURL}
        />
      </div>
    </div>
  );
}

export default Midcard;
