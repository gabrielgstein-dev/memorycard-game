import styled from "styled-components";

export const FrontCardContent = styled.div`
  z-index: 2;
  width: 85%;
  height: 88%;
  background-color: #dadddf;
  border-radius: 5px;
`;

export const FrontCardTitle = styled.h4`
  position: absolute;
  width: 122%;
  left: -22px;
  top: 38%;
  text-align: center;
  background-color: #fff;
  transform: rotatez(-42deg);
`;

export const FrontCardNumber = styled.p`
  background-color: #fff;

  position: absolute;

  margin: 0;
  padding: 5px;
`;
export const FrontCardNumberMirrored = styled.p`
  background-color: #fff;

  position: absolute;
  padding: 5px;
  right: 0;
`;

export const FrontCardImage = styled.img`
  width: 100%;
  transform: translateX(-19%) translateY(10%) rotatez(-42deg);
  transition-property: width, transform;
  transition-duration: 0.3s;
`;

export const FrontCardImageMirrored = styled.img`
  width: 100%;
  transform: translateX(18%) translateY(24%) rotatez(137deg);
  transition-property: width, transform;
  transition-duration: 0.3s;
`;
