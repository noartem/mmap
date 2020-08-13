import React, { useRef } from "react";
import { Button } from "reakit/Button";
import { Input } from "reakit/Input";
import { styled } from "linaria/react";

import { useShortcut } from "../../utils";

const Header = styled.header`
  display: flex;
  padding: 0.5em 0.75em;
  height: 2.4em;

  border-bottom: 1px solid #006dff;

  input {
    border: none;
    margin: 0 0.5em 0 0 !important;
  }
`;

interface IProps {
  query: string;
  setQuery: (query: string) => void;
  addNote: (query: string) => void;
}

function Search({ query, setQuery, addNote }: IProps) {
  const searchInput = useRef<HTMLInputElement>(null);

  const add = async () => {
    await addNote(query);
    setQuery("");
  };

  useShortcut("alt+s", () => searchInput.current?.focus(), [searchInput]);

  return (
    <Header>
      <Input
        ref={searchInput}
        name="search"
        placeholder="Search... (Alt + S to focus)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button focusable disabled={query === ""} onClick={add}>
        Add
      </Button>
    </Header>
  );
}

export default Search;
