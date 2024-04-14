import itemTasksReducer from "./sliceTaskList";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    taskList: itemTasksReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
