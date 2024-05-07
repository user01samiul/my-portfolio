import React from "react";

function Bigcard() {
  return (
    <div className="bigCard shadow-sm hover:bg-[rgb(212,212,212,0.24)] active:bg-[rgb(212,212,212,0.24)] cursor-pointer active:scale-[0.99] ease-in duration-100 sm:p-4 p-3  flex flex-col  lg:h-[257px] sm:h-[205px] h-[145px]  rounded-[25px] ">
      <div className="container1 flex">
        <div className="bigCardText relative flex flex-col">
          <h3 className="lg:text-[27px] sm:text-[22px] text-[12px] ">Portfolio</h3>
          <p className="lg:text-base text-[#909090] sm:text-sm text-[8px]">
            Projects completed & worked in.
          </p>
          <p className="lg:text-[22px] sm:text-[18px] text-[10px]   text-[#909090]">
            Explore my websites, web apps & UI/UX designs.
          </p>
        </div>
        <div className="bigCardPhotos ">
          <img className="h-full w-full rounded-md " src="screen.jpg" alt="" />
          <img className="h-full w-full rounded-md " src="screen.jpg" alt="" />
          <img className="h-full w-full rounded-md " src="screen.jpg" alt="" />
          <img className="h-full w-full rounded-md " src="screen.jpg" alt="" />
        </div>
      </div>
      <button
        className={`lg:h-[40px] lg:px-5 mx-auto w-[fit-content] active:scale-[0.995]  rounded-full bg-green-400 mt-auto  hover:bg-green-600 active:bg-green-600 font-semibold sm:text-sm sm:px-4 sm:h-[34px] text-[7px] px-2 py-1 `}
      >
        Show details
      </button>
    </div>
  );
}

export default Bigcard;

/* 
        <button
          className={`h-[40px] px-5 mx-auto w-[fit-content]  rounded-full bg-green-400 mt-auto  `}
        >
          Show details
        </button>
*/
