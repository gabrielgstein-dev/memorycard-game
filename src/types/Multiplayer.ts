import { Socket } from "socket.io-client";

export interface MultiplayerConnection {
  roomHash?: string;
  socket?: Socket;
}
