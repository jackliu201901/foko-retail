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

    public setConnect() {
        this.connection = mysql.createConnection({
            host: dbConfig.HOST,
            user: dbConfig.USER,
            password: dbConfig.PASSWORD,
            database: dbConfig.DBNAME
        });
    };

    public getConnect() {
        return this.connection;
    };


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

    public createTable() {
        var tableSql = "CREATE TABLE IF NOT EXISTS employee (id INT(11) NOT NULL AUTO_INCREMENT, employeeId VARCHAR(50), firstName VARCHAR(50)," +
            "lastName VARCHAR(50),phoneNumber VARCHAR(50),email VARCHAR(100),dateCreated CHAR(20), dateUpdated CHAR(20)," +
            "PRIMARY KEY (id)) ENGINE=INNODB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;";
        this.connection.query(tableSql, function (errMessage) {
            if (errMessage)
                throw errMessage;
            else
                console.log("Table employee created success! ");
        });
    };


}
