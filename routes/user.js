var express = require('express');
var router = express.Router();


const {adminAuthenticate, loadAdminPage} = require('../controller/adminControls');
const {refresh} = require('../controller/genUserControls');








module.exports = router;