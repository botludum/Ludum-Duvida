var mongoose = require('mongoose');


var answerSchema = mongoose.Schema({
    title: String,
    link: String
});

var postSOSchema = mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer: [answerSchema],
    create_date: {
        type: Date,
        default: Date.now
    }
});

var PostSO = module.exports = mongoose.model('postSO', postSOSchema);

module.exports.get = function (callback, limit) {
    PostSO.find(callback).limit(limit);
}