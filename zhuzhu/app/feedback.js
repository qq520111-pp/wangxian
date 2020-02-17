let mongoose = require("mongoose");

let feedback = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    time: String,
    msg: {
        type: String,
        require: true
    },
    // 判断是否读取
    reader: {
        type: Number,
        require: true,
        default: 0
    }
});

let feedbacks = mongoose.model("fbs", feedback);

module.exports = {
    feedbacks
}