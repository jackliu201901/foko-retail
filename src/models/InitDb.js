"use strict";
exports.__esModule = true;
exports.InitDb = void 0;
var mysql = require("mysql");
var dbConfig = require("../config/db.config.ts");
/**
 *
 * @class         CsvFileReader
 * @brief         Csv file management Class
 *
 * @author        Jack
 * @copyright (C) Foko Retail
 * @version       1.0
 * @date          2021-01-04
 */
var InitDb = /** @class */ (function () {
    function InitDb() {
        this.connection = "";
        this.connection = mysql.createConnection({
            host: dbConfig.HOST,
            user: dbConfig.USER,
            password: dbConfig.PASSWORD
        });
    }
    InitDb.prototype.connectService = function () {
        this.connection.connect(function (errMessage) {
            if (errMessage)
                throw errMessage;
            console.log("Mysql Connected Success!");
        });
    };
    ;
    InitDb.prototype.createDB = function () {
        this.connection.query("CREATE DATABASE IF NOT EXISTS " + dbConfig.DBNAME + " CHARACTER SET utf8 COLLATE utf8_general_ci;", function (errMessage) {
            if (errMessage)
                throw errMessage;
            else
                console.log("Database " + dbConfig.DBNAME + " created or connected success!");
        });
    };
    ;
    return InitDb;
}());
exports.InitDb = InitDb;
