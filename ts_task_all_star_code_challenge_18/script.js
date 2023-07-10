"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strCount = void 0;
function strCount(str, letter) {
    var arrStr = str.split('');
    var counter = 0;
    arrStr.forEach(function (el) { return (el === letter ? counter++ : false); });
    return counter;
}
exports.strCount = strCount;
console.log(strCount('Hello', 'o'));
