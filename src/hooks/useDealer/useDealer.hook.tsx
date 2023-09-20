import React from "react";

import { MemoryCard } from "@organisms";
import { CardData } from "@types";
interface DealerProps {
  emitCardSelection?: (card: CardData) => void;
  cardsData?: CardData[];
}
export function useDealer({ cardsData, emitCardSelection }: DealerProps) {
  const flipCard = (card: CardData) => {
    emitCardSelection?.(card);
  };

  const dealtCards = cardsData?.map((cardData) => {
    return (
      <MemoryCard
        key={`${cardData.id}:${cardData.type}`}
        id={cardData.id}
        isFlipped={cardData.isFlipped}
        isMatched={cardData.isMatched}
        type={cardData.type}
        chooseCard={flipCard}
      />
    );
  });

  return {
    dealtCards,
  };
}
