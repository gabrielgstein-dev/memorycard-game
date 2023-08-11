import React, { useState, useEffect } from "react";

import { shuffle } from "@utils";
import { MemoryCard } from "@/framework/organisms";
import {
  checkPair,
  flipTargetCard,
  generateInitialData,
} from "./useDealer.utils";
import { CardData } from "./useDealer.types";

export function useDealer() {
  const [cardsData, setCardsData] = useState<CardData[]>([]);
  const [selectedCards, setSelectedCards] = useState<string[]>([]);

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

  const flipCard = (cardId: string) => {
    if (selectedCards.length === 2) {
      return;
    }
    setCardsData((prevData) => {
      return prevData.map((cardData) => flipTargetCard(cardData, cardId));
    });
    setSelectedCards([...selectedCards, cardId]);
  };

  const dealtCards = cardsData.map((cardData) => {
    return (
      <MemoryCard
        key={cardData.cardId}
        cardId={cardData.cardId}
        hasChoosed={cardData.isFlipped}
        chooseCard={flipCard}
        hasFounded={cardData.founded}
      />
    );
  });

  return {
    dealtCards,
    // ... outros métodos e estados
  };
}
