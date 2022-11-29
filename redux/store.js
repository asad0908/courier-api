import { combineReducers, configureStore } from "@reduxjs/toolkit";
import selectedReducer from "./SelectedTabSlice";
import sidebarReducer from "./sidebarSlice";

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  selectedTab: selectedReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
