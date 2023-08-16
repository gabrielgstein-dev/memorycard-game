import { withMultiplayer } from "@hocs";
import { BoardGame } from "@organisms";

const MultiplayerBoardGame = withMultiplayer(BoardGame);

export default MultiplayerBoardGame;
