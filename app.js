var express = require('express');
var path = require('path');
var createError = require('http-errors');
var logger = require('morgan');
var http = require('http');

var indexRouter = require('./server/routes/index');
var usersRouter = require('./server/routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

var port = process.env.PORT || '4201';
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);

module.exports = app;
