const fs = require('fs');
const path = require('path');
const express = require('express');

const backend = express();

const EXPRESS_PORT = 3000;

//test functionality of application
function fastWait() {
  return 300;
}
//original wait funciton
function randomWait() {
  return Math.floor(Math.random() * 10000) + 500;
}
//test loading indicator 
function longWait() {
  return 30000;
}

backend.get('/api/users', (req, res) => {
  fs.readFile(path.resolve(__dirname, 'users.json'), 'utf8', (err, data) => {
    setTimeout(() => {
      //had some trouble with CORS 
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
      res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
      res.json(JSON.parse(data));
    }, randomWait());
  });
});

backend.get('/api/user/:id', (req, res) => {
  const userId = req.params.id;
  fs.readFile(path.resolve(__dirname, 'users.json'), 'utf8', (err, data) => {
    const users = JSON.parse(data)
    const user = users.find(item => item.id.toString() === userId)
    setTimeout(() => {
      //had some trouble with CORS 
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
      res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
      res.json(user)
    }, randomWait());
  });
});

backend.listen(EXPRESS_PORT, () => console.log(`Server is running on http://localhost:${EXPRESS_PORT}/`));