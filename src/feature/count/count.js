import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    name: 'van love',
  },
  reducers: {
    increment: (state) => {
      state.value += 20;
    },
    decrement: (state) => {
      state.value -= 20;
    },
    incrementByAmount: (state, action) => {
      // neu nhap dnag string thi se bao loi
      if (!isNaN(Number(action.payload))) {
        state.value += Number(action.payload);
      }
    },
    decrementByAmount: (state, action) => {
      if (!isNaN(Number(action.payload))) {
        state.value -= Number(action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
