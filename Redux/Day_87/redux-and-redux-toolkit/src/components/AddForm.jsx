import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice"; 

function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(task);
    dispatch(addTodo(task));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={(e) => setTask(e.target.value)} />
        <button>Add Task</button>
      </form>
    </div>
  );
}

export default AddForm;
