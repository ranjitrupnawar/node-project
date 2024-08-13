// index.js
const express = require('express');
const app = express();
const port = 30000;

// Define a simple API endpoint
app.get('/', (req, res) => {
  res.send('Arre bhava kute  ');
});

// Start the server
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});

module.exports = app;
