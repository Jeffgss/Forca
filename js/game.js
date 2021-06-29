const createGame = (sprite) => {
  let secretWord = "";
  let gaps = [];
  let stage = 1;

  const processKick = (kick) => {
    if (!kick.trim()) throw new Error("Chute inválido!");
    const exp = new RegExp(kick, "gi");
    let result,
      isCorrect = false;

    while ((result = exp.exec(secretWord))) {
      gaps[result.index] = kick;
      isCorrect = true;
    }

    if (!isCorrect) sprite.nextFrame();
  };

  const createGaps = () => (gaps = Array(secretWord.length).fill(""));

  const nextStage = () => (stage = 2);

  const setSecretWord = (word) => {
    if (!word.trim() || word.length <= 2)
      throw new Error("Palavra secreta inválida!");
    secretWord = word;

    createGaps();
    nextStage();
  };

  const getGaps = () => gaps;

  const getStage = () => stage;

  const win = () =>
    gaps.length
      ? !gaps.some(function (gap) {
          return gap == "";
        })
      : false;

  const lose = () => sprite.isFinished();

  const restart = () => {
    secretWord = "";
    gaps = [];
    stage = 1;
    sprite.reset();
  };

  const winOrLose = () => win() || lose();

  return {
    setSecretWord,
    getGaps,
    getStage,
    processKick,
    win,
    lose,
    restart,
    winOrLose,
  };
};
