const createGame = function () {
  let secretWord = "";
  let gaps = [];
  let stage = 1;

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

  return {
    setSecretWord: setSecretWord,
    getGaps: getGaps,
    getStage: getStage,
  };
};
