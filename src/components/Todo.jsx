import { useDispatch } from "react-redux";
import { deleteTodoButton, toggleDone } from "../redux/todoSlice";

const Todo = ({ todo, index, completed, title }) => {
  // const Todo = ({ todos, completed, title, index, todo }) => {
  const dispatch = useDispatch();

  // return todos.map((index, title, completed) => {
  // return todos.map((todo, index) => {
  return (
    <>
      <div className="todoAndDelete" key={index}>
        <p>{completed ? "Done" : "Incomplete"}</p>
        <button
          onClick={() => {
            dispatch(deleteTodoButton(todo));
            console.log("Deleted Todo");
          }}
        >
          X
        </button>
        <h4
          className={completed ? "completed" : "incomplete"}
          style={{
            backgroundColor: completed ? "#f66e85" : "#87d5d8",
            textDecoration: completed ? "line-through" : "",
          }}
        >
          {" "}
          * {title}
        </h4>
        {/* <button
          className="completed"
          style={{
            backgroundColor: completed ? "#f66e85" : "#f5f580",
          }}
          onClick={() => {
            dispatch(toggleDone(todo));
          }}
        >
          Done
        </button> */}
      </div>
    </>
  );
  // });
};

export default Todo;
