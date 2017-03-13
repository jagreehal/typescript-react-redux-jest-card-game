export var Level;
(function (Level) {
    Level[Level["easy"] = 0] = "easy";
    Level[Level["hard"] = 1] = "hard";
})(Level || (Level = {}));
export var GameStatus;
(function (GameStatus) {
    GameStatus[GameStatus["notStarted"] = 0] = "notStarted";
    GameStatus[GameStatus["started"] = 1] = "started";
    GameStatus[GameStatus["won"] = 2] = "won";
    GameStatus[GameStatus["lost"] = 3] = "lost";
})(GameStatus || (GameStatus = {}));
;
export var Guess;
(function (Guess) {
    Guess[Guess["high"] = 0] = "high";
    Guess[Guess["low"] = 1] = "low";
})(Guess || (Guess = {}));
;
//# sourceMappingURL=index.js.map