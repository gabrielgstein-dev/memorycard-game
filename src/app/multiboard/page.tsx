"use client";

import { MultiplayerBoardGame } from "@/framework/organisms";
import { useDealer } from "@hooks";
export default function Home() {
  const { dealtCards } = useDealer();
  return (
    <main>
      <MultiplayerBoardGame>{dealtCards}</MultiplayerBoardGame>
    </main>
  );
}
