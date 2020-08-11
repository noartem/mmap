import React, { useRef } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Button } from "reakit/Button";
import { Input } from "reakit/Input";
import { css } from "linaria";

import { useShortcut } from "../../utils";

import { RootState } from "../../app/store";
import { search, addNote, selectNotesQuery } from "./notesSlice";

const styleClass = css`
  display: flex;
  padding: 0.5em 0.75em;
  height: 2.4em;

  border-bottom: 1px solid #006dff;

  input {
    border: none;
    margin: 0 0.5em 0 0 !important;
  }
`;

function Search({ query, search, addNote }: IProps) {
  const searchInput = useRef<HTMLInputElement>(null);

  useShortcut("alt+s", () => searchInput.current?.focus(), [searchInput]);

  return (
    <header className={styleClass}>
      <Input
        ref={searchInput}
        name="search"
        placeholder="Search... (Alt + S to focus)"
        value={query}
        onChange={(e) => search(e.target.value)}
      />
      <Button focusable disabled={query === ""} onClick={() => addNote(query)}>
        Add
      </Button>
    </header>
  );
}

const connector = connect(
  (state: RootState) => ({ query: selectNotesQuery(state) }),
  (dispatch) => ({
    search: (query: string) => dispatch(search(query)),
    addNote: (query: string) => dispatch(addNote(query)),
  })
);

type IProps = ConnectedProps<typeof connector>;

export default connector(Search);
