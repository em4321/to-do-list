import { useSelector } from "react-redux";
import { selectTodo } from "../redux/todoSlice";

const Header = () => {
  const todos = useSelector(selectTodo);
  let total = 0;
  todos.forEach((todo) => {
    if (todo.completed) {
      total++;
    }
  });
  return (
    <>
      <h1>My Todo List!</h1>
      <p>
        {total} completed tasks out of {todos.length}
      </p>
    </>
  );
};

export default Header;
