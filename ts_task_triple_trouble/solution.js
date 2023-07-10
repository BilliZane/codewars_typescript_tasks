"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tripleTrouble = void 0;
function tripleTrouble(one, two, three) {
    var res = '';
    one.split('').forEach(function (el, idx) {
        res += one[idx] + two[idx] + three[idx];
    });
    return res;
}
exports.tripleTrouble = tripleTrouble;
