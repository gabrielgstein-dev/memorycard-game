import React, { useState, useEffect } from "react";

import { shuffle } from "@utils";
import { MemoryCard } from "@organisms";
import {
  checkPair,
  flipTargetCard,
  generateInitialData,
} from "./useDealer.utils";
import { CardData } from "@types";

export function useDealer() {
  const [cardsData, setCardsData] = useState<CardData[]>([]);
  const [selectedCards, setSelectedCards] = useState<CardData[]>([]);

  useEffect(() => {
    const initialData = shuffle(generateInitialData());
    setCardsData(initialData);
  }, []);

  useEffect(() => {
    if (selectedCards.length === 2) {
      setTimeout(() => {
        checkPair(selectedCards, setSelectedCards, setCardsData);
      }, 1000);
    }
  }, [selectedCards]);

  const flipCard = (card: CardData) => {
    if (selectedCards.length === 2) {
      return;
    }

    setCardsData(flipTargetCard(cardsData, card));
    setSelectedCards([...selectedCards, card]);
  };

  const dealtCards = cardsData.map((cardData) => {
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
    // ... outros métodos e estados
  };
}
