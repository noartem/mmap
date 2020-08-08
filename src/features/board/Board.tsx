import React from "react";
import { css } from "linaria";

const stylesClass = css`
  h1 {
    color: red;
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
