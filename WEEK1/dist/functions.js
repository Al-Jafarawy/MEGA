"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logWords = void 0;
exports.sum = sum;
exports.greet = greet;
exports.joinWords = joinWords;
function sum(a, b) {
    return a + b;
}
function greet(name, salutation = "Hello") {
    return `${salutation} ${name ?? "Guest"}`;
}
function joinWords(separator, ...words) {
    return words.join(separator);
}
const logWords = (words) => {
    words.forEach((w) => console.log(w));
};
exports.logWords = logWords;
