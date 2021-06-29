const createController = (game) => {
  const input = document.querySelector(".entrada");
  const gaps = document.querySelector(".lacunas");

  const displaysGaps = () => {
    gaps.innerHTML = "";
    game.getGaps().forEach((gap) => {
      const gapsLi = document.createElement("li");
      gapsLi.classList.add("lacuna");
      gapsLi.textContent = gap;
      gaps.appendChild(gapsLi);
    });
  };

  const changePlaceHolder = (text) => (input.placeholder = text);

  const saveSecretWord = () => {
    try {
      game.setSecretWord(input.value.trim());
      input.value = "";
      changePlaceHolder("Chute");
      displaysGaps();
    } catch (err) {
      alert(err);
    }
  };

  const restart = () => {
    game.restart();
    gaps.innerHTML = "";
    changePlaceHolder("Palavra secreta");
  };

  const readKick = () => {
    try {
      game.processKick(input.value.trim().substr(0, 1));
      input.value = "";
      displaysGaps();

      setTimeout(() => {
        if (game.winOrLose()) {
          if (game.win()) {
            alert("Parabéns, você ganhou!");
          } else if (game.lose()) {
            alert("Que pena, tente novamente!");
          }
          restart();
        }
      }, 200);
    } catch (err) {
      alert(err);
    }
  };

  const start = () => {
    document.addEventListener("keypress", (event) => {
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
  return { start };
};
