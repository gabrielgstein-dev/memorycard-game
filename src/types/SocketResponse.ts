import { CardData } from "./CardData";

export interface IPlayer {
  id: string;
  score: number;
}

export interface NewGameContract {
  boardId: string;
  cards: CardData[];
  player: IPlayer;
}
