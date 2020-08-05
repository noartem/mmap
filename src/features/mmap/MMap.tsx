import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentNote } from "./mmapSlice";
import { Search } from "./Search";
import { Nav } from "./Nav";
import { Body } from "./Body";
import { styled } from "linaria/react";

const Section = styled.section`
  #mmap-body {
    display: flex;
    height: calc(100vh - 52px);
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.25);

    #empty_body {
      width: 100%;
    }
  }
`;

export function MMap() {
  const note = useSelector(selectCurrentNote);

  return (
    <Section>
      <Search />
      <div id="mmap-body">
        <Nav />
        {note ? <Body note={note} /> : <div id="empty_body" />}
      </div>
    </Section>
  );
}
