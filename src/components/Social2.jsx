import React from "react";

function Social2({ icon, title, id, cardColor, btnColor, ext }) {
  return (
    <div
      className={`social2 shadow-sm ${cardColor} ${ext} ease-in duration-100 active:scale-[0.99] cursor-pointer  relative rounded-[25px] socialBox p-3 `}
    >
      <div>
        <img className="h-[35px] w-[35px]" src={icon} alt="x" />
      </div>
      <div>
        <p className=" mt-1 leading-tight mb-0 p-0 text-base">{title}</p>
        <p className="text-sm m-0 p-0 leading-none text-[rgb(0,0,0,0.65)] ">
          {id} 
        </p>
      </div>
      <div className="w-full flex justify-center">
        <button
          className={`absolute ${btnColor} text-white px-4 text-sm font-semibold rounded-full bottom-3 h-[29px] `}
        >
          Follow
        </button>
      </div>
    </div>
  );
}

export default Social2;
