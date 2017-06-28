var express = require('express');
var app = express();
var port = 8887;

//require modules above


var messages = [
  "Hello there.",
  "I'm sorry, I can not take any requests at this time.",
  "I can tell you how to do that."

];

//array of messages

app.options('/', function(req, res) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send();
});

app.get('/', function(req, res) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify({
    message: getRandomMessage()
  }));
});

app.get('/', function(req, res) {
  res.send(JSON.stringify({
    message: getRandomMessage()
  }))
});


//handle endpoint requests


app.listen(port, function() {
  console.log('listening on port', port)
})

//listen on the port

function getRandomMessage() {
  var index = Math.floor(Math.random() * messages.length);
  return message[index];
}

//get a random message in the messages array
