var express = require('express');
var router = express.Router();


const {adminAuthenticate, loadAdminPage} = require('../controller/adminControls');
const {loadUser} = require('../controller/genUserControls');


router.get('/')



module.exports = router;
