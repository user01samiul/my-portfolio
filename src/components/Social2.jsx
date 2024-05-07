import React from "react";

function Social2({ icon, title, id, cardColor, btnColor, ext }) {
  return (
    <div
      className={`social2 shadow-sm ${cardColor} ${ext} ease-in duration-100 active:scale-[0.99] cursor-pointer  relative rounded-[25px] socialBox lg:p-3 p-[9px] `}
    >
      <div>
        <img className="lg:h-[35px] lg:w-[35px] h-[28px] w-[28px]" src={icon} alt="x" />
      </div>
      <div>
        <p className=" mt-1 leading-tight mb-0 p-0 lg:text-base text-sm">{title}</p>
        <p className="lg:text-sm text-xs m-0 p-0 leading-none text-[rgb(0,0,0,0.65)] ">
          {id} 
        </p>
      </div>
      <div className="w-full flex justify-center">
        <button
          className={`absolute ${btnColor} text-white lg:px-4 px-3 lg:text-sm text-xs font-semibold rounded-full lg:bottom-3 bottom-2 lg:h-[29px] h-[24px] `}
        >
          Follow
        </button>
      </div>
    </div>
  );
}

export default Social2;
