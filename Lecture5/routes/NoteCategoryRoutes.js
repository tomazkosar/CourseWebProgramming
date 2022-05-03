var express = require('express');
var router = express.Router();
var NoteCategoryController =
	require('../controllers/NoteCategoryController.js');

/*
 * GET
 */
router.get('/', NoteCategoryController.list);


module.exports = router;
