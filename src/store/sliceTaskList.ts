import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { LOCAL_STORAGE_KEY } from "@/constants/localStorageKeys";
import { idGenerator } from "@/utils/idGenerator";

export interface ItemTask {
  id: string;
  content: string;
  completed: boolean;
}

interface State {
  taskList: ItemTask[];
}

const KEY_TASK_LIST = LOCAL_STORAGE_KEY.taskList;

const localStorageState = localStorage.getItem(KEY_TASK_LIST);

const initialState: State = localStorageState
  ? JSON.parse(localStorageState)
  : {
      taskList: [],
    };

const slice = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    addNewItem: (state, { payload }: PayloadAction<{ value: string }>) => {
      state.taskList.push({
        id: idGenerator(),
        content: payload.value,
        completed: false,
      });

      localStorage.setItem(KEY_TASK_LIST, JSON.stringify({ ...state }));
    },
    editItem: (
      state,
      { payload }: PayloadAction<{ value: string; index: number }>
    ) => {
      state.taskList[payload.index].content = payload.value;
      localStorage.setItem(KEY_TASK_LIST, JSON.stringify({ ...state }));
    },
    deleteItem: (state, { payload }: PayloadAction<{ index: number }>) => {
      state.taskList.splice(payload.index, 1);

      localStorage.setItem(KEY_TASK_LIST, JSON.stringify(state));
    },
    changeItemCompleted: (
      state,
      { payload }: PayloadAction<{ value: boolean; index: number }>
    ) => {
      state.taskList[payload.index].completed = payload.value;
      localStorage.setItem(KEY_TASK_LIST, JSON.stringify(state));
    },
  },
});

export const { addNewItem, deleteItem, editItem, changeItemCompleted } =
  slice.actions;

export const state = ({ taskList }: RootState) => taskList;

export default slice.reducer;
