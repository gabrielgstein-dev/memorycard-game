import React from "react";

import * as S from "./Card.style";

export const Card: React.FC = () => {
  return (
    <S.Cont>
      <S.Container>
        <S.CardContent>
          <S.CardTitle>Nike Air Max 97 Premium</S.CardTitle>
          <S.CardNumber>$180</S.CardNumber>
          <S.CardImage src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike04a.png" />
          <S.CardImageMirrored src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike04b.png" />
          <S.CardNumberMirrored>$180</S.CardNumberMirrored>
        </S.CardContent>
      </S.Container>
    </S.Cont>
  );
};
