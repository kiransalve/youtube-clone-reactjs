import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarReducer";
import youtubeReducer from "./youtubeReducer";

const store = configureStore({
  reducer: { sidebar: sidebarReducer, youtube: youtubeReducer },
});
export default store;
