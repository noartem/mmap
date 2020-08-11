import React from "react";
import { useSelector } from "react-redux";
import { styled } from "linaria/react";
import { Link, useHistory } from "react-router-dom";

import { useShortcut } from "../../utils";

import { selectSearchingNotes } from "./notesSlice";

const Links = styled.ul`
  margin: 0;
  padding: 0;

  li {
    list-style: none;
  }
`;

const NavLink = styled.a`
  display: block;
  padding: 0.5em 0.75em;

  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
  text-decoration: none;
  text-align: left;
  color: inherit;
  transition: 0.1s;

  &:focus,
  &:hover,
  &:active {
    background: #006dff;
    color: white;
  }
`;

function useNoteShortcuts(url: string) {
  const notes = useSelector(selectSearchingNotes);
  const { push } = useHistory();

  const useShcut = (i: number) =>
    useShortcut(
      `ctrl+alt+${String(i + 1)}`,
      () => (i >= notes.length ? null : push(`${url}/${notes[i].id}`)),
      [notes, push]
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
    <div>
      <Links>
        {notes.map((note) => (
          <li title={note.name} key={note.id}>
            <Link component={NavLink} to={`${url}/${note.id}`}>
              {note.name}
            </Link>
          </li>
        ))}
      </Links>
    </div>
  );
}

interface IProps {
  url: string;
}

export default Nav;
