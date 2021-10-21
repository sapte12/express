const express = require('express');
const app = express();
const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, host, function() {
    console.log("Server started.......");
  });