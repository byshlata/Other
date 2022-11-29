"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mysql2_1 = __importDefault(require("mysql2"));
var connection = mysql2_1["default"].createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'myApp'
});
connection.connect();
connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    if (err)
        throw err;
    console.log('The solution is: ', rows);
});
connection.end();
