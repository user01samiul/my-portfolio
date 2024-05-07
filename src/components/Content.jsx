import React from "react";

import Grid1 from "./Grid1";
import Social from "./Social";
import Form from "./Form";

function Content() {
  return (
    <div className="content h-auto md:px-3 px-6 lg:px-3 xl:px-28 py-8">
      <Grid1 />
      <Social />
      <Form/>
    </div>
  );
}

export default Content;
