import { useDispatch } from "react-redux";
import { deleteTodoButton, toggleDone } from "../redux/todoSlice";

// const Todo = ({ todos }) => {
const Todo = ({ completed, title, index, todo }) => {
  const dispatch = useDispatch();

  // return todos.map((index, title, completed) => {
  // return todos.map((todo,index) => {
  return (
    <>
      <div key={index}>
        <h1
          className={completed ? "completed" : "incomplete"}
          style={{
            backgroundColor: completed ? "#f66e85" : "",
          }}
        >
          {title.toUpperCase()}
        </h1>
        <p>Task: {completed ? "Completed" : "Incomplete"}</p>
        {/* <button
            className="completed"
            style={{
              content: completed ? "Completed" : "Incomplete",
            }}
            onClick={() => {
              dispatch(toggleDone());
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
