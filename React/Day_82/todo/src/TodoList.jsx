import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  const addNewTask = () => {
    setTodos((pt) => {
      return [...pt, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  const updateTodoValue = (e) => {
    setNewTodo(e.target.value);
  };

  const deleteTodo = (id) => {
    setTodos((pt) => todos.filter((pt) => pt.id != id));
  };

  let markAllDone = () => {
    setTodos((pv) =>
      pv.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  let markAsDone = (id) => {
    setTodos((pv) =>
      pv.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="add a task"
        style={{ marginRight: 20 }}
        value={newTodo}
        onChange={updateTodoValue}
      />
      <button onClick={addNewTask}>Add</button>
      <hr />
      <h4>Task Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {todo.task}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: 20 }}
            >
              delete
            </button>
            <button
              onClick={() => markAsDone(todo.id)}
              style={{ marginLeft: 20 }}
            >
              Mark as done
            </button>
          </li>
        ))}
      </ul>

      <button onClick={markAllDone}>Mark all as done</button>
    </div>
  );
}

export default TodoList;
