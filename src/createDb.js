"use strict";
exports.__esModule = true;
var InitDb_1 = require("./models/InitDb");
var createDb = new InitDb_1.InitDb();
createDb.connectService();
createDb.createDB();
