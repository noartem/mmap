import React from "react";
import { styled } from "linaria/react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container as DNDContainer,
  Draggable,
  DropResult,
} from "react-smooth-dnd";

import { selectBoard, moveColumn } from "./boardSlice";
import Column from "./Column";

const Container = styled.div<{ background: string }>`
  background: ${(props) => props.background};
  height: calc(100vh - 2.6em);
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
`;

const Columns = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  min-width: 100%;
  min-height: 100%;
  display: inline-flex;

  .columns-drop-preview {
    background: rgba(0, 0, 0, 0.2);
    margin: 0.5em;
    border-radius: 0.4em;
  }
`;

function Board() {
  const { columnOrder, background } = useSelector(selectBoard);
  const dispatch = useDispatch();

  const onColumnDrop = ({ removedIndex, addedIndex }: DropResult) =>
    removedIndex !== null &&
    addedIndex !== null &&
    dispatch(
      moveColumn({
        oldIndex: removedIndex,
        newIndex: addedIndex,
      })
    );

  return (
    <Container background={background}>
      <Columns>
        <DNDContainer
          groupName="board"
          orientation="horizontal"
          onDrop={onColumnDrop}
          dragHandleSelector=".column-drag-handle"
          dropPlaceholder={{
            animationDuration: 200,
            showOnTop: true,
            className: "columns-drop-preview",
          }}
        >
          {columnOrder.map((columnId, index) => (
            <Draggable key={"column-" + columnId}>
              <Column columnId={columnId} index={index} />
            </Draggable>
          ))}
        </DNDContainer>
      </Columns>
    </Container>
  );
}

export default () => <Board />;