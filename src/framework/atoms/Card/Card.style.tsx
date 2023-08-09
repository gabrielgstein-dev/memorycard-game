import styled from "styled-components";

export const Cont = styled.div`
  transform: skewY(0);
`;

export const Container = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  border-radius: 15px;
  box-shadow: 1px 3px 11px 2px #b9b9b9;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContent = styled.div`
  z-index: 2;
  width: 85%;
  height: 88%;
  background-color: #dadddf;
  border-radius: 5px;

  /* img:nth-child(2n) {
    transform: translateX(-30%) translateY(5%) rotatez(135deg);
    transition-property: width, transform;
    transition-duration: 0.3s;
  }
  img:nth-child(2n + 1) {
    transform: translateX(-70%) translateY(-105%) rotatez(-45deg);
    transition-property: width, transform;
    transition-duration: 0.3s;
  } */
`;

export const CardTitle = styled.h4`
  position: absolute;
  width: 122%;
  left: -22px;
  top: 38%;
  text-align: center;
  background-color: #fff;
  transform: rotatez(-42deg);
`;

export const CardNumber = styled.p`
  background-color: #fff;

  position: absolute;
  margin: 0;
  padding: 5px;
`;
export const CardNumberMirrored = styled.p`
  background-color: #fff;

  position: absolute;
  padding: 5px;
  right: 0;
`;

export const CardImage = styled.img`
  width: 100%;
  transform: translateX(-19%) translateY(10%) rotatez(-42deg);
  transition-property: width, transform;
  transition-duration: 0.3s;
`;

export const CardImageMirrored = styled.img`
  width: 100%;
  transform: translateX(18%) translateY(24%) rotatez(137deg);
  transition-property: width, transform;
  transition-duration: 0.3s;
`;
