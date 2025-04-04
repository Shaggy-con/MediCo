import React, { useState } from "react";
import Button from "./Button";

function Form({ work }) {
  const [formData, setFormData] = useState({ id: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputStyle =
    "bg-white m-2 h-10 rounded-lg w-3/4 px-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="bg-blue-100 min-w-[600px] w-1/2 p-6 rounded-xl flex flex-col items-center shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Please Enter Your Details</h1>
      <form className="flex flex-col items-center w-[90%]">
        <label htmlFor="ID" className="text-lg font-medium">
          ID Number
        </label>
        <input
          type="text"
          id="ID"
          name="id"
          value={formData.id}
          onChange={handleChange}
          className={inputStyle}
        />

        <label htmlFor="Pass" className="text-lg font-medium mt-3">
          Password
        </label>
        <input
          type="password"
          id="Pass"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={inputStyle}
        />

        <Button text="Login" work={work} />
      </form>
    </div>
  );
}

export default Form;
