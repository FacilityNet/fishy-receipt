import { __generator, __spread } from 'tslib';
import React from 'react';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function repeat(n, f) {
    var _i, i;
    var args = [];
    for (_i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i < n)) return [3 /*break*/, 4];
                return [4 /*yield*/, f.apply(void 0, __spread([i], args))];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}

// This component is based on the following CodePen
// See: https://codepen.io/alicepopoff/pen/JMLpNM
function drawFish(key, onClick) {
    var fishLayer = getRandomInt(1, 3);
    var fishContainerClass = "fish-container-" + fishLayer;
    var left = "-30%";
    var top = getRandomInt(5, 90) + "%";
    var transform = "rotate(45deg) scale(" + 1 / getRandomInt(2, 6) + ")";
    var animation = "swim " + getRandomInt(40, 80) + "s  " + getRandomInt(0, 80) + "s infinite";
    return (React.createElement("div", { key: key, className: "fish-container " + fishContainerClass, style: { left: left, top: top, transform: transform, animation: animation }, onClick: onClick },
        React.createElement("div", { className: "fish fish-color" },
            React.createElement("div", { className: "fish-eyes" }),
            React.createElement("div", { className: "fish-tail" }))));
}
var Fish = function (_a) {
    var _b, _c;
    var ocean = _a.ocean, fish = _a.fish, word = _a.word;
    function generateStyles() {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(ocean !== undefined)) return [3 /*break*/, 2];
                    return [4 /*yield*/, {
                            "--ocean-width-in-vw": ocean.widthInVw,
                            "--ocean-height-in-vh": ocean.heightInVh
                        }];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!((fish === null || fish === void 0 ? void 0 : fish.color) !== undefined)) return [3 /*break*/, 4];
                    return [4 /*yield*/, {
                            "--fish-color": fish.color
                        }];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    if (!((fish === null || fish === void 0 ? void 0 : fish.magicColor) !== undefined)) return [3 /*break*/, 6];
                    return [4 /*yield*/, {
                            "--magic-fish-color": fish.magicColor
                        }];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    if (!(word !== undefined)) return [3 /*break*/, 8];
                    return [4 /*yield*/, {
                            "--todays-word-length": word.text.length
                        }];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    if (!((word === null || word === void 0 ? void 0 : word.fontSize) !== undefined)) return [3 /*break*/, 10];
                    return [4 /*yield*/, {
                            "--todays-word-font-size": word.fontSize
                        }];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10:
                    if (!((word === null || word === void 0 ? void 0 : word.color) !== undefined)) return [3 /*break*/, 12];
                    return [4 /*yield*/, {
                            "--todays-word-color": word.color
                        }];
                case 11:
                    _a.sent();
                    _a.label = 12;
                case 12: return [2 /*return*/];
            }
        });
    }
    var oceanStyle = __spread(generateStyles()).reduce(function (acc, cur) { return (Object.assign(acc, cur)); }, {});
    var wordOfTheDay = (_b = word === null || word === void 0 ? void 0 : word.text) !== null && _b !== void 0 ? _b : "Fish";
    var numberOfFish = (_c = fish === null || fish === void 0 ? void 0 : fish.count) !== null && _c !== void 0 ? _c : 70;
    var handleClick = function (e) {
        e.preventDefault();
        var fishContainer = e.currentTarget;
        fishContainer.style.animationDuration = "10s";
    };
    return (React.createElement("div", { id: "ocean", className: "ocean", style: oceanStyle },
        React.createElement("div", { className: "todays-word" },
            React.createElement("p", null, wordOfTheDay)), __spread(repeat(numberOfFish, drawFish, handleClick))));
};

export { Fish };
//# sourceMappingURL=index.js.map
