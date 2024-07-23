import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    tasks: [{ id: v4(), content: 'test task', isDone: false }],
  },
  reducers: {
    addTask(state, action) {
      const {
        payload: { content },
      } = action;
      state.tasks.push({ id: v4(), content, isDone: false });
    },
    removeTask(state, action) {
      const {
        payload: { id },
      } = action;
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    setDoneTask(state, action) {
      const {
        payload: { id },
      } = action;
      state.tasks = state.tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      );
    },
  },
});
export const {addTask, removeTask, setDoneTask} = todoSlice.actions;
export default todoSlice.reducer;