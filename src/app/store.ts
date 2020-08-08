import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import notesReducer from "../features/notes/notesSlice";
import boardReducer from "../features/board/boardSlice";

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    board: boardReducer,
  },
  ...optionalPreloadedState(),
});

function optionalPreloadedState() {
  const ls = localStorage.getItem("redux-store");
  return ls === "" || ls === null ? {} : { preloadedState: JSON.parse(ls) };
}

store.subscribe(() =>
  localStorage.setItem("redux-store", JSON.stringify(store.getState()))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
