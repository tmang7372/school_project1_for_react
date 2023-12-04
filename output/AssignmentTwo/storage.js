/*
 Assignment 2
 Ang Theow Meng
 P7339041
 I also add some function to ChooseGenre.jsx,
 AddMember.jsx and Member.jsx
 */
// storage.js
import { configureStore } from '@reduxjs/toolkit';
import recordReducer from "./recordSlice.js";
export default configureStore({
  reducer: {
    // Register reducers here
    record: recordReducer
  }
});