var PostSO = require('../models/postSOModel');

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
