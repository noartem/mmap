import React from "react";
import { css } from "linaria";

const stylesClass = css`
  padding: 1em 1.5em;
  h1 {
    margin: 0;
    color: #ff0033;
  }
`;

function Board() {
  return (
    <div className={stylesClass}>
      <h1>Boooard</h1>
    </div>
  );
}

export default Board;
