// Dependencies-------------

let orm = require("../config/orm.js");

// functions for cocktail input

let Cocktail = {
    selectAll: function(cb) {
        orm.selectAll("cocktails", function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("cocktails", cols, vals, function(res) {
            cb(res);
        })
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("cocktails", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = Cocktail