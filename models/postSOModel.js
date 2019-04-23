var mongoose = require('mongoose');


var postSOSchema = mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export Post model
var PostSO = module.exports = mongoose.model('postSO', postSOSchema);

module.exports.get = function (callback, limit) {
    PostSO.find(callback).limit(limit);
}