import React from "react";
import { CardBase } from "@atoms";

import * as S from "./BackCard.style";

export const BackCard: React.FC = () => {
  return (
    <CardBase>
      <S.BackCardContainer></S.BackCardContainer>
    </CardBase>
  );
};
