import React from "react";
import { CardBase } from "@atoms";

import * as S from "./FrontCard.style";

interface FrontCardProps {
  cardId: string;
}
export const FrontCard: React.FC<FrontCardProps> = ({ cardId }) => {
  return (
    <CardBase>
      <S.FrontCardContent>
        <S.FrontCardTitle>Nike Air Max 97 Premium</S.FrontCardTitle>
        <S.FrontCardNumber>{String(cardId)}</S.FrontCardNumber>
        <S.FrontCardImage src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike04a.png" />
        <S.FrontCardImageMirrored src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike04b.png" />
        <S.FrontCardNumberMirrored>{String(cardId)}</S.FrontCardNumberMirrored>
      </S.FrontCardContent>
    </CardBase>
  );
};
