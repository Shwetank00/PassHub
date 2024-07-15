import React, { useEffect, useState } from "react";
import { FaKey } from "react-icons/fa";

export const AddPassword = ({ form }) => {
  //! SAVE PASSWORD TO LOCAL STORAGE ON CLICKING ADD PASSWORD BUTTON
  // Function to save password to local storage
  const savePassword = () => {
    // Add the form password to the passwordArray state
    setpasswordArray([...passwordArray, form]);
    // Convert the passwordArray to JSON string and save it to local storage
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
  };

  //! PASSWORD ARRAY TO FETCT OTHER PASSWORDS FROM LOCAL STORAGE
  // State to store the array of passwords
  const [passwordArray, setpasswordArray] = useState([]);
  // useEffect hook to fetch passwords from local storage on component mount
  useEffect(() => {
    // Get the passwords from local storage
    let passwords = localStorage.getItem("passwords");
    // If passwords exist, parse them and update the passwordArray state
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  return (
    <div>
      <div className="text-center w-full ">
        <button onClick={savePassword} className="btn-primary font-medium ">
          <FaKey className="inline-block mr-2" />
          <span className="inline-block">Add Password</span>{" "}
        </button>
      </div>
    </div>
  );
};
