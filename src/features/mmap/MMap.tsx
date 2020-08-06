import React from "react";
import { useSelector } from "react-redux";
import { styled } from "linaria/react";

import { selectCurrentNote } from "./mmapSlice";
import { ShortcutsInfo } from "./ShortcutsInfo";
import { Search } from "./Search";
import { Nav } from "./Nav";
import { Body } from "./Body";

const BodyWrap = styled.div`
  display: flex;
  height: calc(100vh - 3.44em);
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.25);
`;

export function MMap() {
  const note = useSelector(selectCurrentNote);

  return (
    <section>
      <Search />
      <BodyWrap>
        <Nav />
        {note ? <Body note={note} /> : <ShortcutsInfo />}
      </BodyWrap>
    </section>
  );
}
