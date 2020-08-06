import React from "react";
import { styled } from "linaria/react";

const Body = styled.div`
  width: 100%;

  p {
    padding: 1em 1.5em;
  }
`;

export function ShortcutsInfo() {
  return (
    <Body>
      <p>
        <b> Ctrl + Alt + $Number</b> open $Number note
      </p>
      <p>
        <b> Ctrl + B</b> toggle edit mode
      </p>
      <p>
        <b> Ctrl + M</b> delete note
      </p>
      <p>
        <b> Escape </b> close note
      </p>
    </Body>
  );
}
