var express = require('express');
var router = express.Router();
var NoteItemController = 
	require('../controllers/NoteItemController.js');
const UserController = require("../controllers/UserController");

/*
 * GET
 */
router.get('/', NoteItemController.list);

router.get('/newtask',  NoteItemController.newTask);

router.get('/open',  NoteItemController.openTask);

router.get('/finished',  NoteItemController.finishedTask);

router.get('/work',  NoteItemController.workTask);

router.get('/shopping',  NoteItemController.shopTask);

/*
 * GET
 */
router.get('/:id', NoteItemController.show);

/*
 * POST
 */
router.post('/', NoteItemController.create);

/*
 * PUT
 */
router.put('/:id', NoteItemController.update);

/*
 * DELETE
 */
router.delete('/:id', NoteItemController.remove);

module.exports = router;
