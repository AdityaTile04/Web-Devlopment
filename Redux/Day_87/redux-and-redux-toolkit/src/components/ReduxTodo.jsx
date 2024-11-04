import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo } from "../features/todo/todoSlice";

function ReduxTodo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    console.log(id);
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <AddForm />
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <button onClick={() => deleteHandler(todo.id)}>Delete Task</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ReduxTodo;
