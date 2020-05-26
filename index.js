const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// static path
const publicPath = path.resolve(`${__dirname}/public`);
const pdtestPath = path.resolve(`${publicPath}/pdtest`);

// set your static server
app.use(express.static(publicPath));
app.use(express.static(pdtestPath));

// views
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

// start listening
app.listen(PORT, () => {
  console.log(`Server is running localhost on port: ${PORT}`)
});