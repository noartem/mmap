import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { css } from "linaria";
import { Clickable } from "reakit/Clickable";
import { useShortcuts } from "react-shortcuts-hook";

import { RootState } from "../../app/store";
import { selectSearchingNotes, selectNote } from "./mmapSlice";

const styleClass = css`
  width: 32%;
  border-right: 1px solid rgba(0, 0, 0, 0.25);
  overflow-y: auto;
  background: #f8f9fa !important;

  ul {
    margin: 0;
    padding: 0;

    li {
      list-style: none;

      button {
        padding: 0.5em 0.75em;
        overflow: hidden;
        text-overflow: ellipsis;
        border: none;
        background: inherit;
        width: 100%;
        text-align: left;
        cursor: pointer;
        font-size: 16px;

        transition: 0.4s;

        &:focus,
        &:hover,
        &:active {
          background: #006dff;
          color: white;
        }
      }
    }
  }
`;

function useNoteShortcuts({ notes, selectNote }: IProps) {
  const useShcut = (i: number) =>
    useShortcuts(
      ["control", "alt", String(i + 1)],
      () => (i >= notes.length ? null : selectNote(notes[i].name)),
      [notes]
    );

  useShcut(0);
  useShcut(1);
  useShcut(2);
  useShcut(3);
  useShcut(4);
  useShcut(5);
  useShcut(6);
  useShcut(7);
  useShcut(8);
  useShcut(9);
}

function Nav({ notes, selectNote }: IProps) {
  useNoteShortcuts({ notes, selectNote });

  return (
    <div className={styleClass}>
      <ul>
        {notes.map((note) => (
          <li title={note.name} key={note.name}>
            <Clickable onClick={() => selectNote(note.name)}>
              {note.name}
            </Clickable>
          </li>
        ))}
      </ul>
    </div>
  );
}

const connector = connect(
  (state: RootState) => ({ notes: selectSearchingNotes(state) }),
  (dispatch) => ({
    selectNote: (name: string) => dispatch(selectNote(name)),
  })
);

type IProps = ConnectedProps<typeof connector>;

export default connector(Nav);
