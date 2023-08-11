import { CardData } from "./useDealer.types";

export const generateInitialData = () => {
  const cards = Array.from({ length: 2 }, (_, index) => ({
    cardId: `${index}:A`,
    isFlipped: false,
    founded: false,
  }));

  return [
    ...cards,
    ...cards.map((card, index) => ({ ...card, cardId: `${index}:B` })),
  ];
};

const resetSelectedCards = (
  setSelectedCards: React.Dispatch<React.SetStateAction<string[]>>,
  setCardsData: React.Dispatch<React.SetStateAction<CardData[]>>
) => {
  setSelectedCards([]);
  setCardsData((prevData) => {
    return prevData.map((card) => {
      return { ...card, isFlipped: false };
    });
  });
};

export const checkPair = (
  selectedCards: string[],
  setSelectedCards: React.Dispatch<React.SetStateAction<string[]>>,
  setCardsData: React.Dispatch<React.SetStateAction<CardData[]>>
) => {
  const [firstCard, secondCard] = selectedCards;

  if (firstCard && secondCard) {
    const [firstId, firstTag] = firstCard.split(":");
    const [secondId, secondTag] = secondCard.split(":");

    if (firstId === secondId && firstTag !== secondTag) {
      setCardsData((prevData) =>
        prevData.map((card) =>
          card.cardId === firstCard || card.cardId === secondCard
            ? { ...card, founded: true }
            : card
        )
      );

      resetSelectedCards(setSelectedCards, setCardsData);
    } else {
      resetSelectedCards(setSelectedCards, setCardsData);
    }
  }
};

export const flipTargetCard = (card: CardData, cardId: string) => {
  if (card.cardId === cardId) {
    return { ...card, isFlipped: !card.isFlipped };
  }
  return card;
};
