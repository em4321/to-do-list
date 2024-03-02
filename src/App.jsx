import React, { useEffect } from "react";
import Todo from "./components/todo";
import Controls from "./components/Controls";
import { getTodos } from "./dataContoller/fetching";
import { useSelector } from "react-redux";
import { getNew, getSearch, getSort, selectTodo } from "./redux/todoSlice";
import "./css/App.css";
const App = () => {
  const todos = useSelector(selectTodo);
  const search = useSelector(getSearch);
  const sort = useSelector(getSort);
  // const addNew = useSelector(getNew);

  useEffect(() => {
    getTodos();
  }, []);

  // const addTodoButton = () => {
  //   const copy = [...todos];
  //   copy.push({
  //     userId: 1,
  //     id: Math.random(),
  //     title: newTodo,
  //     completed: false,
  //   });
  //   setTodos(copy);
  // };

  if (!todos) {
    return <p>Loading...</p>;
  }

  let filtered = [...todos];
  {
    if (search) {
      filtered = filtered.filter((todo) => {
        return todo.title.toLowerCase().includes(search.toLowerCase());
      });
    }

    filtered.sort((a, b) => {
      if (a.todo > b.todo) {
        return 1;
      }
      if (b.todo > a.todo) {
        return -1;
      }
      return 0;
    });

    if (sort === "Newest") {
      filtered.reverse();
    }

    if (sort === "A-Z") {
      filtered.sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        return 0;
      });
    }
    if (sort === "Z-A") {
      filtered.sort((a, b) => {
        if (a.title > b.title) {
          return -1;
        }
        if (a.title < b.title) {
          return 1;
        }
      });
    }
    console.log(filtered);

    return (
      <>
        <Controls todos={filtered} />
        {filtered.map((todo, index) => {
          return <Todo {...todo} todos={filtered} key={index} index={index} />;
        })}
      </>
    );
  }
};
export default App;
