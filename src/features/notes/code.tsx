import React from "react";
import { css } from "linaria";

import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { ghcolors as theme } from "react-syntax-highlighter/dist/esm/styles/prism";

interface IProps {
  className: string;
  children: React.ReactChildren;
}

const stylesClass = css`
  padding: 0;
  font-size: 1.5em;
  line-height: 1.5;
  background: none;
  border: none;
`;

export const Code = ({ className, children }: IProps) => (
  <SyntaxHighlighter
    className={stylesClass}
    language={
      className === "" || className === undefined ? "" : className.split("-")[1]
    }
    style={theme}
    children={children}
  />
);
