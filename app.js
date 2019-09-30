const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');


const loginRouter = require('./routes/login');
const staffRouter = require('./routes/staff');
const adminRouter = require('./routes/admin');
const vendorRouter = require('./routes/vendor');
const app = express();
require('dotenv').config();
const key = process.env;



// ___Connect To database
mongoose
	.connect(key.mongo_connect_uri, { useNewUrlParser: true , useUnifiedTopology: true })
	.then(() => {
		console.log('Connected to Database.....');
	})
	.catch((err) => console.log(err));
// :: needed the following due to depreciation
mongoose.set('useFinAndModify', false);




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', loginRouter);
app.use('/Sourcing_App', staffRouter);
app.use('/Vendor_Response', vendorRouter);
app.use('/Admin', adminRouter);

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
