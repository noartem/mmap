import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import mmapReducer from "../features/mmap/mmapSlice";

export const store = configureStore({
  reducer: {
    mmap: mmapReducer,
  },
});

store.subscribe(() =>
  localStorage.setItem("mmap-store", JSON.stringify(store.getState().mmap))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
