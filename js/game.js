const createGame = function () {
  let secretWord = "";
  let gaps = [];
  let stage = 1;

  const createGaps = function () {
    for (let i = 0; i < secretWord.length; i++) {
      gaps.push("");
    }
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

  return {
    setSecretWord: setSecretWord,
    getGaps: getGaps,
    getStage: getStage,
  };
};
