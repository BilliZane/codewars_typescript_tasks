"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.betterThanAverage = void 0;
function betterThanAverage(classPoints, yourPoints) {
    var allPoints = __spreadArray(__spreadArray([], classPoints, true), [yourPoints], false);
    var average = allPoints.reduce(function (a, b) { return a + b; }) / allPoints.length;
    return yourPoints >= average;
}
exports.betterThanAverage = betterThanAverage;
var studentResult = 75;
var allStudentsResults = [100, 40, 34, 57, 29, 72, 57, 88];
console.log(betterThanAverage(allStudentsResults, studentResult));
