import React, { useRef, useState } from "react";
import { styled } from "linaria/react";
import { useDispatch } from "react-redux";
import { XIcon } from "@primer/octicons-react";
import { Input } from "reakit/Input";

import { Card } from "./column";
import { EditableTitle, GhostButton, Markdown } from "../../components";
import { editCard } from "./boardSlice";

const Modal = styled.div`
  width: 768px;
  height: calc(100vh - 56px);
  max-width: calc(100vw - 4em);
`;

const Header = styled.header`
  display: flex;
  border-bottom: 1px solid #006dff;

  button {
    margin: 0 1em 0 auto;
    width: min-content;
    /* display: flex; */

    svg {
      margin: auto;
    }
  }
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Content = styled.div`
  width: 80%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  padding: 0.5em 0.75em;
`;

interface IProps {
  card: Card;
  close: () => void;
}

function CardModal({ card, close }: IProps) {
  const dispatch = useDispatch();
  const bodyInput = useRef<HTMLTextAreaElement>(null);
  const [editingBody, setEditingBody] = useState("");

  const saveName = (name: string) =>
    dispatch(editCard({ ...card, name: name }));

  return (
    <Modal>
      <Header>
        <EditableTitle name={card.name} saveName={saveName} />
        <GhostButton onClick={close}>
          <XIcon size={24} />
        </GhostButton>
      </Header>
      <Body>
        <Content>
          {editingBody === "" ? (
            <Markdown text={card.body} />
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
        </Content>
      </Body>
    </Modal>
  );
}

export default CardModal;
