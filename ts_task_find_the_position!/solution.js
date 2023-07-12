"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.position = void 0;
function position(letter) {
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return "Position of alphabet: ".concat(alphabet.indexOf(letter) + 1);
}
exports.position = position;
