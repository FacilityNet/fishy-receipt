import { __spread, __generator } from 'tslib';
import React from 'react';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function makeStyles(it) {
    return __spread(it).reduce(function (acc, cur) { return Object.assign(acc, cur); }, {});
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
function drawFish(key, scale, startOffset, onClick) {
    var first = key === 0;
    var fishLayer = getRandomInt(1, 3);
    var layerScale = fishLayer / 2;
    var fishContainerClass = "fish-container-" + fishLayer;
    var left = startOffset;
    var top = first ? "50%" : getRandomInt(5, 90) + "%"; // first fish near center
    var fishScale = 0.7 + (Math.random() * 0.3);
    var transform = "rotate(45deg) scale(" + scale * layerScale * fishScale + ")";
    // Make sure first fish appears quickly on screen
    var delay = first ? 0 : getRandomInt(0, 80);
    var duration = first ? 40 : getRandomInt(40, 80);
    var animation = "swim " + duration + "s  " + delay + "s infinite";
    return (React.createElement("div", { key: key, className: "fish-container " + fishContainerClass, style: { left: left, top: top, animation: animation }, onClick: onClick },
        React.createElement("div", { className: "fish fish-color", style: { transform: transform } },
            React.createElement("div", { className: "fish-eyes" }),
            React.createElement("div", { className: "fish-tail" }))));
}
var Fish = function (_a) {
    var ocean = _a.ocean, fish = _a.fish, _b = _a.word, word = _b === void 0 ? { text: "FISH" } : _b;
    var fishy = Object.assign({ count: 10, scale: 1, startOffset: "-30%", interactive: true }, fish);
    function generateStyles() {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!((ocean === null || ocean === void 0 ? void 0 : ocean.widthInVw) !== undefined)) return [3 /*break*/, 2];
                    return [4 /*yield*/, { "--ocean-width-in-vw": ocean.widthInVw }];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!((ocean === null || ocean === void 0 ? void 0 : ocean.heightInVh) !== undefined)) return [3 /*break*/, 4];
                    return [4 /*yield*/, { "--ocean-height-in-vh": ocean.heightInVh }];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    if (!((ocean === null || ocean === void 0 ? void 0 : ocean.background) !== undefined)) return [3 /*break*/, 6];
                    return [4 /*yield*/, { "--ocean-background": ocean.background }];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    if (!(fishy.background !== undefined)) return [3 /*break*/, 8];
                    return [4 /*yield*/, { "--fish-background": fishy.background }];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    if (!(fishy.magicBackground !== undefined)) return [3 /*break*/, 10];
                    return [4 /*yield*/, { "--magic-fish-background": fishy.magicBackground }];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10: return [4 /*yield*/, { "--todays-word-length": word.text.length }];
                case 11:
                    _a.sent();
                    if (!(word.fontSize !== undefined)) return [3 /*break*/, 13];
                    return [4 /*yield*/, { "--todays-word-font-size": word.fontSize }];
                case 12:
                    _a.sent();
                    _a.label = 13;
                case 13:
                    if (!(word.scale !== undefined)) return [3 /*break*/, 15];
                    return [4 /*yield*/, { "--todays-word-scale": word.scale }];
                case 14:
                    _a.sent();
                    _a.label = 15;
                case 15:
                    if (!(word.color !== undefined)) return [3 /*break*/, 17];
                    return [4 /*yield*/, { "--todays-word-color": word.color }];
                case 16:
                    _a.sent();
                    _a.label = 17;
                case 17: return [2 /*return*/];
            }
        });
    }
    var oceanStyle = makeStyles(generateStyles());
    var handleClick = function (e) {
        e.preventDefault();
        var fishContainer = e.currentTarget;
        fishContainer.style.animationDuration = "10s";
    };
    var handlerToUse = fishy.interactive ? handleClick : undefined;
    return (React.createElement("div", { id: "ocean", className: "ocean", style: oceanStyle },
        React.createElement("div", { className: "todays-word" },
            React.createElement("p", null, word.text)), __spread(repeat(fishy.count, drawFish, fishy.scale, fishy.startOffset, handlerToUse))));
};

export { Fish };
//# sourceMappingURL=index.js.map
