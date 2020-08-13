import { styled } from "linaria/react";
import { Clickable } from "reakit/Clickable";

export const GhostButton = styled(Clickable)`
  display: flex;
  width: 100%;
  border: none !important;
  padding: 0;
  background: none !important;
  color: inherit !important;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  text-align: left;
`;
