import React, { useState, useRef } from "react";
import { styled } from "linaria/react";
import { Input } from "reakit/Input";

import { GhostButton } from "./GhostButton";

const Title = styled.h2`
  margin: 0.28em 0 0.26em 0.28em;
  display: flex;

  button {
    border: none;
    background: inherit;
    cursor: pointer;
    margin: auto;
    padding: 0;
    font-family: inherit;
    font-size: 14px;
    font-weight: 600;
  }
`;

const StyledInput = styled(Input)`
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  padding: 0.32em;
`;

interface IProps {
  saveName: (name: string) => void;
  name: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5";
}

function EditableTitle({ saveName, name, as }: IProps) {
  const [inputName, setInputName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const startEditing = async () => {
    await setInputName(name);
    inputRef.current?.focus();
  };

  const goSave = async () => {
    await saveName(inputName);
    setInputName("");
  };

  return inputName === "" ? (
    <Title as={as || "h2"}>
      <GhostButton onClick={startEditing}>{name}</GhostButton>
    </Title>
  ) : (
    <StyledInput
      ref={inputRef}
      onKeyDown={(e) => e.key === "Enter" && goSave()}
      onChange={(e) => setInputName(e.target.value)}
      value={inputName}
    />
  );
}

export { EditableTitle };
