// Dependencies---------------------

let express = require("express");
let bodyParser = require("body-parser");

let PORT = process.env.PORT || 8080;

let app = express();

// Serve static content for app from public directory
app.use(express.static("public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true }));

// Parse application/json
app.use(bodyParser.json());

// Set Handlebars
let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
let routes = require("./controllers/cocktails_controller.js");

app.use(routes);

// Listen to server
app.listen(PORT, function() {
    console.log("Server lisenting on: http://localhost:" + PORT);
});
