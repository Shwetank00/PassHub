import React, { useState } from "react";
import { Logo } from "./Logo/Logo";
import { PasswordInput } from "./Input/PasswordInput";
import { Header } from "./Header/Header";
import { AddPassword } from "./Buttons/AddPassword";

export const Manager = () => {
  const [form, setform] = useState({ site: "", username: "", password: "" });

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="  max-w-5xl text-slate-50 mycontainer  shadow-2xl ">
        <div className="text-center text-3xl">
          <Logo></Logo>
        </div>

        <Header></Header>

        <div className="flex flex-col p-4 ">
          <input
            name="site"
            onChange={handleChange}
            value={form.site}
            className=" input-box "
            type="text"
            placeholder="Enter Website URL"
          />
          <div className="flex flex-row gap-4 w-full">
            <input
              name="username"
              onChange={handleChange}
              value={form.username}
              className=" input-box"
              type="text"
              placeholder="Username"
            />
            <PasswordInput
              name="password"
              handleChange={handleChange}
              value={form.password}
            />
          </div>
        </div>
        <AddPassword form={form}></AddPassword>
      </div>
    </>
  );
};
