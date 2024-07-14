import React from "react";
import { Logo } from "./Logo";
import { FaKey } from "react-icons/fa";
import { PasswordInput } from "./Input/PasswordInput";

export const Manager = () => {
  return (
    <>
      <div className="  max-w-5xl bg-slate-800 text-slate-50 mycontainer  shadow-2xl ">
        <div className="text-center text-3xl">
          <Logo ></Logo>
        </div>
        <p className="text-center text-xl my-4">Your own Password Keeper</p>
        <div className="flex flex-col p-4 ">
          <input
            className=" input-box "
            type="text"
            placeholder="Enter Website URL"
          />
          <div className="flex flex-row gap-4 w-full">
            <input
              className=" input-box"
              type="text"
              placeholder="Username"
            />

            <PasswordInput />
          </div>
        </div>
        <div className="text-center w-full ">
          <button className="btn-primary font-medium ">
            <FaKey className="inline-block mr-2" />
            <span className="inline-block">Add Password</span>{" "}
          </button>
        </div>









      </div>
    </>
  );
};
