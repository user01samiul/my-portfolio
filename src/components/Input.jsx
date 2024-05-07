import React from "react";

function Input({ title, placeholder }) {
  return (
    <div className="flex flex-col justify-center mt-3">
      <label htmlFor={title}>
        <p className="lg:text-base mb-1 md:text-base text-sm"> {title}</p>
      </label>
      <input
        type="text"
        id={title}
        className="form-input-field md:text-base text-sm"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
