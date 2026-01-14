import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice/authSlice.js";
import taskReducer from "./taskSlice/taskSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
  },
});
