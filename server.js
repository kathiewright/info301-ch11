// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var http = require('https');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

/*
console.log('Creating a simple HTTP request');

http.get("https://api.darksky.net/forecast/YOUR_API_KEY/37.7577,-122.4376", function(res) {
  var body = ''; // Will contain the final response
  // Received data is a buffer.
  // Adding it to our body
  res.on('data', function(data){
    body += data;
  });
  // After the response is completed, parse it and log it to the console
  res.on('end', function() {
    var parsed = JSON.parse(body);
    console.log(body);
  });
})
// If any error has occured, log error to console
.on('error', function(e) {
  console.log("Got error: " + e.message);
}); */

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
