"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultPriority = exports.unsafeValue = exports.debugMode = exports.version = exports.appName = void 0;
// TODO #1: string, number, boolean
exports.appName = 'TS Task Manager';
exports.version = 1.0;
exports.debugMode = false;
// TODO #2: any + تعليق توضيحي
// استخدمنا any مرة واحدة لشرح، لكن تجنبه في الكود الحقيقي لأنه يلغي فائدة الـ types.
exports.unsafeValue = null;
exports.defaultPriority = 'medium';
