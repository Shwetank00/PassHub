import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export const PasswordInput = ({ placeholder, value, name, handleChange }) => {
  const [isShow, setIsShow] = useState(false);
  const toggle = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="flex items-center w-full bg-transparent border-[1.5px] px-5 rounded-lg mb-3 hover:bg-slate-700 ">
      <input
        onChange={handleChange}
        name={name}
        value={value}
        className=" w-full text-sm bg-transparent py-3 mr-3 rounded outline-none "
        type={isShow ? "text" : "password"}
        placeholder={placeholder || "Password"}
      />

      {isShow ? (
        <FaRegEye size={25} onClick={toggle} className="cursor-pointer" />
      ) : (
        <FaRegEyeSlash size={25} onClick={toggle} className="cursor-pointer" />
      )}
    </div>
  );
};
