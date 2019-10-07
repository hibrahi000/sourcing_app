var express = require('express');
var router = express.Router();
const {adminAuthenticate, staffAuthenticate} = require('../config/auth');
const {loadLogin, redirectLogin} = require('../controller/loginControls');


router.get('/' ,loadLogin);

router.get('/Login',redirectLogin);

router.post('/Staff_Authenticate', staffAuthenticate );

router.post('/Admin_Authenticate', adminAuthenticate );




module.exports = router;