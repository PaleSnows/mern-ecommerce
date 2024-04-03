import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";

export const store = configureStore({
  reducer: {
    userReducer,
  },
  middleware: (getDefualtMiddleware) => {
    getDefualtMiddleware({ serializableCheck: false });
  },
});
