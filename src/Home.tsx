import React from "react";
import { styled } from "linaria/react";

import logo from "./logo.svg";

const Container = styled.div`
  height: 100%;
  margin: 1em auto;
  max-width: 90vw;

  img {
    max-height: 100%;
    max-width: 100%;
  }

  @media (min-width: 767px) {
    display: flex;
  }
`;

const Text = styled.div`
  margin: auto 0;
  padding: 0 1em;

  p {
    font-size: 2em;
  }

  a {
    text-decoration: none;
    color: #006dff;
  }
`;

function Home() {
  return (
    <Container>
      <img src={logo} alt="Mind map logo" />
      <Text>
        <p>Powerful self-management tools</p>
        <p>
          By <a href="https://github.com/noartem">@noartem</a>
        </p>
        <p>
          Source <a href="https://github.com/noartem/mmap">noartem/mmap</a>
        </p>
      </Text>
    </Container>
  );
}

export default Home;
