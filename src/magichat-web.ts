import L from "L";

import {
  magicHatBegin,
  magicHatNext,
  magicHatGo,
  magicHatStartRepeat,
  magicHatStopRepeat,
  magicHatIsValidSeed,
} from "./magichat";

const elements = {
  question: L("h1"),
  repeating: L('input[type="checkbox"]'),
  seconds: L('input[type="number"]'),
  next: L("button.next"),
  copy: L("button.copy"),
};

let question: string;
let seconds = 0;
let repeating = false;
let seed = window.location.pathname.slice(1); // slice off leading slash

const originalCopyText = elements.copy.idx(0).textContent;

function askQuestion() {
  elements.question.idx(0).textContent = question;
  elements.copy.idx(0).textContent = originalCopyText;
  window.history.pushState(null, "", `/${seed}`);
}

// Question-back functionality is accomplished via native browser history API:
// (clicking the browser back button)
window.onpopstate = function () {
  const prevSeed = seed;
  seed = window.location.pathname.slice(1); // slice off leading slash
  if (seed.length && magicHatIsValidSeed(seed)) {
    [seed, question] = magicHatGo(seed, prevSeed, repeating ? seconds : null);
    window.history.replaceState(null, "", `/${seed}`);
    elements.question.idx(0).textContent = question;
  }
};

if (seed.length && !magicHatIsValidSeed(seed)) {
  seed = "";
  window.history.replaceState(null, "", "/");
}

// Select initial question and generate seed if necessary:
[seed, question, seconds] = magicHatBegin(seed, () => {
  [seed, question] = magicHatNext(seed, seconds);
  askQuestion();
});

// Ask initial question:
askQuestion();

if (seconds > 0) {
  repeating = true;
  elements.seconds.idx(0).value = seconds;
  elements.repeating.idx(0).checked = true;
}

elements.next.on("click", () => {
  [seed, question] = magicHatNext(seed, repeating ? seconds : null);
  askQuestion();
});

function onRepeatSettingChange() {
  const checked = elements.repeating.idx(0).checked;
  if (checked) {
    seconds = parseInt(elements.seconds.idx(0).value, 10);
    [seed, question, seconds] = magicHatStartRepeat(seed, seconds, () => {
      [seed, question] = magicHatNext(seed, seconds);
      askQuestion();
    });
    askQuestion();
    repeating = true;
  } else if (!checked) {
    [seed, question] = magicHatStopRepeat(seed);
    askQuestion();
    repeating = false;
  }
}

elements.repeating.on("change", onRepeatSettingChange);
elements.seconds.on("change", () => {
  elements.repeating.idx(0).checked = true;
  onRepeatSettingChange();
});

elements.copy.on("click", () => {
  L.copy(window.location.href);
  elements.copy.idx(0).textContent = "Copied!";
});
