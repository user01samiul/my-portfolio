import React from "react";
import Social1 from "./Social1";
import Social2 from "./Social2";

function Social() {
  return (
    <div>
      <h2 className="text-2xl mb-3">Connect with me</h2>
      <div className="grid2 ">
        <Social1 ext="social1" />
        <Social2
          icon="x.png"
          title="X"
          cardColor="bg-[rgb(0,0,0,0.07)] hover:bg-[rgb(0,0,0,0.14)] active:bg-[rgb(0,0,0,0.14)]"
          btnColor="bg-black hover:bg-[#090d35] active:bg-[#090d35]"
          id="unfazedsami"
          ext="social2"
        />

        <Social2
          icon="facebook.png"
          title="Facebook"
          cardColor="bg-[rgb(24,119,242,0.07)] hover:bg-[rgb(24,119,242,0.14)] active:bg-[rgb(24,119,242,0.14)]"
          btnColor="bg-[#1877F2] hover:bg-[#1a529c] active:bg-[#1a529c]"
          id="Samiul Islam"
          ext="social3"
        />
        <div className="social4 socialBoxx"></div>
        <Social2
          icon="instagram.png"
          title="Instagram"
          cardColor="bg-[rgb(232,115,86,0.07)] hover:bg-[rgb(232,115,86,0.14)] active:bg-[rgb(232,115,86,0.14)]"
          btnColor="bg-gradient-to-r from-[rgba(75,96,202)] to-[rgba(255,118,68)] hover:from-[#3047be] active:from-[#3047be] hover:to-orange-700 active:to-orange-700"
          id="_sa.mii__"
          ext="social5"
        />
        <div className="social6 socialBoxx"></div>
      </div>
    </div>
  );
}

export default Social;
