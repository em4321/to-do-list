import { store } from "../redux/store";
import { addTodos } from "../redux/todoSlice";
import axios from "axios";

export const getTodos = async () => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/todos?userId=1`
  );

  store.dispatch(addTodos(data));
};
