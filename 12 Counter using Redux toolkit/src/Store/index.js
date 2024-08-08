import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counterVal: 0,
    counterName: "Pratik",
    counterSirname: "jagtap",
  },

  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterSirname = "patil";
    },
    addition: (state, action) => {
      state.counterVal += Number(action.payload.num);
    },
    subtraction: (state, action) => {
      state.counterVal -= Number(action.payload);
    },
  },
});

const privacySlice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    toggle: (state) => !state,
  },
});

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  },
});

export const counterAction = counterSlice.actions;
export const privacyAction = privacySlice.actions;
export default counterStore;
