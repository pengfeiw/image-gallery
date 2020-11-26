var  express = require("express");
var mongoose = require("mongoose");
var config = require("./server/configure");
var app = express();

mongoose.connect("mongodb://localhost/imgPloadr");
mongoose.connection.on("open", function() {
    console.log("Mongoose connected.");
});

app.set("port", process.env.PORT || 3300);
app.set("views", __dirname + "/views");
app = config(app);

// app.get("/", function(req, res) {
//     res.send("Hello world");
// });

app.listen(app.get("port"), function() {
    console.log("Server up: http://localhost:" + app.get("port"));
});
