import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1; 
    },
    addToCart: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state) => {
      if (state.value > 1) state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset, addToCart } = counterSlice.actions;
export default counterSlice.reducer;
