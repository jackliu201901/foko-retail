import { Validate } from "./models/Validate";
import { InitDb } from "./models/InitDb";
import "reflect-metadata";
import { createConnection, Connection } from "typeorm";
import {Employee} from "./entity/Employee";
import construct = Reflect.construct;
const fs = require("fs");

/**
 * @name ProcessData
 * @brief
 *      Process Data
 * @param errMessage:string, arrayEmployee:string[][]
 *
 * @return
 */

export class ProcessData
{
    newEmployee:string[][] = [];

    constructor(public arrayEmployee:string[][])
    {
    }

    public validateData()
    {
        let validate =  new Validate();

        var line;
        for (line = 0; line < this.arrayEmployee.length; line++){

            var labelValid = false;
            if (this.arrayEmployee[line][0]===undefined || this.arrayEmployee[line][0]==="")
            {
                continue;
            }

            if (!validate.validateEmployeeID(this.arrayEmployee[line][0]))
            {
                console.log('Invaid Entry: Line ' + (line+1) + ') EmployeeId ' + this.arrayEmployee[line][0] + ' is invaid.' );
                labelValid = true;
            }

            if (!validate.validatePhoneNumber(this.arrayEmployee[line][3]))
            {
                console.log('Invaid Entry: Line ' + (line+1) + ') Phone Number ' + this.arrayEmployee[line][3] + ' is invaid.' );
                labelValid = true;
            }

            if (!validate.validateEmail(this.arrayEmployee[line][4]))
            {
                console.log('Invaid Entry: Line ' + (line+1) + ') Email ' + this.arrayEmployee[line][4] + ' is invaid.' );
                labelValid = true;
            }

            if (labelValid === false)
            {
                this.newEmployee.push(this.arrayEmployee[line]);
            }
        }

    }
/*
    public initDB()
    {
        //save data to mysql
        let initDb = new InitDb;
        initDb.initDatabase();
        //  initDb.setConnect();
    }*/

    /**
     * @name insertData
     * @brief
     *       insert data into mysql from csv
     * @return
     */
    public insertData():void
    {
        let dateStr = new Date().toDateString();

        createConnection().then(async connection => {

            for (let line = 0; line < this.newEmployee.length; line++) {

                let employee = new Employee();

                let employeeRepository = connection.getRepository(Employee);
                let oneEmployee = await employeeRepository.findOne({employeeId: this.newEmployee[line][0]});
                if (oneEmployee === undefined)
                {
                    employee.employeeId = this.newEmployee[line][0];
                    employee.firstName = this.newEmployee[line][1];
                    employee.lastName = this.newEmployee[line][2];
                    employee.phoneNumber = this.newEmployee[line][3];
                    employee.email = this.newEmployee[line][4];
                    employee.dateUpdated = dateStr;
                    employee.dateCreated = dateStr;

                    await employeeRepository.save(employee);
                }
                else
                {
                    oneEmployee.employeeId = this.newEmployee[line][0];
                    oneEmployee.firstName = this.newEmployee[line][1];
                    oneEmployee.lastName = this.newEmployee[line][2];
                    oneEmployee.phoneNumber = this.newEmployee[line][3];
                    oneEmployee.email = this.newEmployee[line][4];
                    oneEmployee.dateUpdated = dateStr;

                    await employeeRepository.save(oneEmployee);

                }
            }

        }).catch(error => console.log(error));

    }

    /**
     * @name exportData
     * @brief
     *       exportdata into mysql from csv
     * @return
     */

    public exportData(output:string):void
    {

        createConnection().then(async connection => {

            let employeeRepository = connection.getRepository(Employee);
            let allEmployees = await employeeRepository.find();

            const arrEmployee:any = <string[]> JSON.parse(JSON.stringify(allEmployees));

            var i = 0, result = [];

            while(i < arrEmployee.length){
                result.push([])
                for(var key in arrEmployee[i]){
                    if (key !== "id" )
                    {
                        result[result.length-1].push(arrEmployee[i][key])
                    }
                }
                i++
            }

            let arrEmployeeRecords:string[][] = JSON.parse(JSON.stringify(result, null, 4));

            const headLine:string[][] =  [["EmployeeID", "First Name", "Last Name","Phone Number","Email","Created Date","Upadated Date"]];

            const employeeRecords:string[][] = headLine.concat(arrEmployeeRecords);

            let csvContent = "";

                           employeeRecords.forEach(function(rowArray) {
                                let row = rowArray.join(",");
                                csvContent += row + "\r\n";
                            });

                            fs.writeFile(output, csvContent, (errMessage:string) => {
                                if (errMessage)
                                    throw errMessage;
                                else
                                    console.log('Save Success!');
                            });
        }).catch(error => console.log(error));

    }
}