import questions from "./questions";
import words from "./words";

// Find the closest two numbers which multiply to produce N:
function factors(n: number): [number, number] {
  const sqrt = Math.sqrt(n);
  let largeFac = Math.ceil(sqrt);
  let smallFac = Math.floor(sqrt);
  while (largeFac * smallFac !== n) {
    if (largeFac * smallFac < n) {
      largeFac++;
    } else {
      smallFac--;
    }
  }
  return [largeFac, smallFac];
}

// Pick a step size which, when advancing through the questions list
// circularily, will eventually hit all items with no duplicates:
const questionListStepSize = Math.floor(questions.length / 2) + 1;

// Reverse-map word indices for performant lookup:
const wordIdxMap = new Map(words.map((word, idx) => [word, idx]));

function randWord(): string {
  return words[Math.floor(Math.random() * words.length)];
}

function nextSeed(seed?: string | null, seconds?: number | null): string {
  if (!seed) {
    seed = `${randWord()}-${randWord()}`; // new session gets entirely random seed
  }

  // "Reversible" seed algorithm:
  // Next question is calculated as prior question index + questionListStepSize.
  // Prior question index was split into factors so we must parse these
  // and multiply them. Then we calculate the new question index and split it
  // back into another two factors, which are mapped to words. These words
  // become the new seed.
  const [prevWrdA, prevWrdB] = seed.split("-");
  const [prevIdxA, prevIdxB] = [
    wordIdxMap.get(prevWrdA),
    wordIdxMap.get(prevWrdB),
  ] as [number, number];
  const prevQIdx = (prevIdxA * prevIdxB) % questions.length;
  let nextQIdx = prevQIdx + questionListStepSize;
  if (nextQIdx >= questions.length) {
    nextQIdx = nextQIdx - questions.length; // wrap around end of list
  }
  const [nextIdxA, nextIdxB] = factors(nextQIdx);
  const [nextWrdA, nextWrdB] = [words[nextIdxA], words[nextIdxB]];

  seed = `${nextWrdA}-${nextWrdB}`;

  if (seconds) {
    seed = updateSeedSeconds(seed, seconds);
  }

  return seed;
}

function prevSeed(seed: string, seconds?: number | null): string {
  // "Reversible" seed algorithm:
  // Getting a prior seed from a subsequent seed (going "back" in the question
  // list) is simply the reverse of the operations described above in nextSeed.
  const [nextWrdA, nextWrdB] = seed.split("-");
  const [nextIdxA, nextIdxB] = [
    wordIdxMap.get(nextWrdA),
    wordIdxMap.get(nextWrdB),
  ] as [number, number];
  const nextQIdx = (nextIdxA * nextIdxB) % questions.length;
  let prevQIdx = nextQIdx - questionListStepSize;
  if (prevQIdx < 0) {
    prevQIdx = prevQIdx + questions.length; // wrap around end of list
  }
  const [prevIdxA, prevIdxB] = factors(prevQIdx);
  const [prevWrdA, prevWrdB] = [words[prevIdxA], words[prevIdxB]];

  seed = `${prevWrdA}-${prevWrdB}`;

  if (seconds) {
    seed = updateSeedSeconds(seed, seconds);
  }

  return seed;
}

function questionFromSeed(seed: string): string {
  const [facA, facB] = seed.split("-");
  const [idxA, idxB] = [words.indexOf(facA), words.indexOf(facB)];
  if (idxA === -1 || idxB === -1) {
    throw new Error("Invalid seed encountered");
  }
  return questions[(idxA * idxB) % questions.length];
}

function removeSeedSeconds(seed: string): string {
  seed = seed.split("-").join("").slice(0, 8);
  return seed.slice(0, 4) + "-" + seed.slice(4, 8);
}

function updateSeedSeconds(seed: string, seconds: number): string {
  const secQuotient = Math.floor(seconds / words.length);
  const secRemainder = seconds % words.length;
  seed = removeSeedSeconds(seed) + `-${words[secRemainder]}`;
  if (secQuotient) {
    seed += `-${words[secQuotient]}`;
  }
  return seed;
}

