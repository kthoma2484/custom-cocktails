// Set up MySQL connection
let mysql = require("mysql");

let connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "cocktails_db"
})

// Make connection
connection.connect(function(){
    if (err) {
        throw err;
        return;
    }
    console.log("connection as id " + connection.threadId)
})

module.exports = connection;
