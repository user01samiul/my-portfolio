import React from "react";

import Grid1 from "./Grid1";
import Social from "./Social";

function Content() {
  return (
    <div className="content flex-1  h-auto md:px-3 lg:px-3 xl:px-28 py-8">
      <Grid1 />
      <Social />
    </div>
  );
}

export default Content;
