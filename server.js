var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/server.routes');
  routes(app); 

console.log('Backend server started on: ' + port);

module.exports = app.listen(port);