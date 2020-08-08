import React from "react";
import { useSelector } from "react-redux";
import { css } from "linaria";
import { Link, useHistory } from "react-router-dom";

import { useShortcut } from "../../utils";

import { selectSearchingNotes } from "./notesSlice";

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

function useNoteShortcuts(url: string) {
  const notes = useSelector(selectSearchingNotes);
  const history = useHistory();

  const useShcut = (i: number) =>
    useShortcut(
      `ctrl+alt+${String(i + 1)}`,
      () => (i >= notes.length ? null : history.push(`${url}/${notes[i].id}`)),
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

function Nav({ url }: IProps) {
  const notes = useSelector(selectSearchingNotes);

  useNoteShortcuts(url);

  return (
    <div className={styleClass}>
      <ul>
        {notes.map((note) => (
          <li title={note.name} key={note.id}>
            <Link to={`${url}/${note.id}`}>{note.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface IProps {
  url: string;
}

export default Nav;
