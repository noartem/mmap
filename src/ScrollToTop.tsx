import React, { useState, useEffect } from "react";
import { styled } from "linaria/react";
import { ChevronUpIcon } from "@primer/octicons-react";

import { GhostButton } from "./components";

const Floating = styled.div`
  @media (min-width: 922px) {
    display: none;
  }

  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 99;

  button {
    display: flex;
    cursor: pointer;
    border-radius: 50%;
    width: 2.8rem;
    height: 2.8rem;
    /* color: rgba(85, 97, 125, 0.6) !important; */
    background: rgba(93, 104, 156, 0.15) !important;
    transition: all 0.3s;

    svg {
      color: rgba(85, 97, 125, 0.6);
      margin: auto;
    }
  }
`;

function ScrollToTop() {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    const doc = document.documentElement;
    const list = () =>
      setIsShowing(
        (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0) >= 200
      );

    window.addEventListener("scroll", list);

    return () => {
      window.removeEventListener("scroll", list);
    };
  }, [setIsShowing]);

  const scroll = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Floating>
      {isShowing && (
        <GhostButton onClick={scroll} aria-label="Scroll to top">
          <ChevronUpIcon size={22} />
        </GhostButton>
      )}
    </Floating>
  );
}

export default ScrollToTop;
