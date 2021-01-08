# Foko Retail Test

Read and Write in Typescript.
Save data to mysql


npm install typescript

npm i --save-dev @types/node

npm install csv-parse

npm install node-datetime

npm install mysql

npm install typeorm --save

npm install typeorm -g

npm install reflect-metadata --save

npm install -g ts-node

tsc ./src/createDb.ts  // create database foko_jack

node ./src/createDb.js

cd ../
typeorm init --name fokoRetail --database foko_jack


To run your application: 

npm start -- --input=EmployeeRecords_input.csv --output=./   //it will export data to EmployeeRecords_output.csv

configure db file
1, ./src/config/db.config.ts
2, ./src/ormconfig.json

