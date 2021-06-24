const createSprite = function (selector) {
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

  const moveFrame = function (from, to) {
    element.classList.remove(from);
    element.classList.add(to);
  };

  const hasNext = function () {
    return current + 1 <= lastFrame;
  };

  const nextFrame = function () {
    if (hasNext()) moveFrame(frames[current], frames[++current]);
  };

  const reset = function () {
    element.classList.remove(frames[current]);
  };

  return {
    nextFrame: nextFrame,
    reset: reset,
  };
};
