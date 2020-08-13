import React from "react";
import { styled } from "linaria/react";

const P = styled.p`
  padding: 1em 1.5em;
`;

export default function ShortcutsInfo() {
  return (
    <div>
      <P>
        <b> Alt + S</b> focus search input
      </P>
      <P>
        <b> Control + Alt + $number</b> open <i>$number</i> note
      </P>
      <P>
        <b> Ctrl + B</b> toggle edit mode
      </P>
      <P>
        <b> Alt + I </b> delete note
      </P>
      <P>
        <b> Escape </b> close note
      </P>
    </div>
  );
}
