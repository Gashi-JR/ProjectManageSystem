const mysql2=require("mysql2")

const config={
    host:"127.0.0.1",
    port:3306,
    user:"root",
    password:"123456",
    database:"researchmanage_schema",
    connectionLimit:5,
}
//连接池
const promisePool = mysql2.createPool(config).promise();

module.exports = promisePool;