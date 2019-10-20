var express = require('express');
var router = express.Router();

const {loadStaffHomePage,loadCategories,loadMaterials} = require('../controller/staffControls');
const {loadAdminPage} = require('../controller/adminControls');
const {refresh} = require('../controller/genUserControls');
const {adminIsAuthenticated, staffIsAuthenticated} = require('../config/auth');

router.get('/', loadStaffHomePage);





module.exports = router;