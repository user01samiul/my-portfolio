import React from "react";

function Bigcard() {
  return (
    <div className="bigCard shadow-sm hover:bg-[rgb(212,212,212,0.24)] active:bg-[rgb(212,212,212,0.24)] cursor-pointer active:scale-[0.99] ease-in duration-100 p-4  flex flex-col  h-[257px]  rounded-[25px] ">
      <div className="container1 flex">
        <div className="bigCardText relative flex flex-col">
          <h3 className="text-[27px]">Portfolio</h3>
          <span className="text-base text-[#909090]">
            Projects completed & worked in.
          </span>
          <p className="text-[23px] text-[#909090]">
            Explore my websites, web apps & UI/UX designs.
          </p>
        </div>
        <div className="bigCardPhotos ">
          <img className="h-full w-full rounded-md" src="screen.jpg" alt="" />
          <img className="h-full w-full rounded-md" src="screen.jpg" alt="" />
          <img className="h-full w-full rounded-md" src="screen.jpg" alt="" />
          <img className="h-full w-full rounded-md" src="screen.jpg" alt="" />
        </div>
      </div>
      <button
        className={`h-[40px] px-5 mx-auto w-[fit-content] active:scale-[0.995]  rounded-full bg-green-400 mt-auto  hover:bg-green-600 active:bg-green-600 font-semibold `}
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
