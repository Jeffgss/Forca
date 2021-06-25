const createGame = function (sprite) {
  let secretWord = "";
  let gaps = [];
  let stage = 1;

  let processKick = function (kick) {
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

  return {
    setSecretWord: setSecretWord,
    getGaps: getGaps,
    getStage: getStage,
    processKick: processKick,
    win: win,
    lose: lose,
  };
};
