import seedrandom from "seedrandom";

import questions from "./questions";
import words from "./words";

const seedHistory: Map<string, string | null> = new Map();

function newSeed(seed?: string | null, seconds?: number | null): string {
  const prevSeed = seed;
  const baseSeed = seed && removeSeedSeconds(seed);
  const reversedSeed = baseSeed && Array.from(baseSeed).reverse().join("");
  let nextSeed = `${randWord(baseSeed)}-${randWord(reversedSeed)}`;

  if (seconds) {
    nextSeed = updateSeedSeconds(nextSeed, seconds);
  }

  // Maintain seed history for back/forth question navigation:
  // note: omit seconds from seed history so that mechanisms may operate independently
  seedHistory.set(
    removeSeedSeconds(nextSeed),
    prevSeed ? removeSeedSeconds(prevSeed) : null
  );

  return nextSeed;
}

function randWord(seed?: string | null): string {
  const rng = seed ? seedrandom(seed) : Math.random;
  return words[Math.floor(rng() * words.length)];
}

function randQuestion(seed: string): string {
  const rng = seedrandom(removeSeedSeconds(seed));
  return questions[Math.floor(rng() * questions.length)];
}

function removeSeedSeconds(seed: string): string {
  seed = seed.split("-").join("").slice(0, 8);
  return seed.slice(0, 4) + "-" + seed.slice(4, 8);
}

function updateSeedSeconds(seed: string, seconds: number): string {
  const secQuotient = Math.floor(seconds / words.length);
  const secRemainder = seconds % 100;
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
): [string, string, number] {
  seed = seed?.length ? seed : newSeed(seed);

  const seconds = parseSeedSeconds(seed);

  if (seconds > 0) {
    return magicHatStartRepeat(seed, seconds, handler);
  } else {
    return [seed, randQuestion(seed), 0]; // zero seconds -> no repeat
  }
}

export function magicHatNext(
  seed: string,
  seconds?: number | null
): [string, string] {
  seed = newSeed(seed, seconds);
  return [seed, randQuestion(seed)];
}

export function magicHatBack(
  seed: string,
  seconds?: number | null
): [string, string] {
  seed = (seed && seedHistory.get(removeSeedSeconds(seed))) ?? seed;
  if (seconds) {
    seed = updateSeedSeconds(seed, seconds);
  }
  return [seed, randQuestion(seed)];
}

export function magicHatGo(
  seed: string,
  prevSeed: string,
  seconds?: number | null
): [string, string] {
  seedHistory.set(removeSeedSeconds(seed), removeSeedSeconds(prevSeed));
  if (seconds) {
    seed = updateSeedSeconds(seed, seconds);
  } else {
    seed = removeSeedSeconds(seed);
  }
  return [seed, randQuestion(seed)];
}

type Timer = ReturnType<typeof setInterval>;
let repeatIntervalID: Timer | null = null;

export function magicHatStartRepeat(
  seed: string,
  seconds: number,
  handler: (seed: string, question: string) => void
): [string, string, number] {
  seed = updateSeedSeconds(seed, seconds);

  magicHatStopRepeat(seed);

  repeatIntervalID = setInterval(() => {
    seed = newSeed(seed, seconds);
    handler(seed, randQuestion(seed));
  }, seconds * 1000);

  return [seed, randQuestion(seed), seconds];
}

export function magicHatStopRepeat(seed?: string | null): [string, string] {
  seed = seed ? removeSeedSeconds(seed) : null;

  if (repeatIntervalID) {
    clearInterval(repeatIntervalID);
    repeatIntervalID = null;
  }

  return [seed ?? newSeed(), seed ? randQuestion(seed) : ""];
}
