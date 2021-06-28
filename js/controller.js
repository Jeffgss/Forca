const createController = function (game) {
  const input = document.querySelector(".entrada");
  const gaps = document.querySelector(".lacunas");

  const displaysGaps = function () {};

  const changePlaceHolder = function (text) {};

  const saveSecretWord = function () {};

  const start = function () {
    document.addEventListener("keypress", function (event) {
      if (event.key == "Enter") {
        switch (game.getStage()) {
          case 1:
            break;
          case 2:
            break;
        }
      }
    });
  };
  return { start: start };
};
