import React from "react";
import { CardBase } from "@atoms";

import * as S from "./FrontCard.style";

export const FrontCard: React.FC = () => {
  return (
    <CardBase>
      <S.FrontCardContent>
        <S.FrontCardTitle>Nike Air Max 97 Premium</S.FrontCardTitle>
        <S.FrontCardNumber>$180</S.FrontCardNumber>
        <S.FrontCardImage src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike04a.png" />
        <S.FrontCardImageMirrored src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike04b.png" />
        <S.FrontCardNumberMirrored>$180</S.FrontCardNumberMirrored>
      </S.FrontCardContent>
    </CardBase>
  );
};
