import { withMultiplayer } from "@hocs";
import { BoardGame } from "@organisms";

export const MultiplayerBoardGame = withMultiplayer(BoardGame);
