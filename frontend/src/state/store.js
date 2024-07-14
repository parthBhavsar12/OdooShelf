import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import bookReducer from "./bookSlice";
export default configureStore({
  reducer: {
    auth: authReducer,
    book: bookReducer,
  },
});
