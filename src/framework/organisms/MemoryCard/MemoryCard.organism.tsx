import React from "react";

import { FrontCard, BackCard } from "@molecules";

import * as S from "./MemoryCard.style";
import { CardData } from "@types";

export interface MemoryCardProps extends CardData {
  chooseCard: (cardId: CardData) => void;
}

export const MemoryCard: React.FC<MemoryCardProps> = ({
  id,
  chooseCard,
  isFlipped,
  isMatched,
  type,
}) => {
  const handleClick = () => {
    !isMatched &&
      chooseCard?.({
        id,
        isFlipped,
        isMatched,
        type,
      });
  };

  return (
    <S.ContainerButton onClick={handleClick} disabled={!!isMatched}>
      <S.MemoryCardContainer isFlipped={!!isFlipped} hasFounded={!!isMatched}>
        <BackCard />
        <FrontCard cardId={String(id)} />
      </S.MemoryCardContainer>
    </S.ContainerButton>
  );
};
