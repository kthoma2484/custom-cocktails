// Set up MySQL connection
let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "us-cdbr-iron-east-01.cleardb.net",
    user: "b211b784302e82",
    password: "0a74a851",
    database: "heroku_bfdf8372fc08edc",
})

// Make connection
connection.connect(function(err){
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connection as id " + connection.threadId)
})

module.exports = connection;
