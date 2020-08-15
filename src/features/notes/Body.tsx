import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "linaria/react";
import { Button } from "reakit/Button";
import { Input } from "reakit/Input";
import { useParams, useHistory } from "react-router-dom";

import { useShortcut } from "../../utils";

import { selectNote, updateNote, deleteNote } from "./notesSlice";
import { Markdown } from "../../components";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  padding: 0.5em 0.75em;
`;

const Nav = styled.nav`
  top: 0;
  position: sticky;
  padding: 0.5em 0.75em;

  background: #fff;
  border-bottom: 1px solid #006dff;

  display: flex;
`;

const Title = styled.h2`
  overflow: hidden;
  text-overflow: ellipsis;
  margin: auto 0;
`;

const Controls = styled.div`
  margin-left: auto;
  display: flex;

  button {
    margin-left: 0.5em;
  }
`;

function Body() {
  const { noteId } = useParams<{ noteId: string }>();
  const note = useSelector(selectNote(noteId));

  const { push } = useHistory();
  const dispatch = useDispatch();

  const [editingBody, setEditingBody] = useState("");
  const [editingName, setEditingName] = useState("");
  const bodyInput = useRef<HTMLTextAreaElement>(null);

  const notEditing = editingBody === "";

  const editNote = () => {
    if (!note) return;

    setEditingName(note.name);
    setEditingBody(note.body);
    bodyInput.current?.focus();
  };

  const saveNote = () => {
    if (!note) return;

    dispatch(updateNote({ id: note.id, name: editingName, body: editingBody }));
    setEditingName("");
    setEditingBody("");
  };

  const tryDeleteNote = () => {
    if (note && window.confirm("Are you sure?")) dispatch(deleteNote(note.id));
  };

  const closeNote = () => push("/notes");

  useShortcut("ctrl+b", () => (notEditing ? editNote() : saveNote()), [
    note,
    editingName,
    editingBody,
    bodyInput,
  ]);

  useShortcut("alt+i", tryDeleteNote, []);

  useShortcut("escape", closeNote, []);

  if (!note) {
    closeNote();
    return <p>Redirecting...</p>;
  }

  return (
    <Container>
      <Nav>
        {notEditing ? (
          <Title title={note.name}>{note.name}</Title>
        ) : (
          <Input
            value={editingName}
            onChange={(e) => setEditingName(e.target.value)}
          />
        )}

        <Controls>
          {notEditing ? (
            <>
              <Button onClick={editNote}>Edit</Button>
              <Button
                onClick={tryDeleteNote}
                unstable_system={{ palette: "danger" }}
              >
                Delete
              </Button>
            </>
          ) : (
            <Button onClick={saveNote}>Save</Button>
          )}
        </Controls>
      </Nav>
      {notEditing ? (
        <Markdown text={note.body} />
      ) : (
        <Input
          name="body"
          placeholder="Some note body.."
          ref={bodyInput}
          value={editingBody}
          as={Textarea}
          // @ts-ignore
          onChange={(e) => setEditingBody(e.target.value)}
        />
      )}
    </Container>
  );
}

export default Body;
