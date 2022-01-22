import L from "L";

import {
  magicHatBegin,
  magicHatNext,
  magicHatBack,
  magicHatGo,
  magicHatStartRepeat,
  magicHatStopRepeat,
  magicHatIsValidSeed,
} from "./core";

const questionHeading = L("h1");
const repeatingCheckbox = L('input[type="checkbox"]');
const secondsInput = L('input[type="number"]');
const nextButton = L("button.next");
const prevButton = L("button.prev");
const copyUrlButton = L("button.copy");
const infoSection = L(".info");
const copyCliButton = L("button.cli");

let question: string;
let seconds = 0;
let repeating = false;
let seed = window.location.pathname.slice(1); // slice off leading slash

const originalTitleText = document.title.trim();
const originalCopyUrlText = copyUrlButton.idx(0).textContent.trim();
const originalCopyCliText = copyCliButton.idx(0).textContent.trim();

const LOCAL_STORAGE_KEY = "MAGIC_HAT_NEXT_QUESTION";

function askQuestion() {
  document.title = `${originalTitleText} · ${seed}`;
  questionHeading.idx(0).textContent = question;
  copyUrlButton.idx(0).textContent = originalCopyUrlText;
  copyCliButton.idx(0).textContent = `${originalCopyCliText} ${seed}`;
  window.history.pushState(null, "", `/${seed}`);
  const [nextSeed] = magicHatNext(seed, repeating ? seconds : null);
  window.localStorage?.setItem(LOCAL_STORAGE_KEY, nextSeed);
}

// Question-back functionality is accomplished via native browser history API:
// (clicking the browser back button)
window.onpopstate = function () {
  seed = window.location.pathname.slice(1); // slice off leading slash
  if (seed.length && magicHatIsValidSeed(seed)) {
    [seed, question] = magicHatGo(seed, repeating ? seconds : null);
    window.history.replaceState(null, "", `/${seed}`);
    questionHeading.idx(0).textContent = question;
  }
};

// If provided seed is invalid, clear it to ensure a new random seed will be set:
if (seed.length && !magicHatIsValidSeed(seed)) {
  seed = "";
  window.history.replaceState(null, "", "/");
}

// If no see was provided (or seed was invalid), check whether a next-seed was
// previously persisted in localStorage; if so, load it. This will ensure
// duplicate questions are not shown on the same device (until broser data cleared)
if (seed === "") {
  seed = window.localStorage?.getItem(LOCAL_STORAGE_KEY) ?? "";
  // If persisted seed invalid, fall back to random seed
  // and delete from persistence:
  if (!magicHatIsValidSeed(seed)) {
    console.warn("Warning: encountered invalid seed in localStorage");
    seed = "";
    window.localStorage?.removeItem(LOCAL_STORAGE_KEY);
  }
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
  secondsInput.idx(0).value = seconds;
  repeatingCheckbox.idx(0).checked = true;
}

nextButton.on("click", () => {
  [seed, question] = magicHatNext(seed, repeating ? seconds : null);
  askQuestion();
});

prevButton.on("click", () => {
  [seed, question] = magicHatBack(seed, repeating ? seconds : null);
  askQuestion();
});

function onRepeatSettingChange() {
  const checked = repeatingCheckbox.idx(0).checked;
  if (checked) {
    seconds = parseInt(secondsInput.idx(0).value, 10);
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

repeatingCheckbox.on("change", onRepeatSettingChange);
secondsInput.on("change", () => {
  repeatingCheckbox.idx(0).checked = true;
  onRepeatSettingChange();
});

copyUrlButton.on("click", (ev: Event) => {
  ev.stopPropagation();
  L.copy(window.location.href);
  copyUrlButton.idx(0).textContent = "Copied!";
});

infoSection.on("click", () => {
  const button = copyCliButton.idx(0);
  L.copy(button.textContent.trim());
  button.textContent = "Copied!";
});
