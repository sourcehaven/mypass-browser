import { createSlice } from "@reduxjs/toolkit";

type State = {
  count: number;
};

const initialState: State = {
  count: 0,
};

const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: State) => ({ count: state.count + 1 }),
    decrement: (state: State) => ({ count: state.count - 1 }),
  },
});

export const actions = slice.actions;
export const { increment, decrement } = slice.actions;

export default slice.reducer;
