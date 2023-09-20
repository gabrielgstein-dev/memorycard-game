import React, { useState, useEffect } from "react";

import io from "socket.io-client";

import { CardData, MultiplayerConnection, SocketResponse } from "@types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useMultiplayer() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [boardId, setBoardId] = useState<string>("");
  const [socket, setSocket] = useState<MultiplayerConnection["socket"]>();
  const [cardsData, setCardsData] = useState<CardData[]>([]);

  const [player, setPlayer] = useState<SocketResponse.IPlayer>();

  useEffect(() => {
    const socketInstance = io("http://localhost:8000/");

    socketInstance.on("connect", () => {
      const boardId = searchParams.get("board");
      if (boardId) {
        socketInstance.emit("joinGame", boardId);
      } else {
        socketInstance.emit("newGame");
      }
    });

    socketInstance.on("deckUpdate", (deckUpdated: CardData[]) => {
      setCardsData(deckUpdated);
    });

    socketInstance.on("startGame", (props: SocketResponse.NewGameContract) => {
      const { boardId, cards, player } = props;

      router.replace(`${pathname}?board=${boardId}`);
      setCardsData(cards);
      setBoardId(boardId);
      setPlayer(player);
    });

    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  const emitCardSelection = (card: CardData) => {
    socket?.emit("flipCard", {
      boardId,
      card,
    });
  };

  return {
    socket,
    cardsData,
    emitCardSelection,
  };
}
