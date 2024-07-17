import React from "react";

export const Card = ({ website, username, password }) => {
  return (
    <>
      <div className="border-2 text-center justify-center mx-auto m-4  p-4 rounded-2xl flex flex-col w-[330px] gap-1 ">
        <div className="flex flex-col justify-center items-center  ">
          <span className="bg-slate-50 text-slate-800 rounded-lg px-4">
            Website
          </span>{" "}
          <a
            href={website}
            target="_blank"
            className="text-blue-400 hover:text-blue-500 text-nowrap overflow-hidden text-ellipsis w-full "
          >
            {website}
          </a>
        </div>
        <span className="bg-slate-50  text-slate-800 rounded-lg ">
          Username
        </span>{" "}
        <span className="overflow-scroll scrollbar-hidden  text-nowrap ">
          {username}
        </span>
        <span className="bg-slate-50 px-2 text-slate-800 rounded-lg">
          Password
        </span>{" "}
        <span className="overflow-scroll scrollbar-hidden text-nowrap ">
          {password}
        </span>
      </div>
    </>
  );
};
