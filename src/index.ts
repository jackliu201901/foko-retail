import { MatchReader } from "./models/MatchReader";
import {ProcessData} from "./ProcessData";

// import csv to mysql
var input = "./EmployeeRecords_input.csv";

//read data from csv
const matchReader = MatchReader.fromCsv(input);

matchReader.load();

let arrayEmployee = matchReader.matches;

arrayEmployee.shift();

let proData = new ProcessData(arrayEmployee);

// validate the data
proData.validateData();

// insert into mysql
proData.insertData();


// export mysql to csv
var output = "./EmployeeRecords_output.csv";

proData.exportData(output);
