import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
