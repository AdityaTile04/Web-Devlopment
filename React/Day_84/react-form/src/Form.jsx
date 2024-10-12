import React, { useState } from "react";

export default function Form() {
  let [input, setInput] = useState({
    fullName: "",
    username: "",
    password: "",
  });

  function handleInputChange(e) {
    let feildName = e.target.name;
    let fieldVal = e.target.value;

    setInput((currData) => {
      return { ...currData, [feildName]: fieldVal };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    setInput({
      fullName: "",
      username: "",
      password: "",
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name : </label>
        <input
          type="text"
          placeholder="enter your  fullname"
          id="name"
          value={input.fullName}
          name="fullName"
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label htmlFor="username">Username : </label>
        <input
          id="username"
          type="text"
          placeholder="enter username"
          value={input.username}
          name="username"
          onChange={handleInputChange}
        />
        <br /> <br />
        <label htmlFor="password">Password : </label>
        <input
          id="password"
          type="password"
          placeholder="enter password"
          value={input.password}
          name="password"
          onChange={handleInputChange}
        />{" "}
        <br />
        <br /> 
        <button>Submit</button>
      </form>
    </div>
  );
}
