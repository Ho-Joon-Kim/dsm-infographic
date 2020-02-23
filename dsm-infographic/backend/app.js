const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');


const mainRouter = require('./routes/');
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const imgRouter = require('./routes/info/img');
const descRouter = require('./routes/info/desc');
const surveyRouter = require('./routes/survey');
const adminRouter = require('./routes/admin');
const survey_checkRouter = require('./routes/survey_check');
const survey_secondRouter = require('./routes/survey_second');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', mainRouter);
app.use('/api/index', indexRouter);
app.use('/api/login', loginRouter);
app.use('/api/info/img', imgRouter);
app.use('/api/info/desc', descRouter);
app.use('/api/survey', surveyRouter);
app.use('/api/survey/admin', adminRouter);
app.use('/api/survey/check', survey_checkRouter);
app.use('/api/survey/second', survey_secondRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
