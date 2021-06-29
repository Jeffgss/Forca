const createSprite = (selector) => {
  const element = document.querySelector(selector);

  const frames = [
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
  const lastFrame = frames.length - 1;

  element.classList.add(frames[current]);

  const moveFrame = (from, to) => {
    element.classList.remove(from);
    element.classList.add(to);
  };

  const hasNext = () => current + 1 <= lastFrame;

  const nextFrame = () => {
    if (hasNext()) moveFrame(frames[current], frames[++current]);
  };

  const reset = () => {
    moveFrame(frames[current], frames[0]);
    current = 0;
  };

  const isFinished = () => !hasNext();

  return {
    nextFrame,
    reset,
    isFinished,
  };
};
