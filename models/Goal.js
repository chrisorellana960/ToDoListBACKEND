const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    deadline: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Goal', goalSchema);