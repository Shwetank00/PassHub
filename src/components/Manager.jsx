import React from "react";
import { Logo } from "./Logo/Logo";
import { FaKey } from "react-icons/fa";
import { PasswordInput } from "./Input/PasswordInput";
import { Header } from "./Header/Header";

export const Manager = () => {
  return (
    <>
      <div className="  max-w-5xl text-slate-50 mycontainer  shadow-2xl ">
        <div className="text-center text-3xl">
          <Logo></Logo>
        </div>
        <div className="text-center text-xl my-4 ">
          <Header></Header>
        </div>
        <div className="flex flex-col p-4 ">
          <input
            className=" input-box "
            type="text"
            placeholder="Enter Website URL"
          />
          <div className="flex flex-row gap-4 w-full">
            <input className=" input-box" type="text" placeholder="Username" />
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
