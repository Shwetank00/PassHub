import React from "react";
import { FaUnlock } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="text-center text-xl my-4 ">
      <span className="inline-block">Your own Password Keeper</span>{" "}
      <FaUnlock className="inline-block" />
    </div>
  );
};
