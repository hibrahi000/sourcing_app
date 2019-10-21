// ++ Imports
const key =process.env; 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// :: Database imports
const vendorDB = require('../models/db/vendorDB');

// ___ Page Loads
exports.loadStaffHomePage = (req, res, next) => {
	console.log('Loading Login Page');
	res.render('baseTemplate');
};

// ___CRUD Functions

exports.loadCategories = () => {};

exports.loadMaterials = () => {};
