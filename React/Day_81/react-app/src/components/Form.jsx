import React from "react";

function handleSubmit(e) {
  e.preventDefault();
  console.log("form was submitted");
}

function Form() {
  return (
    <div>
      <form action="/" onSubmit={handleSubmit}>
        <label htmlFor="username">Username : </label>
        <input type="text" name="username" id="username" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
