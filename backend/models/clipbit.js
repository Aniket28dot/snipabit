const mongoose = require("mongoose");

const clipSchema = new mongoose.Schema({
    ClipTitle: {
        type: String
    },
    ClipLink: {
        type: String
    },
    startTime: {
        type: Number
    },
    endTime: {
        type: Number
    },
    ClipDesc: {
        type: String
    }
})

module.exports = mongoose.model("Clipbit", clipSchema);