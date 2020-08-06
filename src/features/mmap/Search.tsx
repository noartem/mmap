import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "reakit/Button";
import { Input } from "reakit/Input";
import { styled } from "linaria/react";
import { useShortcuts } from "react-shortcuts-hook";

import { search as goSearch, addNote, selectMMap } from "./mmapSlice";

const Header = styled.header`
  display: flex;
  padding: 0.5em 0.75em;
  height: 2.4em;

  input {
    border: none;
    margin: 0 0.5em 0 0 !important;
  }
`;

export function Search() {
  const { search } = useSelector(selectMMap);
  const dispatch = useDispatch();
  const searchInput = useRef<HTMLInputElement>(null);

  useShortcuts(["control", "I"], () => searchInput.current?.focus(), [
    searchInput,
  ]);

  return (
    <Header>
      <Input
        ref={searchInput}
        name="search"
        placeholder="Search... (Ctrl + I to focus)"
        value={search}
        onChange={(e) => dispatch(goSearch(e.target.value))}
      />
      <Button
        focusable
        disabled={search === ""}
        onClick={() => dispatch(addNote(search))}
      >
        Add
      </Button>
    </Header>
  );
}
