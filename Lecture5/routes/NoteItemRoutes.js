var express = require('express');
var router = express.Router();
var NoteItemController = 
	require('../controllers/NoteItemController.js');

        console.log('router!!!');    

/*
 * GET
 */
router.get('/', NoteItemController.list);

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
