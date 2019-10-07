const passport = require('passport');
const key = process.env;


exports.adminAuthenticate = (req, res, next) => {

};

exports.staffAuthenticate = (req, res, next) => {
	console.log('SALES Verification Begin...');
	passport.authenticate('salesPass', (errors, staff) => {
		if(errors) {throw errors};
		if (staff === false) {
			console.log('SALES Verification: FAILED');
			req.flash('error_msg','Invalid Credentials');
			res.redirect('/')
		} else {
			req.logIn(staff,(err) => {
				if(err) { return next(err);}
				console.log('SALES Verification: PASSED')
				res.redirect(`/Sourcing_App`);
			})
		}
	})(req, res, next);
};

exports.vendorAuthenticate = (req, res, next) => {

};

exports.adminIsAuthenticated = (req, res, next) => {
	if (req.isAuthenticated()) {
		return next();
	}
	req.flash('error_msg', 'Please log into your Account again');
	res.redirect('/ABH_Purchase/Login');
};

exports.staffIsAuthenticated = (req, res, next) => {
	if (req.isAuthenticated()) {
		return next();
	}
	req.flash('error_msg', 'Please log into your Account again');
	res.redirect('/ABH_Purchase/Login');
};

exports.vendorIsAuthenticated = (req, res, next) => {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('https://abhpharma.com/');
};