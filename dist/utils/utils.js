"use strict";
exports.__esModule = true;
exports.getHash = exports.getNowDate = void 0;
var sha3_1 = require("sha3");
var getNowDate = function (date, time) {
    return "".concat(date.getFullYear(), "-").concat(('0' + (date.getMonth() + 1)).slice(-2), "-").concat(('0' + date.getDate()).slice(-2)).concat(time ? ' ' + date.toLocaleTimeString() : '');
};
exports.getNowDate = getNowDate;
var getHash = function (a, size) { return new sha3_1.SHA3(size).update(a).digest('hex'); };
exports.getHash = getHash;
