import { createSlice } from '@reduxjs/toolkit';

const countSlice = createSlice({
  name: 'count',
  initialState: {
    count: 0,
  },
  reducers: {
    //methods
    add(state, action) {
      console.log(action);
      state.count += 1;
    },
    sub(state, action) {
      console.log(action);
      state.count -= 1;
    },
  },
});

export const { add, sub } = countSlice.actions;
export default countSlice.reducer;