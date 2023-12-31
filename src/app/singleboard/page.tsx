"use client";

import { BoardGame } from "@/framework/organisms";
import { useDealer } from "@hooks";
export default function Home() {
  const { dealtCards } = useDealer();
  return (
    <main>
      <BoardGame>{dealtCards}</BoardGame>
    </main>
  );
}
