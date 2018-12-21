// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "../view.html"));
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

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});