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
        <h4
          className={completed ? "completed" : "incomplete"}
          style={{
            backgroundColor: completed ? "#f66e85" : "",
          }}
        >
          {" "}
          * {title} - Task: {completed ? "Completed" : "Incomplete"}
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
        <button
          onClick={() => {
            dispatch(deleteTodoButton(todo));
            console.log("Deleted Todo");
          }}
        >
          X
        </button>
      </div>
    </>
  );
  // });
};

export default Todo;
