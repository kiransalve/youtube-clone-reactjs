import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarReducer";

const store = configureStore({ reducer: { sidebar: sidebarReducer } });
export default store;
