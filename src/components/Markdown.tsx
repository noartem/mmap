import React from "react";
import { styled } from "linaria/react";
import MarkdownToJSX from "markdown-to-jsx";

const Content = styled.div`
  overflow: auto;
  padding: 0.5em 0.75em;
`;

interface IProps {
  text: string;
}

function Markdown({ text }: IProps) {
  return (
    <Content className="markdown-body">
      <MarkdownToJSX children={text} />
    </Content>
  );
}

export { Markdown };
