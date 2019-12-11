const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from pre-Appsody!");
});
 
module.exports.app = app;
