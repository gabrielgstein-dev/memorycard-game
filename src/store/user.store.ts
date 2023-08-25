import { GameplayEnum } from "@/constants";
import { MultiplayerConnection } from "@types";
import { create } from "zustand";

interface ActionProps {
  setChoosedGameplay: (gameplay: GameplayEnum) => void;
  removeChoosedGameplay: () => void;
}

interface StoreProps {
  choosedGameplay?: GameplayEnum;
  socket?: MultiplayerConnection["socket"];
  actions: ActionProps;
}

export const useMultiplayerStore = create<StoreProps>((set) => ({
  choosedGameplay: undefined,
  actions: {
    setChoosedGameplay: (game: GameplayEnum) =>
      set(() => ({ choosedGameplay: game })),
    removeChoosedGameplay: () => set(() => ({ choosedGameplay: undefined })),
  },
}));
