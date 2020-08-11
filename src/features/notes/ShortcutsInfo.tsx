import React from "react";
import { css } from "linaria";

const styleClass = css`
  p {
    padding: 1em 1.5em;
  }
`;

export default function ShortcutsInfo() {
  return (
    <div className={styleClass}>
      <p>
        <b> Alt + S</b> focus search input
      </p>
      <p>
        <b> Control + Alt + $number</b> open <i>$number</i> note
      </p>
      <p>
        <b> Ctrl + B</b> toggle edit mode
      </p>
      <p>
        <b> Alt + I </b> delete note
      </p>
      <p>
        <b> Escape </b> close note
      </p>
    </div>
  );
}
