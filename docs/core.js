"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.magicHatStopRepeat = exports.magicHatStartRepeat = exports.magicHatGo = exports.magicHatBack = exports.magicHatNext = exports.magicHatBegin = exports.magicHatIsValidSeed = exports.calcNonRepeatingStepSize = exports.factors = void 0;
var seedrandom_1 = __importDefault(require("seedrandom"));
var questions_1 = __importDefault(require("./questions"));
var words_1 = __importDefault(require("./words"));
function shuffle(arr) {
    var _a;
    arr = Array.from(arr); // copy input array
    var i = arr.length;
    var dart;
    while (i--) {
        dart = Math.floor((0, seedrandom_1.default)("")() * i);
        _a = [arr[dart], arr[i]], arr[i] = _a[0], arr[dart] = _a[1];
    }
    return arr;
}
function isPrime(n) {
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;
}
// Find two psuedo-random numbers which multiply to produce N:
function factors(n) {
    var sqrt = Math.sqrt(n);
    // Skew initial factors by a small deterministically random amount:
    var largeFac = Math.ceil(sqrt) + Math.floor((0, seedrandom_1.default)("".concat(n))() * (sqrt / 2));
    var smallFac = Math.floor(sqrt) - Math.floor((0, seedrandom_1.default)("".concat(largeFac))() * (sqrt / 2));
    while (largeFac * smallFac !== n) {
        // Fallback: try roughly even factors if random-skewed factors didn't work:
        if (smallFac < 1 || largeFac > n) {
            largeFac = Math.ceil(sqrt);
            smallFac = Math.floor(sqrt);
        }
        if (largeFac * smallFac < n) {
            largeFac++;
        }
        else {
            smallFac--;
        }
    }
    if (largeFac % 2) {
        return [smallFac, largeFac];
    }
    else {
        return [largeFac, smallFac];
    }
}
exports.factors = factors;
function calcNonRepeatingStepSize(n) {
    // Pick a step size which, when advancing through the questions list
    // circularily, will eventually hit all items with no duplicates:
    var step = 1;
    if (n > 2) {
        step = Math.floor(n / 2) + 1;
        while (!isPrime(step)) {
            step++;
        }
    }
    return step;
}
exports.calcNonRepeatingStepSize = calcNonRepeatingStepSize;
var words = shuffle(words_1.default);
var questionListStepSize = calcNonRepeatingStepSize(questions_1.default.length);
// Reverse-map word indices for performant lookup:
var wordIdxMap = new Map(words.map(function (word, idx) { return [word, idx]; }));
function randWord() {
    return words[Math.floor(Math.random() * words.length)];
}
function nextSeed(seed, seconds) {
    if (!seed) {
        seed = "".concat(randWord(), "-").concat(randWord()); // new session gets entirely random seed
    }
    // "Reversible" seed algorithm:
    // Next question is calculated as prior question index + questionListStepSize.
    // Prior question index was split into factors so we must parse these
    // and multiply them. Then we calculate the new question index and split it
    // back into another two factors, which are mapped to words. These words
    // become the new seed.
    var _a = seed.split("-"), prevWrdA = _a[0], prevWrdB = _a[1];
    var _b = [
        wordIdxMap.get(prevWrdA),
        wordIdxMap.get(prevWrdB),
    ], prevIdxA = _b[0], prevIdxB = _b[1];
    var prevQIdx = (prevIdxA * prevIdxB) % questions_1.default.length;
    var nextQIdx = prevQIdx + questionListStepSize;
    if (nextQIdx >= questions_1.default.length) {
        nextQIdx = nextQIdx - questions_1.default.length; // wrap around end of list
    }
    var _c = factors(nextQIdx), nextIdxA = _c[0], nextIdxB = _c[1];
    var _d = [words[nextIdxA], words[nextIdxB]], nextWrdA = _d[0], nextWrdB = _d[1];
    seed = "".concat(nextWrdA, "-").concat(nextWrdB);
    if (seconds) {
        seed = updateSeedSeconds(seed, seconds);
    }
    return seed;
}
function prevSeed(seed, seconds) {
    // "Reversible" seed algorithm:
    // Getting a prior seed from a subsequent seed (going "back" in the question
    // list) is simply the reverse of the operations described above in nextSeed.
    var _a = seed.split("-"), nextWrdA = _a[0], nextWrdB = _a[1];
    var _b = [
        wordIdxMap.get(nextWrdA),
        wordIdxMap.get(nextWrdB),
    ], nextIdxA = _b[0], nextIdxB = _b[1];
    var nextQIdx = (nextIdxA * nextIdxB) % questions_1.default.length;
    var prevQIdx = nextQIdx - questionListStepSize;
    if (prevQIdx < 0) {
        prevQIdx = prevQIdx + questions_1.default.length; // wrap around end of list
    }
    var _c = factors(prevQIdx), prevIdxA = _c[0], prevIdxB = _c[1];
    var _d = [words[prevIdxA], words[prevIdxB]], prevWrdA = _d[0], prevWrdB = _d[1];
    seed = "".concat(prevWrdA, "-").concat(prevWrdB);
    if (seconds) {
        seed = updateSeedSeconds(seed, seconds);
    }
    return seed;
}
function questionFromSeed(seed) {
    var _a = seed.split("-"), facA = _a[0], facB = _a[1];
    var _b = [words.indexOf(facA), words.indexOf(facB)], idxA = _b[0], idxB = _b[1];
    if (idxA === -1 || idxB === -1) {
        throw new Error("Invalid seed encountered");
    }
    return questions_1.default[(idxA * idxB) % questions_1.default.length];
}
function removeSeedSeconds(seed) {
    seed = seed.split("-").join("").slice(0, 8);
    return seed.slice(0, 4) + "-" + seed.slice(4, 8);
}
function updateSeedSeconds(seed, seconds) {
    var secQuotient = Math.floor(seconds / words.length);
    var secRemainder = seconds % words.length;
    seed = removeSeedSeconds(seed) + "-".concat(words[secRemainder]);
    if (secQuotient) {
        seed += "-".concat(words[secQuotient]);
    }
    return seed;
}
function parseSeedSeconds(seed) {
    seed = seed.split("-").join("").toLowerCase();
    var _a = [
        words.indexOf(seed.slice(8, 12)),
        words.indexOf(seed.slice(12, 16)),
    ], secRemainder = _a[0], secQuotient = _a[1];
    // omitting either part of seconds calc from seed is valid:
    if (secRemainder < 0) {
        secRemainder = 0;
    }
    else if (secQuotient < 0) {
        secQuotient = 0;
    }
    return secQuotient * words.length + secRemainder;
}
function magicHatIsValidSeed(seed) {
    seed = seed.split("-").join("").toLowerCase();
    return (seed.length >= 8 &&
        seed.length <= 16 &&
        [
            seed.slice(0, 4),
            seed.slice(4, 8),
            seed.slice(8, 12),
            seed.slice(12, 16),
        ].every(function (word) { return word === "" || words.includes(word); }));
}
exports.magicHatIsValidSeed = magicHatIsValidSeed;
function magicHatBegin(seed, handler) {
    seed = (seed === null || seed === void 0 ? void 0 : seed.length) ? seed : nextSeed(seed);
    var seconds = parseSeedSeconds(seed);
    if (seconds > 0) {
        return magicHatStartRepeat(seed, seconds, handler);
    }
    else {
        return [seed, questionFromSeed(seed), 0, 0]; // zero seconds -> no repeat
    }
}
exports.magicHatBegin = magicHatBegin;
function magicHatNext(seed, seconds) {
    seed = nextSeed(seed, seconds);
    return [seed, questionFromSeed(seed)];
}
exports.magicHatNext = magicHatNext;
function magicHatBack(seed, seconds) {
    seed = prevSeed(seed, seconds);
    return [seed, questionFromSeed(seed)];
}
exports.magicHatBack = magicHatBack;
function magicHatGo(seed, seconds) {
    if (seconds) {
        seed = updateSeedSeconds(seed, seconds);
    }
    else {
        seed = removeSeedSeconds(seed);
    }
    return [seed, questionFromSeed(seed)];
}
exports.magicHatGo = magicHatGo;
var repeatIntervalID = null;
function magicHatStartRepeat(seed, seconds, handler) {
    seed = updateSeedSeconds(seed, seconds);
    magicHatStopRepeat(seed);
    // Multi-session timer syncing
    // Works by aligning session timers against start of current day (UTC).
    // See code comments below for details.
    var currSecondsUTC = Math.floor(new Date().getTime() / 1000);
    var startOfDayUTC = Math.floor(new Date().setUTCHours(0, 0, 0, 0) / 1000);
    var offsetSeconds = (currSecondsUTC - startOfDayUTC) % seconds;
    var initialInterval = seconds - offsetSeconds;
    function setQuestionInterval() {
        seed = nextSeed(seed, seconds);
        handler(seed, questionFromSeed(seed));
        repeatIntervalID = setInterval(function () {
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
    }
    else {
        // Otherwise, trigger the first question after a shorter "initial interval"
        // intended to align all sessions against the start of current day (UTC).
        // Only after this first short interval will we set the normal question
        // interval to occur every N seconds:
        repeatIntervalID = setTimeout(setQuestionInterval, initialInterval * 1000);
    }
    return [seed, questionFromSeed(seed), seconds, initialInterval];
}
exports.magicHatStartRepeat = magicHatStartRepeat;
function magicHatStopRepeat(seed) {
    seed = seed ? removeSeedSeconds(seed) : null;
    if (repeatIntervalID) {
        clearInterval(repeatIntervalID);
        repeatIntervalID = null;
    }
    return [seed !== null && seed !== void 0 ? seed : nextSeed(), seed ? questionFromSeed(seed) : ""];
}
exports.magicHatStopRepeat = magicHatStopRepeat;
