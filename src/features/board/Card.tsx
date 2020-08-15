import React from "react";
import { useSelector } from "react-redux";
import { styled } from "linaria/react";
import {
  useDialogState,
  Dialog,
  DialogDisclosure,
  DialogBackdrop,
} from "reakit/Dialog";

import { selectCard } from "./boardSlice";
import CardModal from "./CardModal";
import { GhostButton } from "../../components";

interface IProps {
  cardId: string;
}

const Container = styled.div`
  margin: 0.5em 0 0 0;
  border-radius: 0.4em;
  background: #fff;

  &::last-child {
    margin: 0;
  }
`;

const Title = styled.h3`
  margin: 0;
  button {
    font-size: 14px;
    font-weight: normal;
    text-align: left !important;
  }
`;

function Card({ cardId }: IProps) {
  const card = useSelector(selectCard(cardId));
  const dialog = useDialogState();

  return (
    <Container>
      <Title>
        <DialogDisclosure as={GhostButton} {...dialog}>
          {card.name}
        </DialogDisclosure>
      </Title>
      <DialogBackdrop {...dialog}>
        <Dialog {...dialog} aria-label="Welcome">
          <CardModal card={card} close={dialog.toggle} />
        </Dialog>
      </DialogBackdrop>
    </Container>
  );
}

export default Card;
