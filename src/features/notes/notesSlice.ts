import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

import { RootState } from "../../app/store";
import { Note } from "./note";

interface NotesState {
  query: string;
  notes: Array<Note>;
}

const initialState: NotesState = {
  query: "",
  notes: [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    search: (state, searchString: PayloadAction<string>) => {
      state.query = searchString.payload;
    },
    addNote: (state, noteName: PayloadAction<string>) => {
      const newNote = {
        id: nanoid(8),
        name: noteName.payload,
        body: `# ${noteName.payload}!\n\nSome *text* goes here...`,
      };

      state.notes.push(newNote);
      state.query = "";
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

export const { search, addNote, updateNote, deleteNote } = notesSlice.actions;

export const selectNotesQuery = (state: RootState) => state.notes.query;

export const selectSearchingNotes = (state: RootState) =>
  state.notes.notes.filter((note) => note.name.includes(state.notes.query));

export const selectNote = (noteId: string) => (state: RootState) =>
  state.notes.notes.find((note) => note.id === noteId);

export default notesSlice.reducer;
