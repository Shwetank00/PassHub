import React, { useState } from "react";
import { Card } from "./Card";

export const Cards = ({ newPassword }) => {
  const storedPasswords = localStorage.getItem("passwords");
  const passwords = JSON.parse(storedPasswords);
  if (!passwords) {
    return (
      <div className="text-slate-50 font-bold text-2xl text-center m-3">
        No passwords found.
      </div>
    );
  }

  const [passwordCards, setPasswordCards] = useState(
    passwords.map((item, index) => (
      <Card
        key={index}
        website={item.website}
        username={item.username}
        password={item.password}
      ></Card>
    ))
  );

  const createCard = (newPassword) => {
    return (
      <Card
        key={newPassword.index}
        website={newPassword.website}
        username={newPassword.username}
        password={newPassword.password}
      ></Card>
    );
  };

  const handleClick = (newPassword) => {
    setPasswordCards((prevCards) => [...prevCards, createCard(newPassword)]);
  };

  return (
    <>
      <div className="max-w-7xl text-slate-50  mx-auto py-5">
        <div className="text-3xl font-bold mx-auto bg-slate-50 text-slate-800 text-center rounded-xl  w-80 py-2 ">
          Your Passwords
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-4 ">
          {passwordCards}
        </div>
      </div>
    </>
  );
};
