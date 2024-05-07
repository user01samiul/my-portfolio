import { motion } from "framer-motion";
import React from "react";

function Sidebar() {
  const constVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "linear",
        duration: 0.6,
        delay: 0.2,
      },
    },
  };
  return (
    <div className="sidebar  h-full">
      <motion.div
        className="dp w-[100%] h-auto rounded-full flex justify-center mt-14"
        variants={constVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src="sami.jpg"
          alt="Samiul Islam"
          className="w-[40%] h-auto rounded-[inherit] object-cover"
        />
      </motion.div>
      <motion.div
        className="profileDetails w-full flex flex-col items-center mt-2"
        initial={{ x: -200, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          type:"spring",
          duration: 0.4,
          delay: 0.5
        }}
      >
        <h1 className="text-2xl  ">Md. Samiul Islam</h1>
        <span className="w-[80%] text-base text-center">
          Web app developer &<br />
          UI/UX designer.
        </span>
      </motion.div>

      <motion.div
        variants={constVariants}
        initial="hidden"
        animate="visible"
        className="sidebarbuttons absolute bottom-0 w-[100%]  flex flex-col items-center gap-2 my-4"
      >
        <button className="flex justify-center w-[90%] active:scale-[0.994] bg-[#D9D9D9] rounded-[4px] lg:w-[85%] xl:w-[70%] cursor-pointer  text-sm items-center px-6 h-[42px] gap-2">
          <img src="gmail.png" className="w-[20px]" />{" "}
          <span className="xl:text-base lg:text-sm">
            samiul.primary@gmail.com
          </span>
        </button>
        <button className="flex justify-center w-[90%]  bg-[#8c28d8] xl:text-base text-sm  rounded-[4px] font-medium text-white active:scale-[0.994] lg:w-[85%] xl:w-[70%] cursor-pointer  items-center px-6 h-[42px] gap-2">
          Book a meeting
        </button>
      </motion.div>
    </div>
  );
}

export default Sidebar;
