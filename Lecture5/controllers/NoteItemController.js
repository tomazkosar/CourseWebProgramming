var NoteItemModel = require('../models/NoteItemModel.js');

/**
 * NoteItemController.js
 *
 * @description :: Server-side logic for managing NoteItems.
 */
        console.log('controller!!!');    

module.exports = {

    /**
     * NoteItemController.list()
     */
    list: function (req, res) {
        console.log('list!!!');    

        NoteItemModel.find(function (err, NoteItems) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting NoteItem.',
                    error: err
                });
            }
            //React demo
            return res.json(NoteItems);
            //Express demo  
            //return res.render('noteItems/list', NoteItems);
        });
    },

    /**
     * NoteItemController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        NoteItemModel.findOne({_id: id}, function (err, NoteItem) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting NoteItem.',
                    error: err
                });
            }
            if (!NoteItem) {
                return res.status(404).json({
                    message: 'No such NoteItem'
                });
            }
            return res.json(NoteItem);
        });
    },

    /**
     * NoteItemController.create()
     */
    create: function (req, res) {
        var NoteItem = new NoteItemModel({
			name : req.body.name,
			done : req.body.done

        });

        NoteItem.save(function (err, NoteItem) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating NoteItem',
                    error: err
                });
            }
            return res.status(201).json(NoteItem);
        });
    },

    /**
     * NoteItemController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        NoteItemModel.findOne({_id: id}, function (err, NoteItem) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting NoteItem',
                    error: err
                });
            }
            if (!NoteItem) {
                return res.status(404).json({
                    message: 'No such NoteItem'
                });
            }

            NoteItem.name = req.body.name ? req.body.name : NoteItem.name;
			NoteItem.done = req.body.done ? req.body.done : NoteItem.done;
			
            NoteItem.save(function (err, NoteItem) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating NoteItem.',
                        error: err
                    });
                }

                return res.json(NoteItem);
            });
        });
    },

    /**
     * NoteItemController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        NoteItemModel.findByIdAndRemove(id, function (err, NoteItem) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the NoteItem.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
