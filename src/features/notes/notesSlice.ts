import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

import { RootState } from "../../app/store";
import { Note } from "./note";

export interface NotesState {
  notes: Array<Note>;
}

const initialState: NotesState = {
  notes: [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, noteName: PayloadAction<string>) => {
      const newNote = {
        id: nanoid(8),
        name: noteName.payload,
        body: `# ${noteName.payload}!\n\nSome *text* goes here...`,
      };

      state.notes.push(newNote);
    },
    updateNote: (state, newNote: PayloadAction<Note>) => {
      for (const note of state.notes) {
        if (note.id === newNote.payload.id) {
          note.id = newNote.payload.id;
          note.name = newNote.payload.name;
          note.body = newNote.payload.body;
          break;
        }
      }
    },
    deleteNote: (state, noteId: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== noteId.payload);
    },
  },
});

export const { addNote, updateNote, deleteNote } = notesSlice.actions;

export const selectSearchingNotes = (query: string) => (state: RootState) =>
  state.notes.notes.filter((note) => note.name.includes(query));

export const selectNote = (noteId: string) => (state: RootState) =>
  state.notes.notes.find((note) => note.id === noteId);

export default notesSlice.reducer;
