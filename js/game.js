const createGame = function (sprite) {
  let secretWord = "";
  let gaps = [];
  let stage = 1;

  let processKick = function (kick) {
    if (!kick.trim()) throw new Error("Chute inválido!");
    let exp = new RegExp(kick, "gi");
    let result;
    let isCorrect = false;

    while ((result = exp.exec(secretWord))) {
      gaps[result.index] = kick;
      isCorrect = true;
    }

    if (!isCorrect) sprite.nextFrame();
  };

  const createGaps = function () {
    gaps = Array(secretWord.length).fill("");
  };

  const nextStage = function () {
    stage = 2;
  };

  const setSecretWord = function (word) {
    if (!word.trim() || word.length <= 2)
      throw new Error("Palavra secreta inválida!");
    secretWord = word;

    createGaps();
    nextStage();
  };

  const getGaps = function () {
    return gaps;
  };

  const getStage = function () {
    return stage;
  };

  const win = function () {
    return gaps.length
      ? !gaps.some(function (gap) {
          return gap == "";
        })
      : false;
  };

  const lose = function () {
    return sprite.isFinished();
  };

  const restart = function () {
    secretWord = "";
    gaps = [];
    stage = 1;
    sprite.reset();
  };

  const winOrLose = function () {
    return win() || lose();
  };

  return {
    setSecretWord: setSecretWord,
    getGaps: getGaps,
    getStage: getStage,
    processKick: processKick,
    win: win,
    lose: lose,
    restart: restart,
    winOrLose: winOrLose,
  };
};
