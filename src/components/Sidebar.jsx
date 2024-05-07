import React from "react";

function Sidebar() {
  return (
    <div className="sidebar  h-full ">
      <div className="dp w-[100%] h-auto rounded-full flex justify-center mt-14">
        <img
          src="sami.jpg"
          alt="Samiul Islam"
          className="w-[40%] h-auto rounded-[inherit] object-cover"
        />
      </div>
      <div className="profileDetails w-full flex flex-col items-center mt-2">
        <h1 className="text-2xl  ">Md. Samiul Islam</h1>
        <span className="w-[80%] text-base text-center">
          Web app developer &<br />
          UI/UX designer.
        </span>
      </div>

      <div className="sidebarbuttons absolute bottom-0 w-[100%]  flex flex-col items-center gap-2 my-4">
        <button className="flex justify-center w-[90%] active:scale-[0.994] bg-[#D9D9D9] rounded-[4px] lg:w-[85%] xl:w-[70%] cursor-pointer  text-sm items-center px-6 h-[42px] gap-2">
          <img src="gmail.png" className="w-[20px]" />{" "}
          <span className="xl:text-base lg:text-sm">
            samiul.primary@gmail.com
          </span>
        </button>
        <button className="flex justify-center w-[90%]  bg-[#8c28d8] xl:text-base text-sm  rounded-[4px] font-medium text-white active:scale-[0.994] lg:w-[85%] xl:w-[70%] cursor-pointer  items-center px-6 h-[42px] gap-2">
          Book a meeting
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
