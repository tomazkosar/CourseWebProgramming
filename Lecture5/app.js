var dbAuth = require('./dbdata');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
//CORS - Angular demo
var cors = require('cors');

var mongoDB = 'mongodb+srv://'+dbAuth+'@cluster0-q3d7o.gcp.mongodb.net/NotesDB?retryWrites=true&w=majority';
mongoose.connect(mongoDB,  { useNewUrlParser:true, useUnifiedTopology: true  });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 
	'MongoDB connection error:'));

console.log('Valid: ', mongoose.Types.ObjectId.isValid('5e7a9d4aaa45563d18a7c0fa'));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var notesItemRouter = require('./routes/NoteItemRoutes');  

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

var allowedOrigins = ['http://localhost:4200', 
                      'http://localhost:4100', 
                      'http://localhost:3000'];

app.use(cors({
  credentials: true,
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
   
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/items', notesItemRouter);   

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
