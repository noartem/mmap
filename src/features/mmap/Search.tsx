import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { search as goSearch, addNote, selectMMap } from "./mmapSlice";
import { Button } from "reakit/Button";
import { Input } from "reakit/Input";
import { styled } from "linaria/react";

const Header = styled.header`
  display: flex;
  padding: 0.5em 0.75em;
  height: 2.4em;

  input {
    border: none;
    margin: 0 0.5em 0 0 !important;
  }

  svg {
    margin: auto 0;
  }

  span {
    display: flex;
  }
`;

export function Search() {
  const { search } = useSelector(selectMMap);
  const dispatch = useDispatch();

  return (
    <Header>
      <Input
        name="search"
        placeholder="Search..."
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
