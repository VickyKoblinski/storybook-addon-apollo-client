"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.managerEntries = exports.config = void 0;
var tslib_1 = require("tslib");
function config(entry) {
    if (entry === void 0) { entry = []; }
    return tslib_1.__spreadArray(tslib_1.__spreadArray([], entry, true), [require.resolve('./addDecorator')], false);
}
exports.config = config;
function managerEntries(entry) {
    if (entry === void 0) { entry = []; }
    return tslib_1.__spreadArray(tslib_1.__spreadArray([], entry, true), [require.resolve('../register')], false);
}
exports.managerEntries = managerEntries;
//# sourceMappingURL=index.js.map