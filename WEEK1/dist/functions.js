"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logWords = void 0;
exports.sum = sum;
exports.greet = greet;
exports.joinWords = joinWords;
// TODO #7: دالة مع نوع إرجاع
function sum(a, b) {
    return a + b;
}
// TODO #8: وسيط اختياري + قيمة افتراضية
function greet(name, salutation = 'Hello') {
    return `${salutation} ${name ?? 'Guest'}`;
}
// TODO #9: rest parameter
function joinWords(separator, ...words) {
    return words.join(separator);
}
// TODO #10: دالة سهمية + forEach
const logWords = (words) => {
    words.forEach(w => console.log(w));
};
exports.logWords = logWords;
