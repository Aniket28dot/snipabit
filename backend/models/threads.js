const mongoose = require("mongoose");

const threadSchema = new mongoose.Schema({
    threadTitle: {
        type: String
    },
    threadTags: {
        type: String
    },
    link: {
        type: String
    }
})

module.exports = mongoose.model("Thread", threadSchema);