import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded(state, action) {
      state.push({ ...action.payload, id: state.length + 1, completed: false });
    },
    todoToggled(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
    todoUpdate(state, action) {
      const { id, titre, description } = action.payload;
      const toDo = state.find((d) => d.id === id);
      toDo.titre = titre;
      toDo.description = description;
    },
    todoDeleted(state, action) {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index > -1) state.splice(index, 1);
    },
  },
});

export const {
  todoAdded,
  todoToggled,
  todoUpdate,
  todoDeleted,
} = todosSlice.actions;

export default todosSlice.reducer;
