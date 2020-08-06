import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Note } from "./note";

interface MMapState {
  search: string;
  notes: Array<Note>;
  currentNoteName: string;
}

const getFromLS = () => {
  const ls = localStorage.getItem("mmap-store");
  return ls === "" || ls === null
    ? {
        search: "",
        notes: [],
        currentNoteName: "",
      }
    : JSON.parse(ls);
};

const initialState: MMapState = getFromLS();

export const mmapSlice = createSlice({
  name: "mmap",
  initialState,
  reducers: {
    search: (state, searchString: PayloadAction<string>) => {
      state.search = searchString.payload;
    },
    addNote: (state, noteName: PayloadAction<string>) => {
      if (
        state.notes.find((note) => note.name === noteName.payload) !== undefined
      ) {
        alert("Note with this name already exist!");
      } else {
        state.notes.push({
          name: noteName.payload,
          body: `# ${noteName.payload}!\n\nSome *text* goes here...`,
        });
        state.search = "";
      }
    },
    selectNote: (state, noteName: PayloadAction<string>) => {
      state.currentNoteName = noteName.payload;
    },
    updateNote: (state, newNote: PayloadAction<Note>) => {
      for (const note of state.notes) {
        if (note.name === state.currentNoteName) {
          note.name = newNote.payload.name;
          note.body = newNote.payload.body;
          state.currentNoteName = note.name;
          break;
        }
      }
    },
    deleteNote: (state) => {
      state.notes = state.notes.filter(
        (note) => note.name !== state.currentNoteName
      );
      state.currentNoteName = "";
    },
  },
});

export const {
  search,
  addNote,
  selectNote,
  updateNote,
  deleteNote,
} = mmapSlice.actions;

export const selectMMap = (state: RootState) => state.mmap;

export const selectSearchingNotes = (state: RootState) =>
  state.mmap.notes.filter((note) => note.name.includes(state.mmap.search));

export const selectCurrentNote = (state: RootState) =>
  state.mmap.notes.find((note) => note.name === state.mmap.currentNoteName);

export default mmapSlice.reducer;
