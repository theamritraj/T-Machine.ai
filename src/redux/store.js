import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./slices/courseSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    course: courseReducer,
    user: userReducer,
  },
});

export default store;
