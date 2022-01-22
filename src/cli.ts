#!/usr/bin/env node

import readline from "readline";
import path from "path";
import fs from "fs";
import os from "os";

import {
  magicHatBegin,
  magicHatNext,
  magicHatBack,
  magicHatGo,
  magicHatStartRepeat,
  magicHatStopRepeat,
  magicHatIsValidSeed,
} from "./core";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function prompt(msg: string): Promise<string> {
  return new Promise((resolve) => rl.question(`${msg}\n`, resolve));
}

enum Action {
  next = "next", // show next question
  back = "back", // show previous question
  go = "go", // go to specific question
  start = "start", // trigger auto-asking every N seconds
  pause = "pause", // stop auto-asking
  help = "help",
  invalid = "invalid", // indicates invalid input
}

function parseAction(action: string): [Action, string | number | null] {
  if (action === "") {
    // convenience -- accept ENTER press for next question
    return [Action.next, null];
  }
  const match = action.match(/^s?(?:tart)? ?(\d+)$/);
  if (match) {
    const seconds = parseInt(match[1], 10);
    return [Action.start, seconds];
  }
  if (Object.values(Action).includes(action as Action)) {
    return [action as Action, null];
  }
  if (magicHatIsValidSeed(action)) {
    return [Action.go, action];
  }
  return [
    {
      n: Action.next,
      b: Action.back,
      s: Action.start,
      p: Action.pause,
      h: Action.help,
    }[action] ?? Action.invalid,
    null,
  ];
}

function printHelp(): void {
  console.log("\n\nMagic Hat Usage:\n");
  console.log("$ magichat                --> start a new session");
  console.log("$ magichat ques-tion-name --> join an existing session\n");
  console.log(
    "Once magichat starts, these actions are available (type and then press ENTER):\n"
  );
  printInfo();
}

function printVersion(): void {
  console.log("\nMagic Hat 🎩 0.0.7\n");
  // need to implement method of bumping this automatically
}

function printInfo(): void {
  console.log("> ENTER           --> go to next question");
  console.log("> next            --> go to next question (alias: 'n')");
  console.log(
    "> back            --> go back to the previous question (alias: 'b')"
  );
  console.log("> ques-tion-name  --> go to a specific question");
  console.log(
    "> start           --> new question every 60 seconds (alias: 's')"
  );
  console.log("> 123 (N seconds) --> new question every N seconds");
  console.log(
    "> pause           --> stop getting a new question every N seconds (alias: 'p')"
  );
  console.log("> help            --> see this information again (alias: 'h')");
  console.log("Press ctrl+C to quit.\n");
}

async function main() {
  let question: string;
  let action;
  let actionValue;
  const defaultSeconds = 60; // default to 1 minute ask repeat duration:
  let seconds = defaultSeconds;
  let initialInterval: number;
  let repeating = false;

  const NEXT_SEED_FILE_NAME = "magic-hat-next-question.txt";
  const nextSeedFilePath = path.join(os.tmpdir(), NEXT_SEED_FILE_NAME);
  let warnedNextSeedFileError = false;

  printVersion();

  if (process.argv.some((arg) => /^--?h(elp)?$/i.test(arg))) {
    printHelp();
    process.exit(0);
  } else {
    printInfo();
  }

  let [_node, _filename, seed] = process.argv;

  function askQuestion({
    repeat = null,
  }: { repeat?: boolean | null } = {}): void {
    if (typeof repeat === "boolean") {
      repeating = repeat;
    }

    console.log(
      `\n    Share: https://magichat.e2.gg/${seed}` +
        `\n         $ magichat ${seed}\n\n`
    );
    console.log(`[ Question "${seed}" ] ${question}\n`);

    const [nextSeed] = magicHatNext(seed, repeating ? seconds : null);

    // write asynchronously - this can happen in background and not block:
    fs.writeFile(nextSeedFilePath, nextSeed, (err) => {
      if (err && !warnedNextSeedFileError) {
        warnedNextSeedFileError = true;
        console.warn(
          "\nWarning: Couldn't persist next question, you may encounter duplicates."
        );
        console.warn(
          "Please make sure you have correct permissions to access directories in this file path:"
        );
        console.warn(nextSeedFilePath + "\n");
      }
    });

    if (repeat === true) {
      console.log(
        "(the magic hat will ask a new question " +
          `every ${seconds} seconds; enter "pause" to cancel)`
      );
      if (initialInterval !== seconds) {
        console.log(
          `(time until first question will be only ${initialInterval} seconds in order to synchronize sessions)`
        );
      }
      console.log(""); // insert newline
    }

    if (repeat === false) {
      console.log(
        "(the magic hat will no longer ask a new question " +
          `every ${seconds} seconds; enter "start" to resume)\n`
      );
    }
  }

  if (seed && !magicHatIsValidSeed(seed)) {
    console.warn(
      "The magic hat doesn't understand your magic words. Could you please ask for them again? They should all have four letters, and there should be four of them."
    );
    process.exit(1);
  }

  // If no see was provided, check whether a next-seed was previously
  // persisted in localStorage; if so, load it. This will ensure duplicate
  // questions are not shown on the same device (until tmp files cleared):
  if (!seed) {
    seed = fs.readFileSync(nextSeedFilePath).toString();
  }

  [seed, question, seconds, initialInterval] = magicHatBegin(seed, () => {
    [seed, question] = magicHatNext(seed, seconds);
    askQuestion();
  });

  if (seconds > 0) {
    askQuestion({ repeat: true });
  } else {
    askQuestion();
  }

  while (true) {
    // main game loop
    [action, actionValue] = parseAction(await prompt("🎩"));
    switch (action) {
      case Action.next: {
        [seed, question] = magicHatNext(seed, repeating ? seconds : null);
        askQuestion();
        break;
      }
      case Action.back: {
        [seed, question] = magicHatBack(seed, repeating ? seconds : null);
        askQuestion();
        break;
      }
      case Action.go: {
        [seed, question] = magicHatGo(
          actionValue as string,
          repeating ? seconds : null
        );
        askQuestion();
        break;
      }
      case Action.start: {
        seconds = (actionValue as number) ?? defaultSeconds;
        [seed, question, seconds, initialInterval] = magicHatStartRepeat(
          seed,
          seconds,
          () => {
            [seed, question] = magicHatNext(seed, seconds);
            askQuestion();
          }
        );
        askQuestion({ repeat: true });
        break;
      }
      case Action.pause: {
        [seed, question] = magicHatStopRepeat(seed);
        askQuestion({ repeat: false });
        break;
      }
      case Action.invalid: {
        printHelp();
        console.log(
          "\nThe magic hat didn't quite get that. " +
            "Could you please try something else?\n"
        );
        break;
      }
    }
  }
}

// teardown readline prior to exit in all circumstances:
for (const event of [
  "exit",
  "SIGINT", // handles ctrl+C
  "SIGUSR1",
  "SIGUSR2",
  "uncaughtException",
  "SIGTERM",
]) {
  process.on(event, () => {
    magicHatStopRepeat();
    console.log("Bye!");
    rl.close();
  });
}

if (require.main === module) {
  main();
}
