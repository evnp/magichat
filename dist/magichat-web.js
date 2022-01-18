"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var L_1 = __importDefault(require("L"));
var magichat_1 = require("./magichat");
var elements = {
    question: (0, L_1.default)("h1"),
    repeating: (0, L_1.default)('input[type="checkbox"]'),
    seconds: (0, L_1.default)('input[type="number"]'),
    next: (0, L_1.default)("button.next"),
    copy: (0, L_1.default)("button.copy"),
};
var question;
var seconds = 0;
var repeating = false;
var seed = window.location.pathname.slice(1); // slice off leading slash
var originalCopyText = elements.copy.idx(0).textContent;
function askQuestion() {
    elements.question.idx(0).textContent = question;
    elements.copy.idx(0).textContent = originalCopyText;
    window.history.pushState(null, "", "/".concat(seed));
}
// Question-back functionality is accomplished via native browser history API:
// (clicking the browser back button)
window.onpopstate = function () {
    var _a;
    var prevSeed = seed;
    seed = window.location.pathname.slice(1); // slice off leading slash
    if (seed.length && (0, magichat_1.magicHatIsValidSeed)(seed)) {
        _a = (0, magichat_1.magicHatGo)(seed, prevSeed, repeating ? seconds : null), seed = _a[0], question = _a[1];
        window.history.replaceState(null, "", "/".concat(seed));
        elements.question.idx(0).textContent = question;
    }
};
if (seed.length && !(0, magichat_1.magicHatIsValidSeed)(seed)) {
    seed = "";
    window.history.replaceState(null, "", "/");
}
// Select initial question and generate seed if necessary:
_a = (0, magichat_1.magicHatBegin)(seed, function () {
    var _a;
    _a = (0, magichat_1.magicHatNext)(seed, seconds), seed = _a[0], question = _a[1];
    askQuestion();
}), seed = _a[0], question = _a[1], seconds = _a[2];
// Ask initial question:
askQuestion();
if (seconds > 0) {
    repeating = true;
    elements.seconds.idx(0).value = seconds;
    elements.repeating.idx(0).checked = true;
}
elements.next.on("click", function () {
    var _a;
    _a = (0, magichat_1.magicHatNext)(seed, repeating ? seconds : null), seed = _a[0], question = _a[1];
    askQuestion();
});
function onRepeatSettingChange() {
    var _a, _b;
    var checked = elements.repeating.idx(0).checked;
    if (checked) {
        seconds = parseInt(elements.seconds.idx(0).value, 10);
        _a = (0, magichat_1.magicHatStartRepeat)(seed, seconds, function () {
            var _a;
            _a = (0, magichat_1.magicHatNext)(seed, seconds), seed = _a[0], question = _a[1];
            askQuestion();
        }), seed = _a[0], question = _a[1], seconds = _a[2];
        askQuestion();
        repeating = true;
    }
    else if (!checked) {
        _b = (0, magichat_1.magicHatStopRepeat)(seed), seed = _b[0], question = _b[1];
        askQuestion();
        repeating = false;
    }
}
elements.repeating.on("change", onRepeatSettingChange);
elements.seconds.on("change", function () {
    elements.repeating.idx(0).checked = true;
    onRepeatSettingChange();
});
elements.copy.on("click", function () {
    L_1.default.copy(window.location.href);
    elements.copy.idx(0).textContent = "Copied!";
});
