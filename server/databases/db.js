const mysql=require('mysql2/promise');

const db=mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "retreat",
    connectionLimit:100
})

module.exports = db