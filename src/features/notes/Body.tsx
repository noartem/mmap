import React, { useState, useRef, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { css } from "linaria";
import Markdown from "markdown-to-jsx";
import { Button } from "reakit/Button";
import { Input } from "reakit/Input";
import { useParams, useHistory } from "react-router-dom";

import { useShortcut } from "../../utils";

import { selectNote, updateNote, deleteNote } from "./notesSlice";
import { Code } from "./code";

const stylesClass = css`
  height: 100%;
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
    top: 0;
    position: sticky;

    background: #fff;
    border-bottom: 1px solid #006dff;

    display: flex;

    h1 {
      overflow: hidden;
      text-overflow: ellipsis;
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
    <div className={stylesClass}>
      <nav>
        {notEditing ? (
          <h1 title={note.name}>{note.name}</h1>
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
    </div>
  );
}

export default Body;
