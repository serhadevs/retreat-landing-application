const mysql=require('mysql2/promise');

const db=mysql.createPool({
    host: "fsm-manager-db-food-safety-manager.a.aivencloud.com",
    user: "retreat-application-db",
    password: "AVNS_dErSIRdVculRpOXXHzu",
    database: "retreat-application-db",
    port: "24615",
    connectionLimit:100
})

module.exports = db