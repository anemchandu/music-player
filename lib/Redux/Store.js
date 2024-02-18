import { configureStore } from "@reduxjs/toolkit";
import MusicReducer from "./musicSlice";
export const store = configureStore({
  reducer: {
    music: MusicReducer,
  },
});
