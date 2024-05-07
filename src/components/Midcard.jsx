import React from "react";

function Midcard({ title, photoURL, details, btnColor, cardColor }) {
  return (
    <div
      className={`midCard lg:h-[187px] h-[150px] shadow-sm  cursor-pointer active:scale-[0.99] ease-in duration-100 rounded-[25PX]  flex p-4 ${cardColor}`}
    >
      <div className="midCardText relative">
        <h3 className="text-[18px] lg:text-[22px]">{title}</h3>
        <span className="lg:text-base text-xs leading-none m-0 p-0 text-[#909090]">
          {details}
        </span>
        <br />
        <button
          className={`lg:h-[35px] h-[30px]  absolute lg:bottom-4 bottom-0 rounded-full px-3  text-white active:scale-[0.995] text-sm ${btnColor}`}
        >
          <span className="lg:text-sm text-xs">Show details</span>
        </button>
      </div>
      <div className="midCardPhoto  flex justify-end items-center">
        <img
          className="lg:h-[85px] lg:w-[85px] w-[60px] h-[60px] rounded-md"
          src={photoURL}
          alt={photoURL}
        />
      </div>
    </div>
  );
}

export default Midcard;
