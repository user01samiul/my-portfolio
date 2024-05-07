import React from "react";
import Bigcard from "./Bigcard";
import Midcard from "./Midcard";

function Grid1() {
  return (
    <div className="grid1 lg:h-[88%] h-[70%]  ">
      <div className="box1 box">
        <Midcard
          title="Expertise"
          details="Front end development & UI/UX"
          photoURL="screen.jpg"
          btnColor="bg-[#A53EF5] hover:bg-[#5b188f] active:bg-[#5b188f]"
          cardColor="bg-[rgb(165,62,245,0.07)] hover:bg-[rgba(165,62,245,0.14)] active:bg-[rgba(165,62,245,0.14)]"
        />
      </div>
      <div className="box2 box">
        <Midcard
          title="About me"
          details="Personal details"
          photoURL="sami.jpg"
          btnColor="bg-[black] hover:bg-[#090d35] active:bg-[#090d35]"
          cardColor="bg-[rgb(71,252,111,0.07)] hover:bg-[rgb(71,252,111,0.14)] active:bg-[rgb(71,252,111,0.14)]"
        />
      </div>
      <div className="box3 box">
        <Bigcard />
      </div>
    </div>
  );
}

export default Grid1;
