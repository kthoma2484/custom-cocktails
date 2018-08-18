// Dependencies----------------------

let express = require("express");
let cocktail = require("../models/cocktail.js");

// Router----------------------------

let router = express.Router();

router.get("/", function(req, res) {
    cocktail.selectAll(function(data) {
        let hbsObject = {
            cocktail: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// router.post("/api/cocktails", function(req, res) {
//     cocktail.insertOne(function(data) {
//         let hbsObject = {
//             cocktail: data
//         };
//         console.log(hbsObject);
//         res.render("index", hbsObject);
//     });
// });

module.exports = router;

