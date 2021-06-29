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

  const restart = function () {
    game.restart();
    gaps.innerHTML = "";
    changePlaceHolder("Palavra secreta");
  };

  const readKick = function () {
    let kick = input.value.trim().substr(0, 1);
    input.value = "";
    game.processKick(kick);
    displaysGaps();

    setTimeout(function () {
      if (game.winOrLose()) {
        if (game.win()) {
          alert("Parabéns, você ganhou!");
        } else if (game.lose()) {
          alert("Que pena, tente novamente!");
        }
        restart();
      }
    }, 200);
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
