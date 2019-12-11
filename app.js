const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hope this works!");
});
 
module.exports.app = app;
