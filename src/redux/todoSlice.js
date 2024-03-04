import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.todos = action.payload;
    },
    sortSelect: (state, action) => {
      state.sort = action.payload;
    },
    searchTodo: (state, action) => {
      state.search = action.payload;
    },

    addNewTodo: (state, action) => {
      state.addNew = action.payload;
    },
    addTodoButton: (state, action) => {
      const newTodo = state.addNew;
      const index = state.todos.push({
        userId: 1,
        id: Math.random(),
        title: newTodo,
        completed: false,
      });
      state.todos[index] === action.payload;
    },
    deleteTodoButton: (state, action) => {
      const index = state.todos.findIndex((todo) => {
        return todo.title === action.payload;
      });
      state.todos.splice(index, 1);
      console.log(state.todos);
    },
    toggleDone: (state, action) => {
      const index = state.todos.findIndex((todo) => {
        return todo.title === action.payload;
      });
      state.todos[index].completed = !state.todos[index].completed;
    },
  },
});

export const {
  addTodos,
  sortSelect,
  searchTodo,
  addNewTodo,
  addTodoButton,
  deleteTodoButton,
  toggleDone,
} = todoSlice.actions;

export const selectTodo = (state) => state.todo.todos;
export const getSort = (state) => state.todo.sort;
export const getSearch = (state) => state.todo.search;
export const getNew = (state) => state.todo.addNew;

export default todoSlice.reducer;
