exports.adminAuthenticate = (req, res, next) => {};

exports.staffAuthenticate = (req, res, next) => {};

exports.vendorAuthenticate = (req, res, next) => {};

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