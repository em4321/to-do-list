import React, { useEffect } from "react";
import Todo from "./components/todo";
import Controls from "./components/Controls";
import { getTodos } from "./dataContoller/fetching";
import { useSelector } from "react-redux";
import { getSearch, getSort, selectTodo } from "./redux/todoSlice";
import "./css/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const todos = useSelector(selectTodo);
  const search = useSelector(getSearch);
  const sort = useSelector(getSort);

  useEffect(() => {
    getTodos();
  }, []);

  if (!todos) {
    return (
      <p
        style={{
          textAlign: "center",
          backgroundColor: "#d5d1d1",
          marginTop: "380px",
          fontSize: "50px",
        }}
      >
        Loading To Do List...
      </p>
    );
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
        <Header />
        <Controls todos={filtered} />
        {filtered &&
          filtered.map((todo, index) => {
            return (
              <Todo {...todo} todos={filtered} key={index} index={index} />
            );
          })}
        <Footer />
      </>
    );
  }
};
export default App;
