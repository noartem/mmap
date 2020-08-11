import { styled } from "linaria/react";
import { Clickable } from "reakit/Clickable";

export const GhostButton = styled(Clickable)`
  display: flex;
  width: 100%;
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`;
