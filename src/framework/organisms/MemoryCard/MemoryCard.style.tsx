import styled from "styled-components";

export const ContainerButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

export const MemoryCardContainer = styled.div<{ isFlipped: boolean }>`
  perspective: 1000px;
  width: 200px;
  height: 300px;

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    transform-origin: center;
  }

  & > :first-child {
    transform: rotateY(${(props) => (props.isFlipped ? "-180deg" : "0deg")});
    transition: transform 0.6s;
  }

  & > :nth-child(2) {
    transform: rotateY(${(props) => (props.isFlipped ? "0deg" : "180deg")});
    transition: transform 0.6s;
  }
`;
