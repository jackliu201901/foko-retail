# Foko Retail Test

Read and Write in Typescript.
Save data to mysql

git clone git@github.com:jackliu201901/foko-retail.git

cd foko-retail

npm install typescript

npm i --save-dev @types/node

npm install csv-parse

npm install node-datetime

npm install mysql

npm install typeorm --save

npm install typeorm -g

npm install reflect-metadata --save

npm install -g ts-node

configure db file
1, ./src/config/db.config.ts
2, ./src/ormconfig.json

tsc ./src/createDb.ts

node ./src/createDb.js

To run your application: 

npm start -- --input=EmployeeRecords_input.csv --output=./