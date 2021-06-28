const createController = function (game) {
  const input = document.querySelector(".entrada");
  const gaps = document.querySelector(".lacunas");

  const displaysGaps = function () {
    gaps.innerHTML = "";
    game.getGaps().forEach(function (gap) {
      const gapsLi = document.createElement("li");
      gapsLi.classList.add("lacuna");
      gapsLi.textContent = gap;
      gaps.appendChild(gapsLi);
    });
  };

  const changePlaceHolder = function (text) {
    input.placeholder = text;
  };

  const saveSecretWord = function () {
    game.setSecretWord(input.value.trim());
    input.value = "";
    changePlaceHolder("Chute");
    displaysGaps();
  };

  const readKick = function () {
    let kick = input.value.trim().substr(0, 1);
    input.value = "";
    game.processKick(kick);
    displaysGaps();
  };

  const start = function () {
    document.addEventListener("keypress", function (event) {
      if (event.key == "Enter") {
        switch (game.getStage()) {
          case 1:
            saveSecretWord();
            break;
          case 2:
            readKick();
            break;
        }
      }
    });
  };
  return { start: start };
};
