var NoteCategoryModel = require('../models/NoteCategoryModel.js');

/**
 * NoteItemController.js
 *
 * @description :: Server-side logic for managing NoteItems.
 */

module.exports = {
    /**
     * NoteCategoryController.list()
     */
    list: function (req, res) {
        NoteCategoryModel.find(function (err, NoteCategories) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Categories.',
                    error: err
                });
            }

            return res.json(NoteCategories);
        });
    },


};
