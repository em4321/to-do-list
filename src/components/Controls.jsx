import { useDispatch, useSelector } from "react-redux";
import {
  searchTodo,
  addNewTodo,
  addTodoButton,
  sortSelect,
  selectTodo,
} from "../redux/todoSlice";

const Controls = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodo);
  return (
    <>
      <h1>Sort tasks by order they were added or alphapetically:</h1>
      <div>
        <div className="sortSelect">
          <select
            onChange={(e) => {
              dispatch(sortSelect(e.target.value));
            }}
            style={{
              borderRadius: "10px",
              textAlign: "center",
              width: "120px",
              height: "30px",
              color: "black",
              border: "1px solid black",
              marginTop: "10px",
            }}
          >
            <option value="">Please Select</option>
            <option value="Oldest">Oldest</option>
            <option value="Newest">Newest</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>
        <h1>Search for existing tasks:</h1>
        <input
          onInput={(e) => {
            dispatch(searchTodo(e.target.value));
          }}
          type="text"
          id="search"
          name="search"
          placeholder="Type here..."
          style={{
            borderRadius: "10px",
            textAlign: "center",
            width: "120px",
            height: "30px",
            border: "1px solid black",
            marginTop: "10px",
          }}
        />
      </div>
      <div>
        <h1>Add new tasks to the list:</h1>
        <input
          onInput={(e) => {
            dispatch(addNewTodo(e.target.value));
          }}
          type="text"
          id="new"
          name="new"
          placeholder="Add a new task!"
          style={{
            borderRadius: "10px",
            textAlign: "center",
            width: "120px",
            height: "30px",
            border: "1px solid black",
            marginRight: "5px",
            marginTop: "10px",
          }}
        />
        <button
          onClick={() => {
            dispatch(addTodoButton(todos));
          }}
          style={{
            borderRadius: "10px",
            width: "40px",
            height: "33px",
            border: "1px solid black",
            marginTop: "10px",
          }}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Controls;
