import { MultiplayerConnection } from "@types";
import { useMultiplayerStore } from "@store";
import React, { ComponentType, useEffect } from "react";
import io from "socket.io-client";

export function withMultiplayer<T>(
  WrappedComponent: ComponentType<T & MultiplayerConnection>
) {
  const WithMultiplayer: React.FC<T> = (props) => {
    const { actions, roomHash, socket } = useMultiplayerStore();

    useEffect(() => {
      const socketInstance = io("http://localhost:3000"); // Substitua pela URL do seu servidor NestJS

      socketInstance.on("connect", () => {
        console.log("Conectado ao servidor");
        socketInstance.emit("createOrJoinRoom");
      });

      socketInstance.on("roomCreated", (hash: string) => {
        console.log("Hash da sala recebida:", hash);
        actions.setRoomHash(hash);
      });

      actions.setSocket(socketInstance);

      return () => {
        socketInstance.disconnect();
      };
    }, []);

    return <WrappedComponent {...props} roomHash={roomHash} socket={socket} />;
  };

  WithMultiplayer.displayName = `WithMultiplayer(${getDisplayName(
    WrappedComponent
  )})`;

  return WithMultiplayer;
}

function getDisplayName(WrappedComponent: React.ComponentType<any>): string {
  return WrappedComponent.displayName ?? (WrappedComponent.name || "Component");
}
