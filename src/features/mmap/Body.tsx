import React, { useState, useRef, Fragment } from "react";
import { connect, ConnectedProps } from "react-redux";
import { css } from "linaria";
import Markdown from "markdown-to-jsx";
import { Button } from "reakit/Button";
import { Input } from "reakit/Input";
import { useShortcuts } from "react-shortcuts-hook";

import { updateNote, deleteNote, selectNote } from "./mmapSlice";
import { Note } from "./note";
import { Code } from "./code";

const stylesClass = css`
  width: 100%;
  display: flex;
  flex-direction: column;

  textarea {
    width: 100%;
    height: 100%;
    border: none;
  }

  #body_content {
    overflow: auto;
  }

  #body_content,
  textarea,
  nav {
    padding: 0.5em 0.75em;
  }

  nav {
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    display: flex;

    h1 {
      margin: auto 0;
    }

    .controls {
      margin-left: auto;
      display: flex;

      button {
        margin-left: 0.5em;
      }
    }
  }
`;

function Body({ note, updateNote, deleteNote, closeNote }: IProps) {
  const [editingBody, setEditingBody] = useState("");
  const [editingName, setEditingName] = useState("");
  const bodyInput = useRef<HTMLTextAreaElement>(null);

  const notEditing = editingBody === "";

  const editNote = () => {
    setEditingName(note.name);
    setEditingBody(note.body);
    bodyInput.current?.focus();
  };

  const saveNote = () => {
    updateNote({ name: editingName, body: editingBody });
    setEditingName("");
    setEditingBody("");
  };

  const tryDeleteNote = () => {
    if (window.confirm("Are you sure?")) deleteNote();
  };

  useShortcuts(["control", "B"], () => (notEditing ? editNote() : saveNote()), [
    note,
    editingName,
    editingBody,
    bodyInput,
  ]);

  useShortcuts(["alt", "I"], tryDeleteNote, []);

  useShortcuts(["Escape"], () => closeNote(), []);

  return (
    <main className={stylesClass}>
      <nav>
        {notEditing ? (
          <h1>{note.name}</h1>
        ) : (
          <Input
            value={editingName}
            onChange={(e) => setEditingName(e.target.value)}
          />
        )}

        <div className="controls">
          {notEditing ? (
            <Fragment>
              <Button onClick={editNote}>Edit</Button>
              <Button
                onClick={tryDeleteNote}
                unstable_system={{ palette: "danger" }}
              >
                Delete
              </Button>
            </Fragment>
          ) : (
            <Button onClick={saveNote}>Save</Button>
          )}
        </div>
      </nav>
      {notEditing ? (
        <div id="body_content" className="markdown-body">
          <Markdown
            children={note.body}
            options={{
              overrides: {
                code: {
                  component: Code,
                },
              },
            }}
          />
        </div>
      ) : (
        <Input
          name="body"
          placeholder="Some note body.."
          ref={bodyInput}
          value={editingBody}
          as="textarea"
          // @ts-ignore
          onChange={(e) => setEditingBody(e.target.value)}
        />
      )}
    </main>
  );
}

const connector = connect(null, (dispatch) => ({
  updateNote: (note: Note) => dispatch(updateNote(note)),
  deleteNote: () => dispatch(deleteNote()),
  closeNote: () => dispatch(selectNote("")),
}));

interface IProps extends ConnectedProps<typeof connector> {
  note: Note;
}

export default connector(Body);
