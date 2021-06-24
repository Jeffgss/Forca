function createSprite(selector) {
  let element = document.querySelector(".sprite");

  let frames = [
    "frame1",
    "frame2",
    "frame3",
    "frame4",
    "frame5",
    "frame6",
    "frame7",
    "frame8",
    "frame9",
  ];

  let current = 0;
  let lastFrame = frames.length - 1;

  element.classList.add(frames[current]);

  function moveFrame(from, to) {
    element.classList.remove(from);
    element.classList.add(to);
  }

  function nextFrame() {
    moveFrame(frames[current], frames[++current]);
  }

  return {
    nextFrame: nextFrame,
  };
}
