import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";
import { Columns, Card, Cards } from "./column";
import { nanoid } from "nanoid";

export interface BoardState {
  cards: Cards;
  columns: Columns;
  columnOrder: string[];
  background: string;
}

const initialState: BoardState = {
  cards: {
    moreCards: {
      id: "moreCards",
      name: "Add more cards",
      body: "# Add more cards \n\n ---",
      tags: [],
    },
    oneMoreCard: {
      id: "oneMoreCard",
      name: "One more card",
      body: "# 11111 \n\n ---",
      tags: [],
    },
  },
  columns: {
    todo: { id: "todo", name: "TODO", cardsIds: ["moreCards", "oneMoreCard"] },
    inProgress: { id: "inProgress", name: "IN PROGRESS", cardsIds: [] },
    done: { id: "done", name: "DONE", cardsIds: [] },
  },
  columnOrder: ["todo", "inProgress", "done"],
  background: "#00CC99",
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addColumn(state, columnName: PayloadAction<string>) {
      const column = {
        id: nanoid(),
        name: columnName.payload,
        cardsIds: [],
      };

      state.columns[column.id] = column;
      state.columnOrder.push(column.id);
    },
    editColumn(
      state,
      {
        payload: { columnId, newName },
      }: PayloadAction<{ columnId: string; newName: string }>
    ) {
      if (state.columns[columnId]) {
        state.columns[columnId].name = newName;
      }
    },
    moveColumn(
      state,
      {
        payload: { oldIndex, newIndex },
      }: PayloadAction<{ oldIndex: number; newIndex: number }>
    ) {
      if (state.columnOrder.length <= oldIndex) return;

      const columnId = state.columnOrder[oldIndex];

      state.columnOrder.splice(oldIndex, 1); // remove
      state.columnOrder.splice(newIndex, 0, columnId); // add
    },
    deleteColumn(state, columnId: PayloadAction<string>) {
      state.columnOrder.splice(state.columnOrder.indexOf(columnId.payload), 1);

      state.columns[columnId.payload].cardsIds.forEach((cardId) => {
        delete state.cards[cardId];
      });

      delete state.columns[columnId.payload];
    },
    addCard(
      state,
      {
        payload: { cardName, columnId },
      }: PayloadAction<{ cardName: string; columnId: string }>
    ) {
      const column = state.columns[columnId];

      if (column) {
        const card = {
          id: nanoid(),
          name: cardName,
          body: "",
          tags: [],
        };

        state.cards[card.id] = card;
        column.cardsIds.push(card.id);
      }
    },
    editCard(state, newCard: PayloadAction<Card>) {
      const card = state.cards[newCard.payload.id];

      if (card) {
        card.name = newCard.payload.name;
        card.body = newCard.payload.body;
        card.tags = newCard.payload.tags;
      }
    },
    moveCard(
      state,
      {
        payload: { columnId, cardId, newIndex },
      }: PayloadAction<{
        columnId: string;
        cardId: string;
        newIndex: number;
      }>
    ) {
      const column = state.columns[columnId];

      if (column) {
        const oldIndex = column.cardsIds.indexOf(cardId);

        if (oldIndex !== -1) {
          column.cardsIds.splice(oldIndex, 1);
          column.cardsIds.splice(newIndex, 0, cardId);
        }
      }
    },
    moveCardToColumn(
      state,
      {
        payload: { oldColumnId, newColumnId, cardId, cardNewIndex },
      }: PayloadAction<{
        oldColumnId: string;
        newColumnId: string;
        cardId: string;
        cardNewIndex: number;
      }>
    ) {
      const oldColumn = state.columns[oldColumnId];
      const newColumn = state.columns[newColumnId];

      if (oldColumn && newColumn) {
        const cardOldIndex = oldColumn.cardsIds.indexOf(cardId);

        if (cardOldIndex !== -1) {
          oldColumn.cardsIds.splice(cardOldIndex, 1);
          newColumn.cardsIds.splice(cardNewIndex, 0, cardId);
        }
      }
    },
    tempAddCard(
      state,
      {
        payload: { cardId, columnId, newIndex },
      }: PayloadAction<{
        cardId: string;
        columnId: string;
        newIndex: number;
      }>
    ) {
      const column = state.columns[columnId];
      const card = state.cards[cardId];

      if (column && card) {
        column.cardsIds.splice(newIndex, 0, cardId);
      }
    },
    deleteCard(
      state,
      {
        payload: { cardId, columnId, fromCards },
      }: PayloadAction<{
        cardId: string;
        columnId: string;
        fromCards: boolean;
      }>
    ) {
      const column = state.columns[columnId];
      const card = state.cards[cardId];

      if (column && card) {
        if (fromCards) delete state.cards[cardId];
        column.cardsIds.splice(column.cardsIds.indexOf(cardId), 1);
      }
    },
  },
});

export const {
  addColumn,
  editColumn,
  moveColumn,
  deleteColumn,
  addCard,
  editCard,
  moveCard,
  tempAddCard,
  deleteCard,
} = boardSlice.actions;

export const selectBoard = (state: RootState) => state.board;

export const selectColumn = (columnId: string) => (state: RootState) =>
  state.board.columns[columnId];

export const selectCard = (cardId: string) => (state: RootState) =>
  state.board.cards[cardId];

export default boardSlice.reducer;
