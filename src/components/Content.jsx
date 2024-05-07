import { motion } from "framer-motion";
import React from "react";

import Form from "./Form";
import Grid1 from "./Grid1";
import Social from "./Social";

function Content() {

  return (
    <motion.div
      className="content h-auto md:px-3 sm:px-6 px-3 lg:px-3 xl:px-28 py-8"
   
    >
      <Grid1 />
      <Social />
      <Form />
    </motion.div>
  );
}

export default Content;
