import React from "react";
import { styled } from "linaria/react";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Spinner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  .lds-roller {
    margin: auto;
    display: inline-block;
    position: relative;
    width: 16em;
    height: 16em;
  }
  .lds-roller div {
    background: #00cc99;
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 8em 8em;
  }
  .lds-roller div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 1.4em;
    height: 1.4em;
    border-radius: 50%;
    background: #fff;
    margin: -0.8em 0 0 -0.8em;
    background: rgba(0, 109, 255, 0.6);
  }
  .lds-roller div:nth-child(1) {
    animation-delay: -0.036s;
  }
  .lds-roller div:nth-child(1):after {
    top: 12.6em;
    left: 12.6em;
  }
  .lds-roller div:nth-child(2) {
    animation-delay: -0.072s;
  }
  .lds-roller div:nth-child(2):after {
    top: 13.6em;
    left: 11.2em;
  }
  .lds-roller div:nth-child(3) {
    animation-delay: -0.108s;
  }
  .lds-roller div:nth-child(3):after {
    top: 14.2em;
    left: 9.6em;
  }
  .lds-roller div:nth-child(4) {
    animation-delay: -0.144s;
  }
  .lds-roller div:nth-child(4):after {
    top: 14.4em;
    left: 8em;
  }
  .lds-roller div:nth-child(5) {
    animation-delay: -0.18s;
  }
  .lds-roller div:nth-child(5):after {
    top: 14.2em;
    left: 6.4em;
  }
  .lds-roller div:nth-child(6) {
    animation-delay: -0.216s;
  }
  .lds-roller div:nth-child(6):after {
    top: 13.6em;
    left: 4.8em;
  }
  .lds-roller div:nth-child(7) {
    animation-delay: -0.252s;
  }
  .lds-roller div:nth-child(7):after {
    top: 12.6em;
    left: 3.4em;
  }
  .lds-roller div:nth-child(8) {
    animation-delay: -0.288s;
  }
  .lds-roller div:nth-child(8):after {
    top: 11.2em;
    left: 2.4em;
  }
  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function Loading() {
  return (
    <Container>
      <Spinner>
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Spinner>
    </Container>
  );
}

export default Loading;
