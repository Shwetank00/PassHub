import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export const PasswordInput = ({ placeholder, value, name,handleChange }) => {
  const [isShow, setIsShow] = useState(false);
  const toggle = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="flex items-center  bg-transparent border-[1.5px] px-4 rounded-lg mb-3 hover:bg-slate-700">
      <input
        onChange={handleChange}
        name={name}
        value={value}
        className=" bg-transparent outline-none"
        type={isShow ? "text" : "password"}
        placeholder={placeholder || "Password"}
      />

      {isShow ? (
        <FaRegEye size={20} onClick={toggle} className="cursor-pointer" />
      ) : (
        <FaRegEyeSlash size={20} onClick={toggle} className="cursor-pointer" />
      )}
    </div>
  );
};
