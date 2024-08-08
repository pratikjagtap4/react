import { createStore } from "redux";

const initialvalue = {
  counter: 1,
  privacy: false,
};

function counterReducer(store = initialvalue, action) {
  if (action.type === "Increment") {
    return { ...store, counter: store.counter + 1 };
  } else if (action.type === "Decrement") {
    return { ...store, counter: store.counter - 1 };
  } else if (action.type === "Add") {
    return { ...store, counter: store.counter + Number(action.payload) };
  } else if (action.type === "Sub") {
    return { ...store, counter: store.counter - Number(action.payload) };
  } else if (action.type === "Privacy") {
    return { ...store, privacy: !store.privacy };
  }
  return store;
}

const counterStore = createStore(counterReducer);

export default counterStore;
