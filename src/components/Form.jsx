import { motion } from "framer-motion";
import React from "react";
import Input from "./Input.jsx";

function Form() {
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
        duration: 0.5,
        delay: 0.2,
      },
    },
  };
  return (
    <div className="container">
      <div className="form mt-8">
        <h2 className="animated-h2 lg:text-xl md:text-lg m-0 p-0 text-center lg:text-left">
          Send a message
        </h2>
        <motion.form
          onSubmit={(e) => e.preventDefault()}
          className="w-full flex flex-col form-container"
          variants={constVariants}
          initial="hidden"
          animate="visible"
        >
          <h4 className="mt-3 lg:text-lg md:text-base text-sm">
            Feel free to send a message.
          </h4>
          <Input title="Enter name" placeholder="Enter your name" />
          <Input title="Enter email" placeholder="Enter your email" />
          <div className="flex flex-col mt-3 md:text-base text-sm">
            <label htmlFor="textarea ">Enter your message</label>
            <textarea
              className="form-input-field mt-1 form-textarea md:text-base text-sm"
              name="textarea"
              id="textarea"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <div className="w-full my-2">
            <button
              type="submit"
              className="bg-green-600 md:text-base text-sm active:scale-[0.997] uppercase w-full text-white font-semibold py-2 mb-3"
            >
              Submit
            </button>
          </div>
        </motion.form>
        <div className="w-[50%]"></div>
      </div>
    </div>
  );
}

export default Form;
