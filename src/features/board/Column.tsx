import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "linaria/react";
import { Clickable } from "reakit/Clickable";
import { Input } from "reakit/Input";
import { useMenuState, Menu, MenuItem, MenuButton } from "reakit/Menu";
import { GrabberIcon, KebabHorizontalIcon } from "@primer/octicons-react";
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
  deleteColumn,
} from "./boardSlice";
import AddCard from "./AddCard";
import Card from "./Card";

interface IProps {
  columnId: string;
  isDragging: boolean;
  setIsDragging: (val: boolean) => void;
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
  font-size: 14px;
  display: flex;

  .column-drag-handle {
    cursor: grab;
    margin: auto 0;
  }

  input {
    font-weight: 400;
    background: inherit;
  }

  .column-menu {
    display: flex;
    margin: 0 0 0 auto;

    button.menu-button {
      border: none;
      background: none !important;
      margin: auto 0 auto 0.5em;
      color: #000 !important;
      padding: 0;
      svg {
        width: 16px;
        height: 16px;
        margin: 0;
        display: none;
      }
    }
  }
`;

const Title = styled.h2`
  margin: 0;
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

const Cards = styled.ul<{ isDragging: boolean }>`
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

  .smooth-dnd-container {
    transition: 0.2s;
    min-height: ${({ isDragging }) => (isDragging ? "30px" : "0")};
  }
`;

function Column({ columnId, isDragging, setIsDragging }: IProps) {
  const column = useSelector(selectColumn(columnId));
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputName, setInputName] = useState("");

  const dispatch = useDispatch();
  const menu = useMenuState();

  const startEditing = () => {
    setInputName(column.name);
    inputRef.current?.focus();
  };

  const saveName = () => {
    dispatch(editColumn({ columnId, newName: inputName }));
    setInputName("");
  };

  const tryDeleteColumn = () =>
    window.confirm("Are you sure?") && dispatch(deleteColumn(columnId));

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
        <div className="column-menu">
          <MenuButton {...menu} className="menu-button">
            <KebabHorizontalIcon size={20} />
          </MenuButton>
          <Menu {...menu}>
            <MenuItem {...menu} onClick={startEditing}>
              Edit column name
            </MenuItem>
            <MenuItem {...menu} onClick={tryDeleteColumn}>
              Delete Column
            </MenuItem>
          </Menu>
        </div>
      </Header>
      <Cards isDragging={isDragging}>
        <DNDContainer
          groupName="column"
          getChildPayload={(index) => column.cardsIds[index]}
          onDrop={onCardDrop}
          dropPlaceholder={{
            animationDuration: 200,
            showOnTop: true,
            className: "cards-drop-preview",
          }}
          onDragStart={(p) => p.isSource && setIsDragging(true)}
          onDragEnd={(p) => p.isSource && setIsDragging(false)}
          dragClass="card-ghost"
        >
          {column.cardsIds.map((cardId) => (
            <Draggable key={cardId}>
              <Card cardId={cardId} />
            </Draggable>
          ))}
        </DNDContainer>
        <AddCard columnId={columnId} />
      </Cards>
    </Container>
  );
}

export default Column;
