const express = require('express');
const app = express();
const port = 7865;

app.get('/', (_, res) => {
  res.send('Well come to the payment system');
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
