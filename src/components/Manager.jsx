import React, { useState, createRef } from "react";
import { Logo } from "./Logo/Logo";
import { PasswordInput } from "./Input/PasswordInput";
import { Header } from "./Header/Header";
import { AddPassword } from "./Buttons/AddPassword";
import { Cards } from "./Cards/Cards";

export const Manager = () => {
  const formRef = createRef();
  const [newPassword, setNewPassword] = useState({
    website: "",
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", newPassword);
  };
  const handleChange = (e) => {
    setNewPassword({ ...newPassword, [e.target.name]: e.target.value });
  };

 
  return (
    <>
      <div className="   text-slate-50 mycontainer  shadow-2xl ">
        <div className="text-center text-3xl  ">
          <Logo></Logo>
        </div>

        <Header></Header>
        <form onSubmit={handleSubmit} />
        <div className="flex flex-col p-4 ">
          <input
            name="website"
            onChange={handleChange}
            value={newPassword.website}
            className=" input-box "
            type="text"
            placeholder="Website URL"
          />
          <div className="md:flex gap-4 w-full ">
            <input
              name="username"
              onChange={handleChange}
              value={newPassword.username}
              className=" input-box"
              type="text"
              placeholder="Username"
            />
            <PasswordInput
              name="password"
              handleChange={handleChange}
              value={newPassword.password}
            />
          </div>
        </div>
        <AddPassword
          newPassword={newPassword}
          click={handleClick}
        ></AddPassword>
      </div>
      <Cards newPassword={newPassword}></Cards>
    </>
  );
};
