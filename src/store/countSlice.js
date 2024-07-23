import { createSlice } from '@reduxjs/toolkit';
const countSlice = createSlice({
  name: 'count',
  initialState: {
    count: 0,
  },
  reducers: {
    //methods
    add(state, action) {
      state.count += action.payload;
    },
    sub(state, action) {
      state.count -= action.payload;
    },
  },
});

export const { add, sub } = countSlice.actions;
export default countSlice.reducer;