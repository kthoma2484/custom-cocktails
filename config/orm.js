// Depenedencies------------

let connection = require("./connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
}

// Methods to excute MySQL commands
let orm = {
    selectAll: function (tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";

        connection.query(queryString, function (err, result) {
            if (err) {
                return;
            }
            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        })
    },
    updateOne: function (table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    reset: function (table, cb) {
        let queryString = "UPDATE " + table + " SET drunken = 0;";
        console.log('orm.js reset function called');
        console.log("table is " + table);
        connection.query(queryString, function (err, result) {
            if (err) {
                return;
            }
            cb(result);
        });
    }
};

module.exports = orm;