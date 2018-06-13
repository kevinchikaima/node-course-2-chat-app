const path = require('path');
const express = require('express');

var app = express();
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

// app.get('/',(req, res) => {
//   res.render('index.html');
// });

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

module.exports = {app};
