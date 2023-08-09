import React from "react";

import { FrontCard, BackCard } from "@molecules";

import * as S from "./MemoryCard.style";

export const MemoryCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <S.ContainerButton onClick={() => setIsFlipped(!isFlipped)}>
      <S.MemoryCardContainer isFlipped={isFlipped}>
        <BackCard />
        <FrontCard />
      </S.MemoryCardContainer>
    </S.ContainerButton>
  );
};
