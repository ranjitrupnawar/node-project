// index.js
const express = require('express');
const app = express();
const port = 3000;

// Define a simple API endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});

module.exports = app;
