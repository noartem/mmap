import React, { useState, useReducer, useRef } from "react";
import { styled } from "linaria/react";
import { Button } from "reakit/Button";
import { Clickable } from "reakit/Clickable";
import { Input } from "reakit/Input";
import { XIcon, DiffAddedIcon } from "@primer/octicons-react";
import { useDispatch } from "react-redux";

import { addColumn } from "./boardSlice";

const GhostButton = styled(Clickable)`
  color: #fff;
  display: flex;
  width: 100%;
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`;

const Container = styled.li<{ background: string }>`
  width: 270px;
  margin: 0.5em;
  height: min-content;
  border-radius: 0.4em;
  padding: 0.5em 0.75em;
  background: ${(props) => props.background};
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  button {
    svg {
      margin: auto 0.3em;
    }
  }
`;

const InputControls = styled.div`
  margin-top: 0.4em;
  display: flex;

  svg {
    color: #000;
    margin: auto 0 auto 0.4em;
  }
`;

function AddColumn() {
  const [isEditing, toggleIsEditing] = useReducer((x) => !x, false);
  const [newName, setNewName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const startEditing = async () => {
    await toggleIsEditing();
    inputRef.current?.focus();
  };

  const stopEditing = () => {
    toggleIsEditing();
    setNewName("");
  };

  const submitColumn = async () => {
    if (newName !== "") {
      await dispatch(addColumn(newName));
      stopEditing();
    }
  };

  return (
    <Container background={isEditing ? "#ebecf0" : "rgba(0, 0, 0, 0.2)"}>
      {isEditing ? (
        <>
          <Input
            ref={inputRef}
            value={newName}
            onKeyDown={(e) => e.key === "Enter" && submitColumn()}
            onChange={(e) => setNewName(e.target.value)}
          />
          <InputControls>
            <Button onClick={submitColumn}>Add to the bord</Button>
            <GhostButton onClick={stopEditing}>
              <XIcon size={24} />
            </GhostButton>
          </InputControls>
        </>
      ) : (
        <ButtonContainer>
          <GhostButton onClick={startEditing}>
            <DiffAddedIcon size={18} />
            <span>Add new column</span>
          </GhostButton>
        </ButtonContainer>
      )}
    </Container>
  );
}

export default AddColumn;
