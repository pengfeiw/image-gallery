var express = require("express");
var router = express.Router();
var home = require("../controllers/home");
var image = require("../controllers/image");
// var multer = require("multer");
// var path = require("path");

// const upload = multer({ dest: path.join(__dirname, 'public/upload/temp')});

module.exports = function(app) {
    router.get("/", home.index);
    router.get("/images/:image_id", image.index);
    router.post("/images", /*upload.single("file"),*/ image.create);
    router.post("/images/:image_id/like", image.like);
    router.post("/images/:image_id/comment", image.comment);
    app.use(router);
};
