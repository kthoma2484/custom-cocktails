// Dependencies----------------------

let express = require("express");
let cocktails = require("../models/cocktail.js");

// Router----------------------------

let router = express.Router();

router.get("/", function(req, res) {
    cocktails.selectAll(function(data) {
        let hbsObject = {
            cocktail: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/cocktails", function(req, res) {
    cocktails.insertOne(["drink_name", "drunken"], [req.body.drink_name, req.body.drunken], function(result) {
       
    res.json( { id: result.insertId });
    });
});

router.put("/api/cocktails/:id", function(req, res) {
    var consumed = "id = " + req.params.id;
  
    console.log("consumed", consumed);
  
    cocktails.update({
      drunken: req.body.drunken
    }, consumed, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;

