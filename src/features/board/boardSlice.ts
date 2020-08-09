import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";
import { Column, Card } from "./column";
import { nanoid } from "nanoid";

interface BoardState {
  columns: Column[];
  background: string;
}

const initialState: BoardState = {
  columns: [
    { id: nanoid(), name: "TODO", cards: [] },
    { id: nanoid(), name: "IN PROGRESS", cards: [] },
    { id: nanoid(), name: "DONE", cards: [] },
  ],
  background: "#fff",
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addColumn(state, columnName: PayloadAction<string>) {
      state.columns.push({ id: nanoid(), name: columnName.payload, cards: [] });
    },
    editColumn(
      state,
      {
        payload: { columnIndex, newName },
      }: PayloadAction<{ columnIndex: number; newName: string }>
    ) {
      if (state.columns[columnIndex]) {
        state.columns[columnIndex].name = newName;
      }
    },
    moveColumn(
      state,
      {
        payload: { oldIndex, newIndex },
      }: PayloadAction<{ oldIndex: number; newIndex: number }>
    ) {
      const column = state.columns[oldIndex];
      state.columns.splice(oldIndex, 1); // remove
      state.columns.splice(newIndex, 0, column); // add
    },
    deleteColumn(state, columnIndex: PayloadAction<number>) {
      state.columns.splice(columnIndex.payload, 1);
    },
    addCard(
      state,
      {
        payload: { cardName, columnIndex },
      }: PayloadAction<{ cardName: string; columnIndex: number }>
    ) {
      const column = state.columns[columnIndex];

      if (column) {
        column.cards.push({
          id: nanoid(),
          name: cardName,
          body: "",
          tags: [],
        });
      }
    },
    editCard(
      state,
      {
        payload: { cardIndex, columnIndex, newCard },
      }: PayloadAction<{
        cardIndex: number;
        columnIndex: number;
        newCard: Card;
      }>
    ) {
      const column = state.columns[columnIndex];

      if (column && column.cards[cardIndex]) {
        const card = column.cards[cardIndex];

        card.name = newCard.name;
        card.body = newCard.body;
        card.tags = newCard.tags;
      }
    },
    moveCard(
      state,
      {
        payload: { columnIndex, cardOldIndex, cardNewIndex },
      }: PayloadAction<{
        columnIndex: number;
        cardOldIndex: number;
        cardNewIndex: number;
      }>
    ) {
      const column = state.columns[columnIndex];

      if (column && column.cards[cardOldIndex]) {
        const card = column.cards[cardOldIndex];
        column.cards.splice(cardOldIndex, 1);
        column.cards.splice(cardNewIndex, 0, card);
      }
    },
    deleteCard(
      state,
      {
        payload: { cardIndex, columnIndex },
      }: PayloadAction<{
        cardIndex: number;
        columnIndex: number;
      }>
    ) {
      const column = state.columns[columnIndex];

      if (column && column.cards[cardIndex]) {
        column.cards.splice(cardIndex, 1);
      }
    },
  },
});

export const {
  addColumn,
  editColumn,
  moveColumn,
  addCard,
  editCard,
  deleteCard,
} = boardSlice.actions;

export const selectBoard = (state: RootState) => state.board;

export default boardSlice.reducer;
