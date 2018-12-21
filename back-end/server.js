// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var tables = [];
var waitingList = [];

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "../tables.html"));
});

app.get("/make", function(req, res) {
  res.sendFile(path.join(__dirname, "../make.html"));
});

app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "../home.html"));
});

// Displays all characters
app.get("/api/reservations", function(req, res) {
    return res.json(tables);
});

app.get("/api/waiting", function(req, res) {
    return res.json(waitingList);
});


app.post("/api/reservations", function(req, res){
    var newReservation = req.body;
    console.log(newReservation);
    if (tables.length < 5){
        tables.push(newReservation);
        var message = "Your reservation has been recieved."
        console.log(message);
    } else {
        waitingList.push(newReservation);
        message = "Our tables are currently full. You have been placed on the waiting list."
        console.log(message);
    }
});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});