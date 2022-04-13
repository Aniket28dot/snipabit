const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String
    },
    bitTitle: {
        type: String
    },
    bitContent: {
        type: String
    },
    chapter: {
        type: String
    }
})

module.exports = mongoose.model("Bookbit", bookSchema);