// store.js
import { createStore } from "redux";
import { cardReducer } from "./card/CardReducer";

const store = createStore(cardReducer);

export default store;