function parseSeedSeconds(seed: string): number {
  seed = seed.split("-").join("").toLowerCase();

  let [secRemainder, secQuotient] = [
    words.indexOf(seed.slice(8, 12)),
    words.indexOf(seed.slice(12, 16)),
  ];

  // omitting either part of seconds calc from seed is valid:
  if (secRemainder < 0) {
    secRemainder = 0;
  } else if (secQuotient < 0) {
    secQuotient = 0;
  }

  return secQuotient * words.length + secRemainder;
}

export function magicHatIsValidSeed(seed: string): boolean {
  seed = seed.split("-").join("").toLowerCase();
  return (
    seed.length >= 8 &&
    seed.length <= 16 &&
    [
      seed.slice(0, 4),
      seed.slice(4, 8),
      seed.slice(8, 12),
      seed.slice(12, 16),
    ].every((word) => word === "" || words.includes(word))
  );
}

export function magicHatBegin(
  seed: string | null,
  handler: (seed: string, question: string) => void
): [string, string, number, number] {
  seed = seed?.length ? seed : nextSeed(seed);

  const seconds = parseSeedSeconds(seed);

  if (seconds > 0) {
    return magicHatStartRepeat(seed, seconds, handler);
  } else {
    return [seed, questionFromSeed(seed), 0, 0]; // zero seconds -> no repeat
  }
}

export function magicHatNext(
  seed: string,
  seconds?: number | null
): [string, string] {
  seed = nextSeed(seed, seconds);
  return [seed, questionFromSeed(seed)];
}

export function magicHatBack(
  seed: string,
  seconds?: number | null
): [string, string] {
  seed = prevSeed(seed, seconds);
  return [seed, questionFromSeed(seed)];
}

export function magicHatGo(
  seed: string,
  seconds?: number | null
): [string, string] {
  if (seconds) {
    seed = updateSeedSeconds(seed, seconds);
  } else {
    seed = removeSeedSeconds(seed);
  }
  return [seed, questionFromSeed(seed)];
}

type Timer = ReturnType<typeof setInterval>;
let repeatIntervalID: Timer | null = null;

export function magicHatStartRepeat(
  seed: string,
  seconds: number,
  handler: (seed: string, question: string) => void
): [string, string, number, number] {
  seed = updateSeedSeconds(seed, seconds);

  magicHatStopRepeat(seed);

  // Multi-session timer syncing
  // Works by aligning session timers against start of current day (UTC).
  // See code comments below for details.
  const currSecondsUTC = Math.floor(new Date().getTime() / 1000);
  const startOfDayUTC = Math.floor(new Date().setUTCHours(0, 0, 0, 0) / 1000);
  const offsetSeconds = (currSecondsUTC - startOfDayUTC) % seconds;
  const initialInterval = seconds - offsetSeconds;

  function setQuestionInterval() {
    seed = nextSeed(seed, seconds);
    handler(seed, questionFromSeed(seed));
    repeatIntervalID = setInterval(() => {
      seed = nextSeed(seed, seconds);
      handler(seed, questionFromSeed(seed));
    }, seconds * 1000);
  }

  if (initialInterval === 0) {
    // Handle case where offset triggers next question exactly on the momentary
    // boundary between questions; in this case we should manually advance the
    // question by one and set the interval as normal:
    seed = nextSeed(seed, seconds);
    handler(seed, questionFromSeed(seed));
    setQuestionInterval();
  } else {
    // Otherwise, trigger the first question after a shorter "initial interval"
    // intended to align all sessions against the start of current day (UTC).
    // Only after this first short interval will we set the normal question
    // interval to occur every N seconds:
    repeatIntervalID = setTimeout(setQuestionInterval, initialInterval * 1000);
  }

  return [seed, questionFromSeed(seed), seconds, initialInterval];
}

export function magicHatStopRepeat(seed?: string | null): [string, string] {
  seed = seed ? removeSeedSeconds(seed) : null;

  if (repeatIntervalID) {
    clearInterval(repeatIntervalID);
    repeatIntervalID = null;
  }

  return [seed ?? nextSeed(), seed ? questionFromSeed(seed) : ""];
}
