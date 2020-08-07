import React, { useRef } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Button } from "reakit/Button";
import { Input } from "reakit/Input";
import { css } from "linaria";
import { useShortcuts } from "react-shortcuts-hook";

import { RootState } from "../../app/store";
import { search as goSearch, addNote, selectMMap } from "./mmapSlice";

const styleClass = css`
  display: flex;
  padding: 0.5em 0.75em;
  height: 2.4em;

  input {
    border: none;
    margin: 0 0.5em 0 0 !important;
  }
`;

function Search({ search, goSearch, addNote }: IProps) {
  const searchInput = useRef<HTMLInputElement>(null);

  useShortcuts(["alt", "S"], () => searchInput.current?.focus(), [searchInput]);

  return (
    <header className={styleClass}>
      <Input
        ref={searchInput}
        name="search"
        placeholder="Search... (Alt + S to focus)"
        value={search}
        onChange={(e) => goSearch(e.target.value)}
      />
      <Button
        focusable
        disabled={search === ""}
        onClick={() => addNote(search)}
      >
        Add
      </Button>
    </header>
  );
}

const connector = connect(
  (state: RootState) => ({ search: selectMMap(state).search }),
  (dispatch) => ({
    goSearch: (query: string) => dispatch(goSearch(query)),
    addNote: (query: string) => dispatch(addNote(query)),
  })
);

type IProps = ConnectedProps<typeof connector>;

export default connector(Search);
