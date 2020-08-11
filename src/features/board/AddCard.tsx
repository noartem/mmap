import React, { useState, useReducer, useRef } from "react";
import { styled } from "linaria/react";
import { Button } from "reakit/Button";
import { Input } from "reakit/Input";
import { XIcon, DiffAddedIcon } from "@primer/octicons-react";
import { useDispatch } from "react-redux";

import { addCard } from "./boardSlice";
import { GhostButton } from "../../utils";

const Container = styled.li`
  margin-top: 0.5em !important;
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  button {
    font-weight: normal;
    svg {
      margin: auto 0.3em auto 0;
    }
  }
`;

const InputControls = styled.div`
  margin-top: 0.5em;
  display: flex;

  svg {
    color: #000;
    margin: auto 0 auto 0.5em;
  }
`;

interface IProps {
  columnId: string;
}

function AddColumn({ columnId }: IProps) {
  const [isEditing, toggleIsEditing] = useReducer((x) => !x, false);
  const [newCard, setNewCard] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const startEditing = async () => {
    await toggleIsEditing();
    inputRef.current?.focus();
  };

  const stopEditing = () => {
    toggleIsEditing();
    setNewCard("");
  };

  const submitColumn = async () => {
    if (newCard !== "") {
      await dispatch(addCard({ columnId, cardName: newCard }));
      stopEditing();
    }
  };

  return (
    <Container>
      {isEditing ? (
        <>
          <Input
            ref={inputRef}
            value={newCard}
            onKeyDown={(e) => e.key === "Enter" && submitColumn()}
            onChange={(e) => setNewCard(e.target.value)}
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
