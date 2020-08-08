import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface BoardState {}

const initialState: BoardState = {};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {},
});

export const {} = boardSlice.actions;

export const selectBoard = (state: RootState) => state.board;

export default boardSlice.reducer;
