import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "linaria/react";
import { Clickable } from "reakit/Clickable";
import { Input } from "reakit/Input";
import { GrabberIcon } from "@primer/octicons-react";
import {
  Container as DNDContainer,
  Draggable,
  DropResult,
} from "react-smooth-dnd";

import {
  selectColumn,
  deleteCard,
  tempAddCard,
  moveCard,
  editColumn,
} from "./boardSlice";
import Card from "./Card";

interface IProps {
  columnId: string;
  index: number;
}

const Container = styled.li`
  height: min-content;
  width: 270px;
  margin: 0.5em;
  padding: 0.5em 0.75em;
  background: #ebecf0;
  border-radius: 0.4em;
`;

const Header = styled.div`
  display: flex;

  .column-drag-handle {
    cursor: grab;
    margin: auto 0;
  }

  input {
    font-weight: 400;
    /* border: 0;
    padding: 0; */
    background: inherit;
    font-size: 18px;
  }
`;

const Title = styled.h2`
  font-weight: 400;
  margin: 0;
  display: flex;

  button {
    font-size: 18px;
    border: none;
    background: inherit;
    cursor: pointer;
    margin: auto;
    padding: 0;
    font-family: inherit;
  }
`;

const Cards = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin: 0;
    padding: 0;
    z-index: 10;
  }

  .cards-drop-preview {
    margin-top: 0.5em;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 0.4em;
  }

  .card-ghost {
    transition: 0.2s;
    transform: rotate(7deg);
    cursor: grabbing;
  }
`;

function Column({ columnId }: IProps) {
  const column = useSelector(selectColumn(columnId));
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputName, setInputName] = useState("");
  const dispatch = useDispatch();

  const startEditing = () => {
    setInputName(column.name);
    inputRef.current?.focus();
  };

  const saveName = () => {
    dispatch(editColumn({ columnId, newName: inputName }));
    setInputName("");
  };

  const onCardDrop = ({
    removedIndex: oldIndex,
    addedIndex: newIndex,
    payload: cardId,
  }: DropResult) => {
    if ((oldIndex === null && newIndex === null) || oldIndex === newIndex)
      return;

    // move card in column
    if (oldIndex !== null && newIndex !== null) {
      dispatch(moveCard({ columnId, cardId, newIndex }));
      return;
    }

    // remove from previous column
    if (oldIndex !== null) {
      dispatch(deleteCard({ cardId, columnId, fromCards: false }));
      return;
    }

    if (newIndex !== null) {
      dispatch(tempAddCard({ cardId, columnId, newIndex }));
      return;
    }
  };

  return (
    <Container>
      <Header>
        <span className="column-drag-handle">
          <GrabberIcon size={18} />
        </span>
        {inputName !== "" ? (
          <Input
            ref={inputRef}
            onKeyDown={(e) => e.key === "Enter" && saveName()}
            onChange={(e) => setInputName(e.target.value)}
            value={inputName}
          />
        ) : (
          <Title>
            <Clickable onClick={startEditing}>{column.name}</Clickable>
          </Title>
        )}
      </Header>
      <Cards>
        <DNDContainer
          groupName="column"
          getChildPayload={(index) => column.cardsIds[index]}
          onDrop={onCardDrop}
          dropPlaceholder={{
            animationDuration: 200,
            showOnTop: true,
            className: "cards-drop-preview",
          }}
          dragClass="card-ghost"
        >
          {column.cardsIds.map((cardId) => (
            <Draggable key={cardId}>
              <Card cardId={cardId} />
            </Draggable>
          ))}
        </DNDContainer>
      </Cards>
    </Container>
  );
}

export default Column;
