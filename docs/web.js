"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
var _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var L_1 = __importDefault(require("L"));
var core_1 = require("./core");
var questionHeading = (0, L_1.default)("h1");
var repeatingCheckbox = (0, L_1.default)('input[type="checkbox"]');
var secondsInput = (0, L_1.default)('input[type="number"]');
var nextButton = (0, L_1.default)("button.next");
var prevButton = (0, L_1.default)("button.prev");
var copyUrlButton = (0, L_1.default)("button.copy");
var infoSection = (0, L_1.default)(".info");
var copyCliButton = (0, L_1.default)("button.cli");
var question;
var seconds = 0;
var repeating = false;
var seed = window.location.pathname.slice(1); // slice off leading slash
var originalTitleText = document.title.trim();
var originalCopyUrlText = copyUrlButton.idx(0).textContent.trim();
var originalCopyCliText = copyCliButton.idx(0).textContent.trim();
var LOCAL_STORAGE_KEY = "MAGIC_HAT_NEXT_QUESTION";
function askQuestion() {
    var _a;
    document.title = "".concat(originalTitleText, " \u00B7 ").concat(seed);
    questionHeading.idx(0).textContent = question;
    copyUrlButton.idx(0).textContent = originalCopyUrlText;
    copyCliButton.idx(0).textContent = "".concat(originalCopyCliText, " ").concat(seed);
    window.history.pushState(null, "", "/".concat(seed));
    var nextSeed = (0, core_1.magicHatNext)(seed, repeating ? seconds : null)[0];
    (_a = window.localStorage) === null || _a === void 0 ? void 0 : _a.setItem(LOCAL_STORAGE_KEY, nextSeed);
}
// Question-back functionality is accomplished via native browser history API:
// (clicking the browser back button)
window.onpopstate = function () {
    var _a;
    seed = window.location.pathname.slice(1); // slice off leading slash
    if (seed.length && (0, core_1.magicHatIsValidSeed)(seed)) {
        _a = (0, core_1.magicHatGo)(seed, repeating ? seconds : null), seed = _a[0], question = _a[1];
        window.history.replaceState(null, "", "/".concat(seed));
        questionHeading.idx(0).textContent = question;
    }
};
// If provided seed is invalid, clear it to ensure a new random seed will be set:
if (seed.length && !(0, core_1.magicHatIsValidSeed)(seed)) {
    seed = "";
    window.history.replaceState(null, "", "/");
}
// If no see was provided (or seed was invalid), check whether a next-seed was
// previously persisted in localStorage; if so, load it. This will ensure
// duplicate questions are not shown on the same device (until broser data cleared)
if (seed === "") {
    seed = (_c = (_b = window.localStorage) === null || _b === void 0 ? void 0 : _b.getItem(LOCAL_STORAGE_KEY)) !== null && _c !== void 0 ? _c : "";
}
// Select initial question and generate seed if necessary:
_a = (0, core_1.magicHatBegin)(seed, function () {
    var _a;
    _a = (0, core_1.magicHatNext)(seed, seconds), seed = _a[0], question = _a[1];
    askQuestion();
}), seed = _a[0], question = _a[1], seconds = _a[2];
// Ask initial question:
askQuestion();
if (seconds > 0) {
    repeating = true;
    secondsInput.idx(0).value = seconds;
    repeatingCheckbox.idx(0).checked = true;
}
nextButton.on("click", function () {
    var _a;
    _a = (0, core_1.magicHatNext)(seed, repeating ? seconds : null), seed = _a[0], question = _a[1];
    askQuestion();
});
prevButton.on("click", function () {
    var _a;
    _a = (0, core_1.magicHatBack)(seed, repeating ? seconds : null), seed = _a[0], question = _a[1];
    askQuestion();
});
function onRepeatSettingChange() {
    var _a, _b;
    var checked = repeatingCheckbox.idx(0).checked;
    if (checked) {
        seconds = parseInt(secondsInput.idx(0).value, 10);
        _a = (0, core_1.magicHatStartRepeat)(seed, seconds, function () {
            var _a;
            _a = (0, core_1.magicHatNext)(seed, seconds), seed = _a[0], question = _a[1];
            askQuestion();
        }), seed = _a[0], question = _a[1], seconds = _a[2];
        askQuestion();
        repeating = true;
    }
    else if (!checked) {
        _b = (0, core_1.magicHatStopRepeat)(seed), seed = _b[0], question = _b[1];
        askQuestion();
        repeating = false;
    }
}
repeatingCheckbox.on("change", onRepeatSettingChange);
secondsInput.on("change", function () {
    repeatingCheckbox.idx(0).checked = true;
    onRepeatSettingChange();
});
copyUrlButton.on("click", function (ev) {
    ev.stopPropagation();
    L_1.default.copy(window.location.href);
    copyUrlButton.idx(0).textContent = "Copied!";
});
infoSection.on("click", function () {
    var button = copyCliButton.idx(0);
    L_1.default.copy(button.textContent.trim());
    button.textContent = "Copied!";
});
