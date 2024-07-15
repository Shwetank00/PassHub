import React from "react";
import { FaUnlock } from "react-icons/fa";

export const Header = () => {
  return (
    <div>
      <span className="inline-block">Your own Password Keeper</span>{" "}
      <FaUnlock className="inline-block" />
    </div>
  );
};
