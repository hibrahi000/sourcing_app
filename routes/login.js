var express = require('express');
var router = express.Router();
const {adminAuthenticate, staffAuthenticate} = require('../config/auth');
const {redirectLogin, loadLoginPage} = require('../controller/loginControls');


router.get('/' ,redirectLogin);

router.get('/Login',loadLoginPage);

router.post('/staffAuthenticate', staffAuthenticate );

router.post('/adminAuthenticate', adminAuthenticate );




module.exports = router;