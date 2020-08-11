import React from "react";
import { useSelector } from "react-redux";
import { styled } from "linaria/react";
import { Clickable } from "reakit/Clickable";

import { selectCard } from "./boardSlice";

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

const Title = styled.span`
  margin: 0;

  button {
    margin: 0;
    border: none;
    background: inherit;
    padding: 0;
    cursor: pointer;
    padding: 0.5em 0.75em;
    width: 100%;
    height: 100%;
    font-size: 14px;
    text-align: left;
  }
`;

function Card({ cardId }: IProps) {
  const card = useSelector(selectCard(cardId));

  return (
    <Container>
      <Title>
        <Clickable onClick={() => console.log("Open card #" + cardId)}>
          {card.name} #{card.id}
        </Clickable>
      </Title>
    </Container>
  );
}

export default Card;
