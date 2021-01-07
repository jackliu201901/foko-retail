import {InitDb} from "./models/InitDb";

let createDb = new InitDb()
createDb.connectService();
createDb.createDB();
