import React from "react";
import { Logo } from "../Logo/Logo";

export const Navbar = () => {
  return (
    <div
      className="bg-slate-950  text-white flex items-center justify-between px-6 h-14 
    "
    >
      <Logo></Logo>
      <div>
        <ul>
          <li className="flex gap-4 ">
            <a className="hover:font-bold" href="/">
              Home
            </a>
            <a className="hover:font-bold" href="#">
              About
            </a>
            <a className="hover:font-bold" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
