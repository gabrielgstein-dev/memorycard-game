import { CardData } from "@types";

export const generateInitialData = () => {
  const cards: CardData[] = Array.from({ length: 2 }, (_, index) => ({
    id: index,
    type: "A",
    isFlipped: false,
    isMatched: false,
  }));

  const pairCards: CardData[] = [
    ...cards.map((card) => ({
      ...card,
      type: "B" as CardData["type"],
    })),
  ];

  return [...cards, ...pairCards];
};

const areCardsAPair = (card1: CardData, card2: CardData): boolean => {
  return card1.id === card2.id && card1.type !== card2.type;
};

const resetSelectedCards = (
  setSelectedCards: React.Dispatch<React.SetStateAction<CardData[]>>,
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
  selectedCards: CardData[],
  setSelectedCards: React.Dispatch<React.SetStateAction<CardData[]>>,
  setCardsData: React.Dispatch<React.SetStateAction<CardData[]>>
) => {
  const [firstCard, secondCard] = selectedCards;

  if (areCardsAPair(firstCard, secondCard)) {
    setCardsData((prevData) =>
      prevData.map((card) =>
        card.id === firstCard.id || card.id === secondCard.id
          ? ({ ...card, isMatched: true } as CardData)
          : card
      )
    );

    resetSelectedCards(setSelectedCards, setCardsData);
  } else {
    resetSelectedCards(setSelectedCards, setCardsData);
  }
};

export const flipTargetCard = (cardList: CardData[], flipedCard: CardData) => {
  return cardList.map((card) => {
    if (card.id === flipedCard.id && card.type === flipedCard.type) {
      return { ...card, isFlipped: !card.isFlipped };
    }
    return card;
  });
};
