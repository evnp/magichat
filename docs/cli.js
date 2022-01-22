#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_1 = __importDefault(require("readline"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var os_1 = __importDefault(require("os"));
var core_1 = require("./core");
var rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function prompt(msg) {
    return new Promise(function (resolve) { return rl.question("".concat(msg, "\n"), resolve); });
}
var Action;
(function (Action) {
    Action["next"] = "next";
    Action["back"] = "back";
    Action["go"] = "go";
    Action["start"] = "start";
    Action["pause"] = "pause";
    Action["help"] = "help";
    Action["invalid"] = "invalid";
})(Action || (Action = {}));
function parseAction(action) {
    var _a;
    if (action === "") {
        // convenience -- accept ENTER press for next question
        return [Action.next, null];
    }
    var match = action.match(/^s?(?:tart)? ?(\d+)$/);
    if (match) {
        var seconds = parseInt(match[1], 10);
        return [Action.start, seconds];
    }
    if (Object.values(Action).includes(action)) {
        return [action, null];
    }
    if ((0, core_1.magicHatIsValidSeed)(action)) {
        return [Action.go, action];
    }
    return [
        (_a = {
            n: Action.next,
            b: Action.back,
            s: Action.start,
            p: Action.pause,
            h: Action.help,
        }[action]) !== null && _a !== void 0 ? _a : Action.invalid,
        null,
    ];
}
function printHelp() {
    console.log("\n\nMagic Hat Usage:\n");
    console.log("$ magichat                --> start a new session");
    console.log("$ magichat ques-tion-name --> join an existing session\n");
    console.log("Once magichat starts, these actions are available (type and then press ENTER):\n");
    printInfo();
}
function printVersion() {
    console.log("\nMagic Hat 🎩 0.0.7\n");
    // need to implement method of bumping this automatically
}
function printInfo() {
    console.log("> ENTER           --> go to next question");
    console.log("> next            --> go to next question (alias: 'n')");
    console.log("> back            --> go back to the previous question (alias: 'b')");
    console.log("> ques-tion-name  --> go to a specific question");
    console.log("> start           --> new question every 60 seconds (alias: 's')");
    console.log("> 123 (N seconds) --> new question every N seconds");
    console.log("> pause           --> stop getting a new question every N seconds (alias: 'p')");
    console.log("> help            --> see this information again (alias: 'h')");
    console.log("Press ctrl+C to quit.\n");
}
function main() {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        function askQuestion(_a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.repeat, repeat = _c === void 0 ? null : _c;
            if (typeof repeat === "boolean") {
                repeating = repeat;
            }
            console.log("\n    Share: https://magichat.e2.gg/".concat(seed) +
                "\n         $ magichat ".concat(seed, "\n\n"));
            console.log("[ Question \"".concat(seed, "\" ] ").concat(question, "\n"));
            var nextSeed = (0, core_1.magicHatNext)(seed, repeating ? seconds : null)[0];
            // write asynchronously - this can happen in background and not block:
            fs_1.default.writeFile(nextSeedFilePath, nextSeed, function (err) {
                if (err && !warnedNextSeedFileError) {
                    warnedNextSeedFileError = true;
                    console.warn("\nWarning: Couldn't persist next question, you may encounter duplicates.");
                    console.warn("Please make sure you have correct permissions to access directories in this file path:");
                    console.warn(nextSeedFilePath + "\n");
                }
            });
            if (repeat === true) {
                console.log("(the magic hat will ask a new question " +
                    "every ".concat(seconds, " seconds; enter \"pause\" to cancel)"));
                if (initialInterval !== seconds) {
                    console.log("(time until first question will be only ".concat(initialInterval, " seconds in order to synchronize sessions)"));
                }
                console.log(""); // insert newline
            }
            if (repeat === false) {
                console.log("(the magic hat will no longer ask a new question " +
                    "every ".concat(seconds, " seconds; enter \"start\" to resume)\n"));
            }
        }
        var question, action, actionValue, defaultSeconds, seconds, initialInterval, repeating, NEXT_SEED_FILE_NAME, nextSeedFilePath, warnedNextSeedFileError, _b, _node, _filename, seed, _c;
        var _d, _e, _f, _g, _h, _j, _k;
        return __generator(this, function (_l) {
            switch (_l.label) {
                case 0:
                    defaultSeconds = 60;
                    seconds = defaultSeconds;
                    repeating = false;
                    NEXT_SEED_FILE_NAME = "magic-hat-next-question.txt";
                    nextSeedFilePath = path_1.default.join(os_1.default.tmpdir(), NEXT_SEED_FILE_NAME);
                    warnedNextSeedFileError = false;
                    printVersion();
                    if (process.argv.some(function (arg) { return /^--?h(elp)?$/i.test(arg); })) {
                        printHelp();
                        process.exit(0);
                    }
                    else {
                        printInfo();
                    }
                    _b = process.argv, _node = _b[0], _filename = _b[1], seed = _b[2];
                    if (seed && !(0, core_1.magicHatIsValidSeed)(seed)) {
                        console.warn("The magic hat doesn't understand your magic words. Could you please ask for them again? They should all have four letters, and there should be four of them.");
                        process.exit(1);
                    }
                    // If no see was provided, check whether a next-seed was previously
                    // persisted in localStorage; if so, load it. This will ensure duplicate
                    // questions are not shown on the same device (until tmp files cleared):
                    if (!seed) {
                        seed = fs_1.default.readFileSync(nextSeedFilePath).toString();
                    }
                    _d = (0, core_1.magicHatBegin)(seed, function () {
                        var _a;
                        _a = (0, core_1.magicHatNext)(seed, seconds), seed = _a[0], question = _a[1];
                        askQuestion();
                    }), seed = _d[0], question = _d[1], seconds = _d[2], initialInterval = _d[3];
                    if (seconds > 0) {
                        askQuestion({ repeat: true });
                    }
                    else {
                        askQuestion();
                    }
                    _l.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 3];
                    _c = parseAction;
                    return [4 /*yield*/, prompt("🎩")];
                case 2:
                    // main game loop
                    _e = _c.apply(void 0, [_l.sent()]), action = _e[0], actionValue = _e[1];
                    switch (action) {
                        case Action.next: {
                            _f = (0, core_1.magicHatNext)(seed, repeating ? seconds : null), seed = _f[0], question = _f[1];
                            askQuestion();
                            break;
                        }
                        case Action.back: {
                            _g = (0, core_1.magicHatBack)(seed, repeating ? seconds : null), seed = _g[0], question = _g[1];
                            askQuestion();
                            break;
                        }
                        case Action.go: {
                            _h = (0, core_1.magicHatGo)(actionValue, repeating ? seconds : null), seed = _h[0], question = _h[1];
                            askQuestion();
                            break;
                        }
                        case Action.start: {
                            seconds = (_a = actionValue) !== null && _a !== void 0 ? _a : defaultSeconds;
                            _j = (0, core_1.magicHatStartRepeat)(seed, seconds, function () {
                                var _a;
                                _a = (0, core_1.magicHatNext)(seed, seconds), seed = _a[0], question = _a[1];
                                askQuestion();
                            }), seed = _j[0], question = _j[1], seconds = _j[2], initialInterval = _j[3];
                            askQuestion({ repeat: true });
                            break;
                        }
                        case Action.pause: {
                            _k = (0, core_1.magicHatStopRepeat)(seed), seed = _k[0], question = _k[1];
                            askQuestion({ repeat: false });
                            break;
                        }
                        case Action.invalid: {
                            printHelp();
                            console.log("\nThe magic hat didn't quite get that. " +
                                "Could you please try something else?\n");
                            break;
                        }
                    }
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// teardown readline prior to exit in all circumstances:
for (var _i = 0, _a = [
    "exit",
    "SIGINT",
    "SIGUSR1",
    "SIGUSR2",
    "uncaughtException",
    "SIGTERM",
]; _i < _a.length; _i++) {
    var event_1 = _a[_i];
    process.on(event_1, function () {
        (0, core_1.magicHatStopRepeat)();
        console.log("Bye!");
        rl.close();
    });
}
if (require.main === module) {
    main();
}
