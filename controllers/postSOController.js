// Import Post model
var PostSO = require('../models/postSOModel');
var postSO = new PostSO();

exports.index = function (req, res) {
    PostSO.get(function (err, posts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Posts retrieved successfully",
            data: posts
        });
    });
};

exports.new = function (req, res) {
    console.log("duvida",postSO)
    postSO.question = req.body.question;
    postSO.answer = req.body.answer;

    postSO.save(function (err) {
        res.json({
            message: 'Nova dúvida criada!',
            data: postSO
        });
    });
};

exports.view = function (req, res) {
    PostSO.findById(req.params.postSO_id, function (err, postSO) {
        if (err)
            res.send(err);
        res.json({
            message: 'Carregando detalhes da dúvida',
            data: postSO
        });
    });
};