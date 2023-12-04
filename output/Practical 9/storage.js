import { configureStore } from '@reduxjs/toolkit';
import recordReducer from "./recordSlice.js";
export default configureStore({
  reducer: {
    // Register reducers here
    record: recordReducer
  }
});