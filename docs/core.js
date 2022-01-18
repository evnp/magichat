"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.magicHatStopRepeat = exports.magicHatStartRepeat = exports.magicHatGo = exports.magicHatBack = exports.magicHatNext = exports.magicHatBegin = exports.magicHatIsValidSeed = void 0;
var seedrandom_1 = __importDefault(require("seedrandom"));
var questions_1 = __importDefault(require("./questions"));
var words_1 = __importDefault(require("./words"));
var seedHistory = new Map();
function newSeed(seed, seconds) {
    var prevSeed = seed;
    var baseSeed = seed && removeSeedSeconds(seed);
    var reversedSeed = baseSeed && Array.from(baseSeed).reverse().join("");
    var nextSeed = "".concat(randWord(baseSeed), "-").concat(randWord(reversedSeed));
    if (seconds) {
        nextSeed = updateSeedSeconds(nextSeed, seconds);
    }
    // Maintain seed history for back/forth question navigation:
    // note: omit seconds from seed history so that mechanisms may operate independently
    seedHistory.set(removeSeedSeconds(nextSeed), prevSeed ? removeSeedSeconds(prevSeed) : null);
    return nextSeed;
}
function randWord(seed) {
    var rng = seed ? (0, seedrandom_1.default)(seed) : Math.random;
    return words_1.default[Math.floor(rng() * words_1.default.length)];
}
function randQuestion(seed) {
    var rng = (0, seedrandom_1.default)(removeSeedSeconds(seed));
    return questions_1.default[Math.floor(rng() * questions_1.default.length)];
}
function removeSeedSeconds(seed) {
    seed = seed.split("-").join("").slice(0, 8);
    return seed.slice(0, 4) + "-" + seed.slice(4, 8);
}
function updateSeedSeconds(seed, seconds) {
    var secQuotient = Math.floor(seconds / words_1.default.length);
    var secRemainder = seconds % 100;
    seed = removeSeedSeconds(seed) + "-".concat(words_1.default[secRemainder]);
    if (secQuotient) {
        seed += "-".concat(words_1.default[secQuotient]);
    }
    return seed;
}
function parseSeedSeconds(seed) {
    seed = seed.split("-").join("").toLowerCase();
    var _a = [
        words_1.default.indexOf(seed.slice(8, 12)),
        words_1.default.indexOf(seed.slice(12, 16)),
    ], secRemainder = _a[0], secQuotient = _a[1];
    // omitting either part of seconds calc from seed is valid:
    if (secRemainder < 0) {
        secRemainder = 0;
    }
    else if (secQuotient < 0) {
        secQuotient = 0;
    }
    return secQuotient * words_1.default.length + secRemainder;
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
        ].every(function (word) { return word === "" || words_1.default.includes(word); }));
}
exports.magicHatIsValidSeed = magicHatIsValidSeed;
function magicHatBegin(seed, handler) {
    seed = (seed === null || seed === void 0 ? void 0 : seed.length) ? seed : newSeed(seed);
    var seconds = parseSeedSeconds(seed);
    if (seconds > 0) {
        return magicHatStartRepeat(seed, seconds, handler);
    }
    else {
        return [seed, randQuestion(seed), 0]; // zero seconds -> no repeat
    }
}
exports.magicHatBegin = magicHatBegin;
function magicHatNext(seed, seconds) {
    seed = newSeed(seed, seconds);
    return [seed, randQuestion(seed)];
}
exports.magicHatNext = magicHatNext;
function magicHatBack(seed, seconds) {
    var _a;
    seed = (_a = (seed && seedHistory.get(removeSeedSeconds(seed)))) !== null && _a !== void 0 ? _a : seed;
    if (seconds) {
        seed = updateSeedSeconds(seed, seconds);
    }
    return [seed, randQuestion(seed)];
}
exports.magicHatBack = magicHatBack;
function magicHatGo(seed, prevSeed, seconds) {
    seedHistory.set(removeSeedSeconds(seed), removeSeedSeconds(prevSeed));
    if (seconds) {
        seed = updateSeedSeconds(seed, seconds);
    }
    else {
        seed = removeSeedSeconds(seed);
    }
    return [seed, randQuestion(seed)];
}
exports.magicHatGo = magicHatGo;
var repeatIntervalID = null;
function magicHatStartRepeat(seed, seconds, handler) {
    seed = updateSeedSeconds(seed, seconds);
    magicHatStopRepeat(seed);
    repeatIntervalID = setInterval(function () {
        seed = newSeed(seed, seconds);
        handler(seed, randQuestion(seed));
    }, seconds * 1000);
    return [seed, randQuestion(seed), seconds];
}
exports.magicHatStartRepeat = magicHatStartRepeat;
function magicHatStopRepeat(seed) {
    seed = seed ? removeSeedSeconds(seed) : null;
    if (repeatIntervalID) {
        clearInterval(repeatIntervalID);
        repeatIntervalID = null;
    }
    return [seed !== null && seed !== void 0 ? seed : newSeed(), seed ? randQuestion(seed) : ""];
}
exports.magicHatStopRepeat = magicHatStopRepeat;
