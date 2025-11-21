"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matrix = exports.tags = void 0;
exports.addTag = addTag;
exports.removeLastTag = removeLastTag;
// TODO #4: مصفوفة نصية
exports.tags = ['home', 'work', 'urgent'];
// TODO #5: مصفوفة متعددة الأبعاد
exports.matrix = [
    [1, 2, 3],
    [4, 5, 6]
];
// TODO #6: دوال push/pop مع نوعية ثابتة
function addTag(t) {
    exports.tags.push(t);
}
function removeLastTag() {
    return exports.tags.pop();
}
