import "./App.css";
import ReduxTodo from "./components/ReduxTodo";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <ReduxTodo />
      </Provider>
    </div>
  );
}

export default App;
