import { MultiplayerConnection } from "@types";
import { Socket } from "socket.io-client";
import { create } from "zustand";

interface ActionProps {
  setRoomHash: (hash: MultiplayerConnection["roomHash"]) => void;
  removeRoomHash: () => void;
  setSocket: (socket: MultiplayerConnection["socket"]) => void;
  removeSocket: () => void;
}

interface StoreProps {
  roomHash?: MultiplayerConnection["roomHash"];
  socket?: MultiplayerConnection["socket"];
  actions: ActionProps;
}

export const useMultiplayerStore = create<StoreProps>((set) => ({
  roomHash: undefined,
  socket: undefined,
  actions: {
    setRoomHash: (hash: MultiplayerConnection["roomHash"]) =>
      set(() => ({ roomHash: hash })),
    removeRoomHash: () => set(() => ({ roomHash: undefined })),
    setSocket: (socket: MultiplayerConnection["socket"]) =>
      set(() => ({ socket: socket })),
    removeSocket: () => set(() => ({ socket: undefined })),
  },
}));
