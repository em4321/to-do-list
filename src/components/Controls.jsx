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
    <div className="controls">
      <div className="sortSelect">
        <select
          onChange={(e) => {
            dispatch(sortSelect(e.target.value));
          }}
          style={{
            margin: "10px",
            width: "80px",
          }}
        >
          <option value="">Sort</option>
          <option value="Oldest">Oldest</option>
          <option value="Newest">Newest</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
        </select>
      </div>
      <div>
        <input
          onInput={(e) => {
            dispatch(searchTodo(e.target.value));
          }}
          type="text"
          id="search"
          name="search"
          placeholder="Search existing tasks"
          style={{
            margin: "10px",
            width: "150px",
          }}
        />
      </div>
      <div>
        <input
          onInput={(e) => {
            dispatch(addNewTodo(e.target.value));
          }}
          type="text"
          id="new"
          name="new"
          placeholder="Add new task!"
          style={{
            marginTop: "10px",
          }}
        />
        <button
          onClick={() => {
            dispatch(addTodoButton(todos));
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Controls;
