import React, { PropsWithChildren, useEffect } from "react";
import { BoardGame } from "@organisms";
import { useDealer, useMultiplayer } from "@/hooks";

export const MultiplayerBoardGame: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const { cardsData, emitCardSelection } = useMultiplayer();
  const { dealtCards } = useDealer({ emitCardSelection, cardsData });

  return <BoardGame>{dealtCards}</BoardGame>;
};
