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
export class InitDb {

    public connection:any = "";

    constructor() {
        this.connection = mysql.createConnection({
            host: dbConfig.HOST,
            user: dbConfig.USER,
            password: dbConfig.PASSWORD
        });
    }

    public connectService () {
        this.connection.connect(function (errMessage) {
            if (errMessage)
                throw errMessage;
            console.log("Mysql Connected Success!");
        });
    };

    public createDB () {
        this.connection.query("CREATE DATABASE IF NOT EXISTS " + dbConfig.DBNAME + " CHARACTER SET utf8 COLLATE utf8_general_ci;", function (errMessage) {
            if (errMessage)
                throw errMessage;
            else
                console.log("Database " +  dbConfig.DBNAME + " created or connected success!");
        });
    };

}
