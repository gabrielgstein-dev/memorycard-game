import React from "react";

import { FrontCard, BackCard } from "@molecules";

import * as S from "./MemoryCard.style";

export interface MemoryCardProps {
  cardId: string;
  chooseCard: (cardId: string) => void;
  hasChoosed?: boolean;
  hasFounded?: boolean;
}

export const MemoryCard: React.FC<MemoryCardProps> = ({
  cardId,
  chooseCard,
  hasChoosed,
  hasFounded,
}) => {
  const handleClick = () => {
    !hasFounded && chooseCard?.(cardId);
  };

  return (
    <S.ContainerButton onClick={handleClick} disabled={!!hasFounded}>
      <S.MemoryCardContainer isFlipped={!!hasChoosed} hasFounded={!!hasFounded}>
        <BackCard />
        <FrontCard cardId={cardId} />
      </S.MemoryCardContainer>
    </S.ContainerButton>
  );
};
