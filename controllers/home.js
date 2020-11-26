const sidebar = require("../helpers/sidebar");
const ImageModel = require('../models').Image;

module.exports = {
    index: function (req, res) {
        var viewModel = {
            images: [
            ]
        };

        ImageModel.find({}, {}, {sort: {timestamp: -1}},
            function (err, images) {
                if (err) {throw err;}
                viewModel.images = images.map(image => image.toObject({getters: true}));
                sidebar(viewModel, function (viewModel) {
                    res.render('index', viewModel);
                });
            }
        );
    }
};
